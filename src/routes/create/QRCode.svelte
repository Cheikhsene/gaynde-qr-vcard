<script lang="ts">
	/**
	 * QRCode - Composant de generation de QR code hautement personnalisable
	 * 
	 * @param {string} data - Donnees vCard a encoder
	 * @param {string} qrcode - URL du QR code genere (bind)
	 * @param {object} options - Options de personnalisation
	 */
	import { toCanvas } from "qrcode";
	import { onMount, tick } from "svelte";

	export let data: string;
	export let qrcode: string = '';
	
	// Options de personnalisation
	export let options = {
		showLogo: true,
		showText: true,
		logoType: 'default' as 'default' | 'custom' | 'none',
		customLogoUrl: '',
		qrColor: '#00853F',
		backgroundColor: '#FFFFFF',
		textColor: '#00853F',
		textContent: 'SCANNEZ-MOI',
		fontFamily: 'Satoshi',
		fontSize: 14,
		fontWeight: 'bold',
	};

	let canvas: HTMLCanvasElement;
	let isLoading = true;
	let error: string | null = null;
	let customLogoImage: HTMLImageElement | null = null;
	let isMounted = false;

	// Taille du QR code
	const QR_SIZE = 280;
	const LOGO_SIZE = 56;
	const TEXT_AREA_HEIGHT = 30;

	/**
	 * Charge une image de logo personnalise
	 */
	async function loadCustomLogo(url: string): Promise<HTMLImageElement | null> {
		if (!url) return null;
		
		return new Promise((resolve) => {
			const img = new Image();
			img.crossOrigin = 'anonymous';
			img.onload = () => resolve(img);
			img.onerror = () => resolve(null);
			img.src = url;
		});
	}

	/**
	 * Dessine le logo Gaynde par defaut au centre du QR code
	 */
	function drawDefaultLogo(ctx: CanvasRenderingContext2D) {
		const centerX = QR_SIZE / 2;
		const centerY = QR_SIZE / 2;
		const logoRadius = LOGO_SIZE / 2;
		const padding = 6;

		// Fond blanc circulaire avec bordure
		ctx.beginPath();
		ctx.arc(centerX, centerY, logoRadius + padding, 0, Math.PI * 2);
		ctx.fillStyle = options.backgroundColor;
		ctx.fill();
		ctx.strokeStyle = options.qrColor;
		ctx.lineWidth = 2;
		ctx.stroke();

		// Fond colore pour le logo
		ctx.beginPath();
		ctx.arc(centerX, centerY, logoRadius, 0, Math.PI * 2);
		ctx.fillStyle = options.qrColor;
		ctx.fill();

		// Motif QR simplifie (3 carres blancs)
		const boxSize = LOGO_SIZE / 4;
		const offsetX = centerX - LOGO_SIZE / 2 + 8;
		const offsetY = centerY - LOGO_SIZE / 2 + 8;
		
		ctx.fillStyle = options.backgroundColor;
		
		// Carre haut-gauche
		ctx.fillRect(offsetX, offsetY, boxSize, boxSize);
		// Carre haut-droit
		ctx.fillRect(offsetX + boxSize * 1.5, offsetY, boxSize, boxSize);
		// Carre bas-gauche
		ctx.fillRect(offsetX, offsetY + boxSize * 1.5, boxSize, boxSize);

		// Etoile doree
		const starX = centerX + 6;
		const starY = centerY + 6;
		
		ctx.fillStyle = "#FDEF42";
		ctx.beginPath();
		drawStar(ctx, starX, starY, 5, 10, 5);
		ctx.fill();
	}

	/**
	 * Dessine un logo personnalise au centre
	 */
	function drawCustomLogo(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
		const centerX = QR_SIZE / 2;
		const centerY = QR_SIZE / 2;
		const logoRadius = LOGO_SIZE / 2;
		const padding = 6;

		// Fond blanc avec bordure
		ctx.beginPath();
		ctx.arc(centerX, centerY, logoRadius + padding, 0, Math.PI * 2);
		ctx.fillStyle = options.backgroundColor;
		ctx.fill();
		ctx.strokeStyle = options.qrColor;
		ctx.lineWidth = 2;
		ctx.stroke();

		// Clip circulaire pour le logo
		ctx.save();
		ctx.beginPath();
		ctx.arc(centerX, centerY, logoRadius - 2, 0, Math.PI * 2);
		ctx.clip();

		// Dessiner l'image centree
		const imgSize = LOGO_SIZE - 8;
		ctx.drawImage(
			img,
			centerX - imgSize / 2,
			centerY - imgSize / 2,
			imgSize,
			imgSize
		);

		ctx.restore();
	}

	/**
	 * Dessine une etoile a 5 branches
	 */
	function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
		let rot = Math.PI / 2 * 3;
		let x = cx;
		let y = cy;
		const step = Math.PI / spikes;

		ctx.moveTo(cx, cy - outerRadius);
		for (let i = 0; i < spikes; i++) {
			x = cx + Math.cos(rot) * outerRadius;
			y = cy + Math.sin(rot) * outerRadius;
			ctx.lineTo(x, y);
			rot += step;

			x = cx + Math.cos(rot) * innerRadius;
			y = cy + Math.sin(rot) * innerRadius;
			ctx.lineTo(x, y);
			rot += step;
		}
		ctx.lineTo(cx, cy - outerRadius);
		ctx.closePath();
	}

	/**
	 * Genere le QR code avec personnalisation complete
	 */
	async function generateQRCode() {
		if (!isMounted || !canvas || !data) {
			return;
		}
		
		isLoading = true;
		error = null;

		try {
			// Charger le logo personnalise si necessaire
			if (options.logoType === 'custom' && options.customLogoUrl) {
				customLogoImage = await loadCustomLogo(options.customLogoUrl);
			}

			// Calculer la hauteur totale du canvas
			const totalHeight = options.showText ? QR_SIZE + TEXT_AREA_HEIGHT : QR_SIZE;
			
			// Ajuster la taille du canvas
			canvas.width = QR_SIZE;
			canvas.height = totalHeight;

			const ctx = canvas.getContext("2d");
			if (!ctx) throw new Error("Canvas context not available");

			// Fond blanc
			ctx.fillStyle = options.backgroundColor;
			ctx.fillRect(0, 0, QR_SIZE, totalHeight);

			// Options QR code avec correction d'erreur elevee
			const qrOptions = {
				width: QR_SIZE,
				margin: 2,
				errorCorrectionLevel: (options.logoType !== 'none' && options.showLogo) ? 'H' as const : 'M' as const,
				color: {
					dark: options.qrColor,
					light: options.backgroundColor,
				},
			};

			// Creer un canvas temporaire pour le QR
			const tempCanvas = document.createElement('canvas');
			await toCanvas(tempCanvas, data, qrOptions);

			// Dessiner le QR sur le canvas principal
			ctx.drawImage(tempCanvas, 0, 0);

			// Ajouter le logo si active
			if (options.showLogo && options.logoType !== 'none') {
				if (options.logoType === 'custom' && customLogoImage) {
					drawCustomLogo(ctx, customLogoImage);
				} else if (options.logoType === 'default') {
					drawDefaultLogo(ctx);
				}
			}

			// Ajouter le texte si active
			if (options.showText && options.textContent) {
				const textY = QR_SIZE + TEXT_AREA_HEIGHT / 2 + 4;
				
				ctx.font = `${options.fontWeight} ${options.fontSize}px '${options.fontFamily}', system-ui, sans-serif`;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillStyle = options.textColor;
				ctx.fillText(options.textContent.toUpperCase(), QR_SIZE / 2, textY);
			}

			// Convertir en data URL
			qrcode = canvas.toDataURL("image/png");
			
		} catch (err) {
			error = err instanceof Error ? err.message : "Erreur de generation";
			console.error("Erreur QR:", err);
		} finally {
			isLoading = false;
		}
	}

	// Regenerer quand les donnees ou options changent
	$: if (isMounted && data && options) {
		generateQRCode();
	}

	onMount(async () => {
		isMounted = true;
		await tick();
		generateQRCode();
	});
</script>

<div class="flex flex-col items-center justify-center w-full">
	{#if isLoading && !qrcode}
		<!-- Loading state -->
		<div class="flex flex-col items-center gap-3 min-h-[200px] justify-center">
			<div class="w-10 h-10 rounded-full animate-spin" style="border: 3px solid rgba(0,133,63,0.2); border-top-color: #00853F;"></div>
			<p class="text-sm" style="color: #8C7259;">Generation en cours...</p>
		</div>
	{/if}
	
	{#if error}
		<!-- Error state -->
		<div class="flex flex-col items-center gap-2 text-center p-4">
			<svg class="w-8 h-8" style="color: #E31B23;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="12" r="10"/>
				<path d="M12 8v4M12 16h.01"/>
			</svg>
			<p class="text-sm" style="color: #E31B23;">{error}</p>
		</div>
	{/if}
	
	<!-- QR Code Canvas (toujours present mais cache si loading) -->
	<canvas 
		bind:this={canvas}
		class="max-w-full h-auto rounded-lg"
		class:hidden={isLoading && !qrcode}
	></canvas>
</div>

<style>
	canvas {
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
	}
</style>
