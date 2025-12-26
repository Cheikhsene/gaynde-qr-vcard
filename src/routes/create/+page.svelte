<script lang="ts">
	/**
	 * Page de creation - Gaynde Qr Vcard
	 * Formulaire avec design senegalais et QR code hautement personnalisable
	 */
	import CloseIcon from "$lib/components/CloseIcon.svelte";
	import { contact, file_name, vcard } from "$lib/stores/contact";
	import { slide } from "svelte/transition";
	import QrCode from "./QRCode.svelte";

	let qrcode: string;
	let view_vcard = false;
	let showAdvancedOptions = false;
	let logoFileInput: HTMLInputElement;
	
	// Options de personnalisation du QR code
	let qrOptions = {
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
	
	// Couleurs predefinies (palette senegalaise)
	const colorPresets = [
		{ name: "Vert Senegal", value: "#00853F" },
		{ name: "Noir", value: "#000000" },
		{ name: "Bleu Marine", value: "#1E3A5F" },
		{ name: "Rouge Teranga", value: "#E31B23" },
		{ name: "Or", value: "#B8860B" },
		{ name: "Violet", value: "#6B21A8" },
	];
	
	// Polices disponibles
	const fontPresets = [
		{ name: "Satoshi", value: "Satoshi" },
		{ name: "Clash Display", value: "Clash Display" },
		{ name: "Arial", value: "Arial" },
		{ name: "Georgia", value: "Georgia" },
		{ name: "Courier", value: "Courier New" },
	];
	
	// Textes predefinis
	const textPresets = [
		"SCANNEZ-MOI",
		"CONTACTEZ-MOI",
		"AJOUTEZ-MOI",
		"MON CONTACT",
		"",
	];
	
	/**
	 * Gere l'upload d'un logo personnalise
	 */
	function handleLogoUpload(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				qrOptions.customLogoUrl = e.target?.result as string;
				qrOptions.logoType = 'custom';
				qrOptions = { ...qrOptions }; // Trigger reactivity
			};
			reader.readAsDataURL(file);
		}
	}
	
	/**
	 * Reinitialise les options par defaut
	 */
	function resetToDefaults() {
		qrOptions = {
			showLogo: true,
			showText: true,
			logoType: 'default',
			customLogoUrl: '',
			qrColor: '#00853F',
			backgroundColor: '#FFFFFF',
			textColor: '#00853F',
			textContent: 'SCANNEZ-MOI',
			fontFamily: 'Satoshi',
			fontSize: 14,
			fontWeight: 'bold',
		};
	}
	
	/**
	 * Applique un preset de style
	 */
	function applyPreset(preset: 'senegal' | 'minimal' | 'corporate' | 'elegant') {
		switch (preset) {
			case 'senegal':
				qrOptions = { ...qrOptions, qrColor: '#00853F', textColor: '#00853F', logoType: 'default', showLogo: true, showText: true };
				break;
			case 'minimal':
				qrOptions = { ...qrOptions, qrColor: '#000000', textColor: '#000000', logoType: 'none', showLogo: false, showText: false };
				break;
			case 'corporate':
				qrOptions = { ...qrOptions, qrColor: '#1E3A5F', textColor: '#1E3A5F', logoType: 'default', showLogo: true, showText: true, textContent: 'CONTACTEZ-MOI' };
				break;
			case 'elegant':
				qrOptions = { ...qrOptions, qrColor: '#B8860B', textColor: '#B8860B', logoType: 'default', showLogo: true, showText: true, fontFamily: 'Georgia' };
				break;
		}
	}

	/**
	 * Supprime un element d'une liste par son index
	 */
	function remove_by_index<T>(
		list: T[] | undefined,
		index: number,
		empty_value: T
	): T[] {
		const empty_arr = [empty_value] as T[];
		const result = list?.filter((_, i) => index !== i) ?? empty_arr;
		return result.length ? result : empty_arr;
	}

	function remove_url(index: number): void {
		$contact.urls = remove_by_index<ContactURL>($contact.urls, index, {
			label: "",
			href: "",
		});
	}

	function remove_address(index: number): void {
		$contact.addresses = remove_by_index<ContactAddress>(
			$contact.addresses,
			index,
			{
				label: "",
				street: "",
			}
		);
	}

	function remove_phone(index: number): void {
		$contact.phone_numbers = remove_by_index<ContactPhoneNumber>(
			$contact.phone_numbers,
			index,
			{
				label: "",
				number: "",
			}
		);
	}

	function remove_email(index: number): void {
		$contact.emails = remove_by_index<ContactEmail>($contact.emails, index, {
			label: "",
			address: "",
		});
	}
