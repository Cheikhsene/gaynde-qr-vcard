<script lang="ts">
	/**
	 * Layout principal - Gaynde Qr Vcard
	 * Structure de base avec identite senegalaise
	 */
	import "../app.postcss";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import { navigating } from "$app/stores";
	import { fade } from "svelte/transition";

	let duration = 200;

	$: changed = $navigating?.from !== $navigating?.to;
</script>

<svelte:head>
	<title>Gaynde Qr Vcard - Generateur de QR Code Contact Professionnel</title>
	<meta
		name="description"
		content="Creez gratuitement un QR code vCard professionnel. Partagez vos coordonnees en un scan. Securise, hors-ligne, compatible iPhone et Android. Fait au Senegal."
	/>
	<meta name="keywords" content="QR code, vCard, carte de visite, contact, generateur, gratuit, professionnel, Senegal, Dakar" />
	<meta name="author" content="Gaynde Qr Vcard" />
	
	<!-- Open Graph / Social Media -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Gaynde Qr Vcard - Generateur de QR Code Contact" />
	<meta property="og:description" content="Creez gratuitement un QR code vCard professionnel. Partagez vos coordonnees en un scan." />
	<meta property="og:site_name" content="Gaynde Qr Vcard" />
	
	<!-- Theme color - Vert Senegal -->
	<meta name="theme-color" content="#00853F" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	{#key changed}
		<div class="flex-1" in:fade={{ delay: duration, duration }} out:fade={{ duration }}>
			<slot />
		</div>
	{/key}

	<Footer />
</div>
