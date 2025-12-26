<script lang="ts">
	/**
	 * GayndeLogo - Logo Gaynde Qr Vcard
	 * Design inspire du Senegal avec le lion (Gaynde) et l'etoile du drapeau
	 * @param {string} size - Taille: 'sm' | 'md' | 'lg'
	 * @param {boolean} showText - Afficher le texte
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let showText = true;
	
	const sizes = {
		sm: { icon: 'w-9 h-9', text: 'text-lg', sub: 'text-[10px]' },
		md: { icon: 'w-11 h-11', text: 'text-xl', sub: 'text-xs' },
		lg: { icon: 'w-14 h-14', text: 'text-3xl', sub: 'text-sm' }
	};
</script>

<div class="flex items-center gap-3 group">
	<!-- Icone avec motif QR et etoile senegalaise -->
	<div class="relative {sizes[size].icon} flex items-center justify-center">
		<!-- Glow effect -->
		<div class="absolute inset-0 bg-senegal-500/20 rounded-xl blur-lg group-hover:bg-senegal-500/30 transition-all duration-500"></div>
		
		<!-- Container principal -->
		<div class="relative w-full h-full rounded-xl p-1.5 shadow-lg overflow-hidden" 
			 style="background: linear-gradient(135deg, #00853F 0%, #065F46 100%); box-shadow: 0 4px 20px rgba(0, 133, 63, 0.35);">
			
			<!-- Bande tricolore en haut -->
			<div class="absolute top-0 left-0 right-0 h-0.5" style="background: linear-gradient(90deg, #00853F 33%, #FDEF42 33%, #FDEF42 66%, #E31B23 66%);"></div>
			
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
				<!-- Motif QR -->
				<rect x="2" y="2" width="8" height="8" rx="1.5" fill="white" fill-opacity="0.95"/>
				<rect x="4" y="4" width="4" height="4" rx="0.5" fill="#00853F"/>
				
				<rect x="14" y="2" width="8" height="8" rx="1.5" fill="white" fill-opacity="0.95"/>
				<rect x="16" y="4" width="4" height="4" rx="0.5" fill="#00853F"/>
				
				<rect x="2" y="14" width="8" height="8" rx="1.5" fill="white" fill-opacity="0.95"/>
				<rect x="4" y="16" width="4" height="4" rx="0.5" fill="#00853F"/>
				
				<!-- Etoile senegalaise (5 branches) -->
				<path 
					d="M18 13l1.18 3.64 3.82.01-3.09 2.24 1.18 3.63L18 20.27l-3.09 2.25 1.18-3.63-3.09-2.24 3.82-.01L18 13z" 
					fill="#FDEF42"
					class="drop-shadow-sm"
				/>
			</svg>
		</div>
	</div>
	
	{#if showText}
		<div class="flex flex-col leading-tight">
			<span class="font-display font-bold {sizes[size].text} tracking-tight text-baobab-100 group-hover:text-gold-400 transition-colors duration-300">
				Gaynde
			</span>
			<span class="{sizes[size].sub} font-semibold tracking-[0.2em] uppercase" style="background: linear-gradient(90deg, #00853F, #FDEF42, #E31B23); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
				QR Vcard
			</span>
		</div>
	{/if}
</div>