</script>

<main class="relative px-4 sm:px-6 lg:px-8 pb-12">
	<!-- Background decorations -->
	<div class="absolute top-0 right-0 w-80 h-80 bg-senegal-500/10 rounded-full blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-1/4 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
	
	<div class="max-w-6xl mx-auto">
		<!-- Page header -->
		<div class="text-center py-12">
			<span class="badge --accent mb-4">Generateur vCard</span>
			<h1 class="font-display font-bold text-3xl sm:text-4xl text-baobab-100 mb-3">
				Creez votre <span class="text-gradient-green">QR Code</span>
			</h1>
			<p class="text-baobab-400 max-w-lg mx-auto">
				Remplissez vos informations de contact. Le QR code se genere automatiquement.
			</p>
		</div>
		
		<!-- Main content -->
		<div class="lg:flex lg:items-start lg:gap-12">
			<!-- Form section -->
			<div class="flex-1 space-y-6">
				<!-- Nom -->
				<section class="card">
					<h2 class="section-heading">Votre nom</h2>
					<div class="grid sm:grid-cols-3 gap-3">
					<input
							aria-label="Prenom"
						autocomplete="given-name"
						type="text"
						name="first-name"
							class="input"
							placeholder="Prenom"
						bind:value={$contact.first_name}
					/>
					<input
							aria-label="Deuxieme prenom"
						autocomplete="additional-name"
						type="text"
						name="middle-name"
							class="input"
							placeholder="Deuxieme prenom"
						bind:value={$contact.middle_name}
					/>
					<input
							aria-label="Nom de famille"
						autocomplete="family-name"
						type="text"
						name="last-name"
							class="input"
							placeholder="Nom de famille"
						bind:value={$contact.last_name}
					/>
					</div>
					<div class="mt-3">
					<input
							aria-label="Surnom"
						autocomplete="nickname"
						type="text"
						name="nickname"
							class="input"
							placeholder="Surnom (optionnel)"
						bind:value={$contact.nickname}
					/>
					</div>
			</section>

				<!-- Entreprise -->
				<section class="card">
					<h2 class="section-heading">Entreprise</h2>
					<div class="grid sm:grid-cols-2 gap-3">
					<input
							aria-label="Poste"
						autocomplete="organization-title"
						type="text"
						name="job-title"
							class="input"
							placeholder="Poste / Titre"
						bind:value={$contact.title}
					/>
					<input
							aria-label="Organisation"
						autocomplete="organization"
						type="text"
						name="organization"
							class="input"
							placeholder="Entreprise / Organisation"
						bind:value={$contact.organization}
					/>
					</div>
			</section>

				<!-- Telephones -->
				<section class="card">
					<h2 class="section-heading">Numeros de telephone</h2>
				{#if $contact?.phone_numbers?.length}
						<div class="space-y-3">
					{#each $contact.phone_numbers as phone, i}
						<fieldset
									class="flex items-center gap-3"
							transition:slide={{ duration: 200 }}
						>
							<input
										aria-label="Type de telephone"
										type="text"
										placeholder="Type (ex: Mobile)"
										class="input w-28 sm:w-36"
								bind:value={phone.label}
							/>
							<input
										aria-label="Numero de telephone"
								autocomplete="tel"
										type="tel"
										placeholder="Numero de telephone"
										class="input flex-1"
								bind:value={phone.number}
							/>
							<button
										class="btn --sm --icon --ghost"
								on:click={() => remove_phone(i)}
										aria-label="Supprimer ce numero"
							>
								<CloseIcon />
							</button>
						</fieldset>
					{/each}
						</div>
				{/if}
					<button
						class="link text-sm mt-4"
						on:click={() => {
							$contact.phone_numbers = [
								...($contact.phone_numbers ?? []),
								{ label: "", number: "" },
							];
						}}
					>
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path d="M12 5v14M5 12h14" stroke-linecap="round"/>
						</svg>
						Ajouter un numero
					</button>
			</section>

				<!-- Emails -->
				<section class="card">
					<h2 class="section-heading">Adresses email</h2>
				{#if $contact?.emails?.length}
						<div class="space-y-3">
					{#each $contact.emails as email, i}
						<fieldset
									class="flex items-center gap-3"
							transition:slide={{ duration: 200 }}
						>
							<input
										aria-label="Type d'email"
										type="text"
										placeholder="Type (ex: Pro)"
										class="input w-28 sm:w-36"
								bind:value={email.label}
							/>
							<input
										aria-label="Adresse email"
								autocomplete="email"
										type="email"
										placeholder="Adresse email"
										class="input flex-1"
								bind:value={email.address}
							/>
							<button
										class="btn --sm --icon --ghost"
								on:click={() => remove_email(i)}
										aria-label="Supprimer cet email"
							>
								<CloseIcon />
							</button>
						</fieldset>
					{/each}
						</div>
				{/if}
					<button
						class="link text-sm mt-4"
						on:click={() => {
							$contact.emails = [
								...($contact.emails ?? []),
								{ label: "", address: "" },
							];
						}}
					>
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path d="M12 5v14M5 12h14" stroke-linecap="round"/>
						</svg>
						Ajouter un email
					</button>
			</section>

				<!-- URLs -->
				<section class="card">
					<h2 class="section-heading">Sites web et liens</h2>
				{#if $contact?.urls?.length}
						<div class="space-y-3">
							{#each $contact.urls as url, i}
						<fieldset
									class="flex items-center gap-3"
							transition:slide={{ duration: 200 }}
						>
							<input
										aria-label="Type de lien"
								type="text"
										placeholder="Type (ex: LinkedIn)"
										class="input w-28 sm:w-36"
										bind:value={url.label}
							/>
							<input
								aria-label="URL"
								autocomplete="url"
										type="url"
										placeholder="https://..."
										class="input flex-1"
										bind:value={url.href}
							/>
							<button
										class="btn --sm --icon --ghost"
								on:click={() => remove_url(i)}
										aria-label="Supprimer ce lien"
							>
								<CloseIcon />
							</button>
						</fieldset>
					{/each}
						</div>
				{/if}
					<button
						class="link text-sm mt-4"
						on:click={() => {
							$contact.urls = [
								...($contact.urls ?? []),
								{ label: "", href: "" },
							];
						}}
					>
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path d="M12 5v14M5 12h14" stroke-linecap="round"/>
						</svg>
						Ajouter un lien
					</button>
			</section>

				<!-- Adresses -->
				<section class="card">
					<h2 class="section-heading">Adresses postales</h2>
				{#if $contact?.addresses?.length}
						<div class="space-y-6">
					{#each $contact.addresses as address, i}
						<fieldset
									class="relative p-4 bg-baobab-900/60 rounded-xl border border-baobab-700/30"
							transition:slide={{ duration: 200 }}
						>
									<button
										class="absolute top-3 right-3 btn --sm --icon --ghost"
										on:click={() => remove_address(i)}
										aria-label="Supprimer cette adresse"
									>
										<CloseIcon />
									</button>
									
									<div class="grid gap-3">
								<input
											aria-label="Type d'adresse"
									type="text"
											placeholder="Type (ex: Domicile, Bureau)"
											class="input"
									bind:value={address.label}
								/>
										<div class="grid sm:grid-cols-2 gap-3">
									<input
												aria-label="Rue"
										autocomplete="address-line1"
										type="text"
												placeholder="Rue"
												class="input"
										bind:value={address.street}
									/>
									<input
												aria-label="Complement"
										autocomplete="address-line2"
										type="text"
												placeholder="Complement (optionnel)"
												class="input"
										bind:value={address.street_2}
									/>
								</div>
										<div class="grid sm:grid-cols-2 gap-3">
									<input
												aria-label="Ville"
										autocomplete="address-level2"
										type="text"
												placeholder="Ville"
												class="input"
										bind:value={address.city}
									/>
									<input
												aria-label="Region"
										autocomplete="address-level1"
										type="text"
												placeholder="Region / Etat"
												class="input"
										bind:value={address.state_province}
									/>
								</div>
										<div class="grid sm:grid-cols-2 gap-3">
									<input
												aria-label="Code postal"
										autocomplete="postal-code"
										type="text"
												placeholder="Code postal"
												class="input"
										bind:value={address.postal_code}
									/>
									<input
												aria-label="Pays"
										autocomplete="country-name"
										type="text"
												placeholder="Pays"
												class="input"
										bind:value={address.country_region}
									/>
								</div>
							</div>
						</fieldset>
					{/each}
						</div>
				{/if}
				<button
						class="link text-sm mt-4"
					on:click={() => {
						$contact.addresses = [
							...($contact.addresses ?? []),
							{ label: "", street: "" },
						];
					}}
				>
						<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path d="M12 5v14M5 12h14" stroke-linecap="round"/>
						</svg>
						Ajouter une adresse
				</button>
			</section>
		</div>

			<!-- QR Code section (sticky) -->
			<aside class="lg:sticky lg:top-24 lg:w-96 mt-12 lg:mt-0 space-y-4">
				<!-- QR Code Card -->
				<div class="card --glow text-center relative overflow-hidden">
					<!-- Bande tricolore en haut -->
					<div class="absolute top-0 left-0 right-0 h-1" style="background: linear-gradient(90deg, #00853F 33%, #FDEF42 33%, #FDEF42 66%, #E31B23 66%);"></div>
					
					<h3 class="font-display font-semibold mb-4 mt-2" style="color: #F1EDE6;">Votre QR Code</h3>
					
					<!-- QR Code display -->
					<div class="rounded-xl p-4 mb-4" style="background: {qrOptions.backgroundColor};">
						<QrCode 
							data={$vcard} 
							bind:qrcode 
							options={qrOptions}
						/>
	</div>

					<!-- Download button -->
					<a 
						href={qrcode} 
						download="{$file_name}.png" 
						class="btn --accent w-full justify-center"
					>
						<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Telecharger PNG
					</a>
					
					<!-- vCard toggle -->
					<button 
						class="link text-sm mt-4" 
						on:click={() => (view_vcard = !view_vcard)}
					>
						{#if view_vcard}Masquer vCard{:else}Voir vCard{/if}
					</button>
					
					{#if view_vcard}
						<div transition:slide class="mt-3">
							<pre class="text-left text-xs p-3 rounded-lg overflow-auto max-h-40" style="background: #1A1613; color: #B9A48A; border: 1px solid rgba(96,78,62,0.3);">{$vcard}</pre>
						</div>
					{/if}
				</div>
				
				<!-- Presets rapides -->
				<div class="card">
					<h4 class="section-heading text-base">Styles rapides</h4>
					<div class="grid grid-cols-4 gap-2">
						<button 
							class="p-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
							style="background: linear-gradient(135deg, #00853F, #065F46); color: white;"
							on:click={() => applyPreset('senegal')}
							title="Style Senegal"
						>
							Senegal
						</button>
						<button 
							class="p-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
							style="background: #000; color: white;"
							on:click={() => applyPreset('minimal')}
							title="Style Minimal"
						>
							Minimal
						</button>
						<button 
							class="p-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
							style="background: #1E3A5F; color: white;"
							on:click={() => applyPreset('corporate')}
							title="Style Corporate"
						>
							Pro
						</button>
						<button 
							class="p-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
							style="background: linear-gradient(135deg, #B8860B, #DAA520); color: white;"
							on:click={() => applyPreset('elegant')}
							title="Style Elegant"
						>
							Elegant
				</button>
					</div>
				</div>
				
				<!-- Options de personnalisation avancees -->
				<div class="card">
					<button 
						class="w-full flex items-center justify-between"
						on:click={() => showAdvancedOptions = !showAdvancedOptions}
					>
						<h4 class="section-heading text-base mb-0">Personnalisation</h4>
						<svg 
							class="w-5 h-5 transition-transform duration-300" 
							style="color: #B9A48A; transform: rotate({showAdvancedOptions ? '180deg' : '0deg'});"
							viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
						>
							<path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
					
					{#if showAdvancedOptions}
						<div transition:slide class="mt-4 space-y-5">
							<!-- Section Logo -->
							<div class="space-y-3">
								<span class="text-xs font-semibold uppercase tracking-wider" style="color: #8C7259;">Logo</span>
								
								<!-- Type de logo -->
								<div class="flex gap-2">
									<button 
										class="flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all"
										style="background: {qrOptions.logoType === 'default' ? '#00853F' : 'rgba(96,78,62,0.3)'}; color: {qrOptions.logoType === 'default' ? 'white' : '#D0C4AF'};"
										on:click={() => { qrOptions.logoType = 'default'; qrOptions.showLogo = true; qrOptions = {...qrOptions}; }}
									>
										Gaynde
									</button>
									<button 
										class="flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all"
										style="background: {qrOptions.logoType === 'custom' ? '#00853F' : 'rgba(96,78,62,0.3)'}; color: {qrOptions.logoType === 'custom' ? 'white' : '#D0C4AF'};"
										on:click={() => logoFileInput.click()}
									>
										Perso
									</button>
									<button 
										class="flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all"
										style="background: {qrOptions.logoType === 'none' ? '#00853F' : 'rgba(96,78,62,0.3)'}; color: {qrOptions.logoType === 'none' ? 'white' : '#D0C4AF'};"
										on:click={() => { qrOptions.logoType = 'none'; qrOptions.showLogo = false; qrOptions = {...qrOptions}; }}
									>
										Aucun
									</button>
								</div>
								
								<!-- Input file cache -->
								<input 
									bind:this={logoFileInput}
									type="file" 
									accept="image/*" 
									class="hidden"
									on:change={handleLogoUpload}
								/>
								
								{#if qrOptions.logoType === 'custom' && qrOptions.customLogoUrl}
									<div class="flex items-center gap-2 p-2 rounded-lg" style="background: rgba(0,133,63,0.1);">
										<img src={qrOptions.customLogoUrl} alt="Logo" class="w-8 h-8 rounded object-cover" />
										<span class="text-xs flex-1" style="color: #34D399;">Logo charge</span>
										<button 
											class="text-xs" 
											style="color: #E31B23;"
											on:click={() => { qrOptions.customLogoUrl = ''; qrOptions.logoType = 'default'; qrOptions = {...qrOptions}; }}
										>
											Supprimer
										</button>
									</div>
								{/if}
							</div>
							
							<!-- Section Couleurs -->
							<div class="space-y-3">
								<span class="text-xs font-semibold uppercase tracking-wider" style="color: #8C7259;">Couleurs</span>
								
								<!-- Couleur du QR -->
								<div>
									<span class="text-xs block mb-2" style="color: #D0C4AF;">QR Code</span>
									<div class="flex flex-wrap gap-2">
										{#each colorPresets as preset}
											<button
												class="w-7 h-7 rounded-lg border-2 transition-all duration-200 hover:scale-110"
												style="background: {preset.value}; border-color: {qrOptions.qrColor === preset.value ? '#FDEF42' : 'transparent'};"
												on:click={() => { qrOptions.qrColor = preset.value; qrOptions = {...qrOptions}; }}
												title={preset.name}
											></button>
										{/each}
										<label class="w-7 h-7 rounded-lg border cursor-pointer overflow-hidden" style="border-color: rgba(96,78,62,0.5);">
											<input type="color" bind:value={qrOptions.qrColor} on:change={() => qrOptions = {...qrOptions}} class="opacity-0 absolute" />
											<div class="w-full h-full" style="background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);"></div>
										</label>
									</div>
								</div>
								
								<!-- Couleur du fond -->
								<div>
									<span class="text-xs block mb-2" style="color: #D0C4AF;">Fond</span>
									<div class="flex gap-2">
										<button
											class="w-7 h-7 rounded-lg border-2 transition-all"
											style="background: #FFFFFF; border-color: {qrOptions.backgroundColor === '#FFFFFF' ? '#FDEF42' : '#CCC'};"
											on:click={() => { qrOptions.backgroundColor = '#FFFFFF'; qrOptions = {...qrOptions}; }}
										></button>
										<button
											class="w-7 h-7 rounded-lg border-2 transition-all"
											style="background: #F5F5DC; border-color: {qrOptions.backgroundColor === '#F5F5DC' ? '#FDEF42' : 'transparent'};"
											on:click={() => { qrOptions.backgroundColor = '#F5F5DC'; qrOptions = {...qrOptions}; }}
										></button>
										<button
											class="w-7 h-7 rounded-lg border-2 transition-all"
											style="background: #FFF8DC; border-color: {qrOptions.backgroundColor === '#FFF8DC' ? '#FDEF42' : 'transparent'};"
											on:click={() => { qrOptions.backgroundColor = '#FFF8DC'; qrOptions = {...qrOptions}; }}
										></button>
										<label class="w-7 h-7 rounded-lg border cursor-pointer overflow-hidden" style="border-color: rgba(96,78,62,0.5);">
											<input type="color" bind:value={qrOptions.backgroundColor} on:change={() => qrOptions = {...qrOptions}} class="opacity-0 absolute" />
											<div class="w-full h-full" style="background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);"></div>
										</label>
									</div>
								</div>
							</div>
							
							<!-- Section Texte -->
							<div class="space-y-3">
								<div class="flex items-center justify-between">
									<span class="text-xs font-semibold uppercase tracking-wider" style="color: #8C7259;">Texte</span>
									<button 
										class="relative w-10 h-5 rounded-full transition-colors duration-300"
										style="background: {qrOptions.showText ? '#00853F' : 'rgba(96,78,62,0.5)'};"
										on:click={() => { qrOptions.showText = !qrOptions.showText; qrOptions = {...qrOptions}; }}
									>
										<span 
											class="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300"
											style="left: {qrOptions.showText ? '22px' : '2px'};"
										></span>
									</button>
								</div>
								
								{#if qrOptions.showText}
									<div transition:slide class="space-y-3">
										<!-- Contenu du texte -->
										<div>
											<span class="text-xs block mb-2" style="color: #D0C4AF;">Contenu</span>
											<div class="flex flex-wrap gap-1">
												{#each textPresets as text}
													<button
														class="py-1 px-2 rounded text-xs transition-all"
														style="background: {qrOptions.textContent === text ? '#00853F' : 'rgba(96,78,62,0.3)'}; color: {qrOptions.textContent === text ? 'white' : '#D0C4AF'};"
														on:click={() => { qrOptions.textContent = text; qrOptions = {...qrOptions}; }}
													>
														{text || 'Aucun'}
													</button>
												{/each}
											</div>
											<input 
												type="text" 
												class="input mt-2 text-xs py-2"
												placeholder="Texte personnalise..."
												bind:value={qrOptions.textContent}
												on:input={() => qrOptions = {...qrOptions}}
											/>
										</div>
										
										<!-- Couleur du texte -->
										<div>
											<span class="text-xs block mb-2" style="color: #D0C4AF;">Couleur</span>
											<div class="flex gap-2">
												<button
													class="w-7 h-7 rounded-lg border-2"
													style="background: {qrOptions.qrColor}; border-color: {qrOptions.textColor === qrOptions.qrColor ? '#FDEF42' : 'transparent'};"
													on:click={() => { qrOptions.textColor = qrOptions.qrColor; qrOptions = {...qrOptions}; }}
													title="Meme que QR"
												></button>
												<button
													class="w-7 h-7 rounded-lg border-2"
													style="background: #000; border-color: {qrOptions.textColor === '#000000' ? '#FDEF42' : 'transparent'};"
													on:click={() => { qrOptions.textColor = '#000000'; qrOptions = {...qrOptions}; }}
												></button>
												<button
													class="w-7 h-7 rounded-lg border-2"
													style="background: #666; border-color: {qrOptions.textColor === '#666666' ? '#FDEF42' : 'transparent'};"
													on:click={() => { qrOptions.textColor = '#666666'; qrOptions = {...qrOptions}; }}
												></button>
												<label class="w-7 h-7 rounded-lg border cursor-pointer overflow-hidden" style="border-color: rgba(96,78,62,0.5);">
													<input type="color" bind:value={qrOptions.textColor} on:change={() => qrOptions = {...qrOptions}} class="opacity-0 absolute" />
													<div class="w-full h-full" style="background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);"></div>
												</label>
											</div>
										</div>
										
										<!-- Police -->
										<div>
											<span class="text-xs block mb-2" style="color: #D0C4AF;">Police</span>
											<div class="flex flex-wrap gap-1">
												{#each fontPresets as font}
													<button
														class="py-1 px-2 rounded text-xs transition-all"
														style="background: {qrOptions.fontFamily === font.value ? '#00853F' : 'rgba(96,78,62,0.3)'}; color: {qrOptions.fontFamily === font.value ? 'white' : '#D0C4AF'}; font-family: {font.value};"
														on:click={() => { qrOptions.fontFamily = font.value; qrOptions = {...qrOptions}; }}
													>
														{font.name}
													</button>
												{/each}
											</div>
										</div>
										
										<!-- Taille et poids -->
										<div class="flex gap-3">
											<div class="flex-1">
												<span class="text-xs block mb-2" style="color: #D0C4AF;">Taille</span>
												<input 
													type="range" 
													min="10" 
													max="20" 
													bind:value={qrOptions.fontSize}
													on:input={() => qrOptions = {...qrOptions}}
													class="w-full accent-green-500"
												/>
											</div>
											<div>
												<span class="text-xs block mb-2" style="color: #D0C4AF;">Gras</span>
												<button 
													class="w-8 h-8 rounded-lg font-bold transition-all"
													style="background: {qrOptions.fontWeight === 'bold' ? '#00853F' : 'rgba(96,78,62,0.3)'}; color: {qrOptions.fontWeight === 'bold' ? 'white' : '#D0C4AF'};"
													on:click={() => { qrOptions.fontWeight = qrOptions.fontWeight === 'bold' ? 'normal' : 'bold'; qrOptions = {...qrOptions}; }}
												>
													B
												</button>
											</div>
										</div>
				</div>
			{/if}
							</div>
							
							<!-- Reset -->
							<button 
								class="w-full py-2 rounded-lg text-xs font-medium transition-all"
								style="background: rgba(227,27,35,0.1); color: #E31B23; border: 1px solid rgba(227,27,35,0.2);"
								on:click={resetToDefaults}
							>
								Reinitialiser par defaut
							</button>
						</div>
					{/if}
				</div>
				
				<!-- Security note -->
				<div class="p-3 rounded-xl border" style="background: rgba(0,133,63,0.05); border-color: rgba(0,133,63,0.15);">
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4 flex-shrink-0" style="color: #34D399;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						</svg>
						<p class="text-xs" style="color: #B9A48A;">
							Donnees 100% locales - Rien n'est envoye
						</p>
					</div>
				</div>
			</aside>
		</div>
	</div>
</main>
