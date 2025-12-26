<script lang="ts">
	/**
	 * Footer - Pied de page Gaynde Qr Vcard
	 * Design senegalais avec references culturelles
	 */
	const currentYear = new Date().getFullYear();
</script>

<footer class="relative mt-24 pb-8">
	<!-- Divider tricolore -->
	<div class="divider mb-12"></div>
	
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center text-center">
			<!-- Logo simplifie avec etoile -->
			<div class="mb-6">
				<div class="w-14 h-14 rounded-xl p-2 shadow-lg" 
					 style="background: linear-gradient(135deg, #00853F 0%, #065F46 100%); box-shadow: 0 4px 20px rgba(0, 133, 63, 0.3);">
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
						<rect x="2" y="2" width="8" height="8" rx="1.5" fill="white" fill-opacity="0.95"/>
						<rect x="4" y="4" width="4" height="4" rx="0.5" fill="#00853F"/>
						<rect x="14" y="2" width="8" height="8" rx="1.5" fill="white" fill-opacity="0.95"/>
						<rect x="16" y="4" width="4" height="4" rx="0.5" fill="#00853F"/>
						<rect x="2" y="14" width="8" height="8" rx="1.5" fill="white" fill-opacity="0.95"/>
						<rect x="4" y="16" width="4" height="4" rx="0.5" fill="#00853F"/>
						<path d="M18 13l1.18 3.64 3.82.01-3.09 2.24 1.18 3.63L18 20.27l-3.09 2.25 1.18-3.63-3.09-2.24 3.82-.01L18 13z" fill="#FDEF42"/>
					</svg>
				</div>
			</div>
			
			<!-- Slogan -->
			<p class="text-baobab-400 text-sm mb-2">
				Generateur de QR Code vCard professionnel
			</p>
			<p class="text-gold-500/70 text-xs font-medium tracking-wider uppercase mb-6">
				Teranga Numerique
			</p>
			
			<!-- Liens -->
			<div class="flex items-center gap-6 text-sm mb-8">
				<a href="/" class="text-baobab-400 hover:text-senegal-400 transition-colors duration-300">
					Accueil
				</a>
				<span class="w-1 h-1 rounded-full bg-gold-500/50"></span>
				<a href="/create" class="text-baobab-400 hover:text-senegal-400 transition-colors duration-300">
					Creer un QR Code
				</a>
			</div>
			
			<!-- Bande tricolore decorative -->
			<div class="flex items-center gap-1 mb-6">
				<div class="w-8 h-1 rounded-full bg-senegal-500"></div>
				<div class="w-8 h-1 rounded-full bg-gold-500"></div>
				<div class="w-8 h-1 rounded-full bg-teranga-500"></div>
			</div>
			
			<!-- Copyright -->
			<div class="space-y-2">
				<p class="text-baobab-500 text-xs">
					&copy; {currentYear} Gaynde Qr Vcard - Tous droits reserves
				</p>
				<p class="text-baobab-600 text-xs">
					Fait avec passion au Senegal
				</p>
			</div>
		</div>
	</div>
</footer>
