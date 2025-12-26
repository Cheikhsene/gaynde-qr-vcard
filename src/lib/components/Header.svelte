<script lang="ts">
	/**
	 * Header - En-tete Gaynde Qr Vcard
	 * Design senegalais avec navigation
	 */
	import GayndeLogo from "./GayndeLogo.svelte";
	import { page } from '$app/stores';
	
	$: isCreatePage = $page.url.pathname === '/create';
</script>

<header class="fixed top-0 left-0 right-0 z-50">
	<!-- Fond avec effet glass -->
	<div class="absolute inset-0 bg-baobab-950/85 backdrop-blur-xl"></div>
	
	<!-- Bande tricolore en bas du header -->
	<div class="absolute bottom-0 left-0 right-0 h-[2px]" style="background: linear-gradient(90deg, #00853F 33%, #FDEF42 33%, #FDEF42 66%, #E31B23 66%);"></div>
	
	<nav class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 sm:h-20">
			<!-- Logo -->
			<a href="/" class="relative z-10 transition-transform duration-300 hover:scale-105">
				<GayndeLogo size="sm" />
			</a>
			
			<!-- Navigation -->
			<div class="flex items-center gap-4">
				{#if !isCreatePage}
					<a href="/create" class="btn --sm">
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path d="M12 5v14M5 12h14" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Creer
					</a>
				{:else}
					<a href="/" class="btn --sm --ghost">
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M19 12H5M12 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Accueil
					</a>
				{/if}
			</div>
		</div>
	</nav>
</header>

<!-- Spacer -->
<div class="h-16 sm:h-20"></div>
