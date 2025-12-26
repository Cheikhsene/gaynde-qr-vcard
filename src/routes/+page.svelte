<script lang="ts">
	/**
	 * Page d'accueil - Gaynde Qr Vcard
	 * Landing page avec identite senegalaise
	 */
</script>

<main class="relative overflow-hidden">
	<!-- Hero Section -->
	<section class="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
		<!-- Background decorations -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<!-- Orbes aux couleurs du drapeau -->
			<div class="absolute top-1/4 -left-32 w-80 h-80 bg-senegal-500/15 rounded-full blur-3xl animate-float"></div>
			<div class="absolute top-1/3 -right-32 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float animate-delay-200"></div>
			<div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teranga-500/10 rounded-full blur-3xl animate-float animate-delay-400"></div>
		</div>
		
		<div class="relative max-w-4xl mx-auto text-center">
			<!-- Badge Teranga -->
			<div class="inline-flex items-center gap-2 mb-8 animate-fade-in">
				<span class="badge">
					<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
					</svg>
					100% Gratuit et Securise
				</span>
			</div>
			
			<!-- Titre principal -->
			<h1 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-slide-up">
				<span class="text-baobab-100">Creez votre</span>
				<br />
				<span class="text-gradient">QR Code Contact</span>
			</h1>
			
			<!-- Sous-titre -->
			<p class="text-lg sm:text-xl text-baobab-300 max-w-2xl mx-auto mb-4 animate-slide-up animate-delay-100">
				Generez un QR code professionnel contenant toutes vos coordonnees.
			</p>
			<p class="text-base text-baobab-400 max-w-xl mx-auto mb-10 animate-slide-up animate-delay-200">
				Partagez-le et permettez a vos contacts de vous ajouter en un scan. 
				Compatible iPhone, Android et tous les smartphones.
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
				<a href="/create" class="btn --lg group">
					<svg class="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="3" y="3" width="7" height="7" rx="1"/>
						<rect x="14" y="3" width="7" height="7" rx="1"/>
						<rect x="3" y="14" width="7" height="7" rx="1"/>
						<path d="M14 14h3v3m4-3v7h-7"/>
					</svg>
					Creer mon QR Code
				</a>
				<a href="#comment-ca-marche" class="btn --ghost --lg">
					Decouvrir
					<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</a>
			</div>
			
			<!-- Bande tricolore decorative -->
			<div class="flex items-center justify-center gap-2 mt-16 animate-fade-in animate-delay-500">
				<div class="w-12 h-1.5 rounded-full bg-senegal-500"></div>
				<div class="w-12 h-1.5 rounded-full bg-gold-500"></div>
				<div class="w-12 h-1.5 rounded-full bg-teranga-500"></div>
			</div>
		</div>
		
		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
			<div class="w-6 h-10 rounded-full border-2 border-baobab-600 flex items-start justify-center p-1.5">
				<div class="w-1.5 h-3 rounded-full animate-pulse" style="background: linear-gradient(180deg, #00853F, #FDEF42);"></div>
			</div>
		</div>
	</section>
	
	<!-- Comment ca marche -->
	<section id="comment-ca-marche" class="py-24 px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<!-- Section header -->
			<div class="text-center mb-16">
				<span class="badge --accent mb-4">Simple et rapide</span>
				<h2 class="font-display font-bold text-3xl sm:text-4xl text-baobab-100 mb-4">
					Comment ca fonctionne
				</h2>
				<p class="text-baobab-400 max-w-xl mx-auto">
					En trois etapes simples, creez votre carte de visite numerique
				</p>
			</div>
			
			<!-- Steps avec couleurs du drapeau -->
			<div class="grid md:grid-cols-3 gap-8">
				<!-- Step 1 - Vert -->
				<div class="card group hover:border-senegal-500/30 transition-all duration-500">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
							 style="background: linear-gradient(135deg, rgba(0,133,63,0.2) 0%, rgba(0,133,63,0.1) 100%); border-color: rgba(0,133,63,0.3);">
							<span class="font-display font-bold text-2xl text-senegal-400">1</span>
						</div>
						<div>
							<h3 class="font-display font-semibold text-lg text-baobab-100 mb-2">
								Remplissez vos infos
							</h3>
							<p class="text-baobab-400 text-sm leading-relaxed">
								Ajoutez votre nom, emails, numeros de telephone, adresses et tous les details que vous souhaitez partager.
							</p>
						</div>
					</div>
				</div>
				
				<!-- Step 2 - Jaune -->
				<div class="card group hover:border-gold-500/30 transition-all duration-500">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
							 style="background: linear-gradient(135deg, rgba(253,239,66,0.15) 0%, rgba(253,239,66,0.05) 100%); border-color: rgba(253,239,66,0.3);">
							<span class="font-display font-bold text-2xl text-gold-400">2</span>
						</div>
						<div>
							<h3 class="font-display font-semibold text-lg text-baobab-100 mb-2">
								Telechargez le QR
							</h3>
							<p class="text-baobab-400 text-sm leading-relaxed">
								Votre QR code est genere automatiquement. Telechargez-le en un clic au format image PNG.
							</p>
						</div>
					</div>
				</div>
				
				<!-- Step 3 - Rouge -->
				<div class="card group hover:border-teranga-500/30 transition-all duration-500">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
							 style="background: linear-gradient(135deg, rgba(227,27,35,0.15) 0%, rgba(227,27,35,0.05) 100%); border-color: rgba(227,27,35,0.3);">
							<span class="font-display font-bold text-2xl text-teranga-400">3</span>
						</div>
						<div>
							<h3 class="font-display font-semibold text-lg text-baobab-100 mb-2">
								Partagez-le
							</h3>
							<p class="text-baobab-400 text-sm leading-relaxed">
								Imprimez-le sur vos cartes de visite, ajoutez-le a votre signature email ou partagez-le numeriquement.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Features Section -->
	<section class="py-24 px-4 sm:px-6 lg:px-8 relative">
		<!-- Background subtil -->
		<div class="absolute inset-0 bg-baobab-900/50"></div>
		
		<div class="relative max-w-6xl mx-auto">
			<!-- Section header -->
			<div class="text-center mb-16">
				<span class="badge mb-4">Fonctionnalites</span>
				<h2 class="font-display font-bold text-3xl sm:text-4xl text-baobab-100 mb-4">
					Pourquoi choisir Gaynde QR
				</h2>
				<p class="text-baobab-400 max-w-xl mx-auto">
					Une solution complete pour vos besoins de networking professionnel
				</p>
			</div>
			
			<!-- Features grid -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Feature 1 -->
				<div class="card">
					<div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background: rgba(0,133,63,0.15);">
						<svg class="w-6 h-6 text-senegal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-baobab-100 mb-2">Donnees securisees</h3>
					<p class="text-baobab-400 text-sm">Vos informations ne quittent jamais votre appareil. Aucun serveur, aucun tracking.</p>
				</div>
				
				<!-- Feature 2 -->
				<div class="card">
					<div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background: rgba(0,133,63,0.15);">
						<svg class="w-6 h-6 text-senegal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-baobab-100 mb-2">Fonctionne hors-ligne</h3>
					<p class="text-baobab-400 text-sm">Grace aux Service Workers, l'app fonctionne meme sans connexion internet.</p>
				</div>
				
				<!-- Feature 3 -->
				<div class="card">
					<div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background: rgba(0,133,63,0.15);">
						<svg class="w-6 h-6 text-senegal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-baobab-100 mb-2">Multi-plateforme</h3>
					<p class="text-baobab-400 text-sm">Compatible avec tous les appareils : iPhone, Android et plus encore.</p>
				</div>
				
				<!-- Feature 4 -->
				<div class="card">
					<div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background: rgba(253,239,66,0.1);">
						<svg class="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-baobab-100 mb-2">Sauvegarde locale</h3>
					<p class="text-baobab-400 text-sm">Vos donnees sont sauvegardees localement. Revenez quand vous voulez.</p>
				</div>
				
				<!-- Feature 5 -->
				<div class="card">
					<div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background: rgba(253,239,66,0.1);">
						<svg class="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-baobab-100 mb-2">Export PNG</h3>
					<p class="text-baobab-400 text-sm">Telechargez votre QR code en haute qualite, pret a imprimer.</p>
				</div>
				
				<!-- Feature 6 -->
				<div class="card">
					<div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background: rgba(253,239,66,0.1);">
						<svg class="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-baobab-100 mb-2">Format vCard</h3>
					<p class="text-baobab-400 text-sm">Standard universel compatible avec tous les gestionnaires de contacts.</p>
				</div>
			</div>
		</div>
	</section>
	
	<!-- CTA Section -->
	<section class="py-24 px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<div class="card --glow text-center py-16 px-8 relative overflow-hidden">
				<!-- Decoration tricolore -->
				<div class="absolute top-0 left-0 right-0 h-1" style="background: linear-gradient(90deg, #00853F 33%, #FDEF42 33%, #FDEF42 66%, #E31B23 66%);"></div>
				
				<!-- Etoile decorative -->
				<div class="absolute top-4 right-4 opacity-20">
					<svg class="w-16 h-16 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
					</svg>
				</div>
				
				<h2 class="font-display font-bold text-2xl sm:text-3xl text-baobab-100 mb-4 relative">
					Pret a creer votre QR Code ?
				</h2>
				<p class="text-baobab-400 mb-8 max-w-md mx-auto">
					C'est gratuit, rapide et vos donnees restent 100% privees.
				</p>
				<a href="/create" class="btn --accent --lg">
					Commencer maintenant
					<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</a>
			</div>
		</div>
	</section>
</main>
