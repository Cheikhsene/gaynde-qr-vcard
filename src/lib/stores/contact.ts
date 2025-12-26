/**
 * Store de gestion des contacts - Gaynde Qr Vcard
 * Gere les donnees de contact et la generation du format vCard
 */
import { local_storage_store } from "$lib/stores/localstorage";
import flush from "just-flush";
import kebab from "just-kebab-case";
import { derived } from "svelte/store";

/**
 * Store principal des informations de contact
 * Les donnees sont persistees dans le localStorage
 */
export const contact = local_storage_store<Partial<ContactInfo>>("contact", {
	title: "Directeur General",
	organization: "Gaynde Tech Solutions",
	first_name: "Cheikh",
	middle_name: "M Bar",
	last_name: "SENE",
	nickname: "Cheikh",
	emails: [
		{ label: "pro", address: "cheikh.sene@gayndetech.sn" },
		{ label: "perso", address: "cheikh.sene@gmail.com" },
	],
	phone_numbers: [
		{ label: "mobile", number: "+221 77 123 45 67" },
		{ label: "bureau", number: "+221 33 821 00 00" },
		{ label: "whatsapp", number: "+221 76 987 65 43" },
	],
	addresses: [
		{
			label: "bureau",
			street: "Rue Amadou Assane Ndoye x Rue de Thann",
			street_2: "Immeuble Kebe, 3eme etage",
			city: "Dakar",
			state_province: "Plateau",
			postal_code: "BP 12345",
			country_region: "Senegal",
		},
	],
	urls: [
		{ label: "site web", href: "https://gayndetech.sn" },
		{ label: "linkedin", href: "https://linkedin.com/in/cheikh-sene" },
	],
});

/**
 * Derive le nom de fichier a partir du contact
 */
export const file_name = derived(contact, ($contact) => {
	const parts: string[] = [];
	if ($contact?.first_name) parts.push($contact.first_name);
	if ($contact?.last_name) parts.push($contact.last_name);
	return kebab(parts.join("-"));
});

/**
 * Derive le contenu vCard a partir du contact
 */
export const vcard = derived(contact, ($contact) => make_vcard($contact));

/**
 * Genere le contenu vCard au format 4.0
 * @param contact - Informations de contact
 * @returns Chaine vCard formatee
 */
function make_vcard(contact: Partial<ContactInfo>): string {
	const parts: string[] = ["BEGIN:VCARD", "VERSION:4.0"];

	if (contact.first_name || contact.last_name || contact.middle_name) {
		const names = [contact.first_name, contact.middle_name, contact.last_name];
		parts.push(
			`N:${contact.last_name};${contact.first_name};${contact.middle_name}`,
			`FN:${names.join(" ")}`
		);
	}

	if (contact.title) parts.push(`TITLE:${contact.title}`);

	if (contact.organization) parts.push(`ORG:${contact.organization}`);

	if (contact.nickname) parts.push(`NICKNAME:${contact.nickname}`);

	parts.push(
		...construct_fields(
			contact?.emails,
			(email) => `EMAIL;${email.label};PREF:${email.address}`
		)
	);

	parts.push(
		...construct_fields(
			contact?.phone_numbers,
			(phone) => `TEL;${phone.label};VOICE;PREF:${phone.number}`
		)
	);

	// Format d'adresse vCard
	// https://datatracker.ietf.org/doc/id/draft-ietf-vcarddav-vcardrev-02.html#ADR
	parts.push(
		...construct_fields(contact?.addresses, (address) => {
			const addr = [
				address.po_box,
				address.street_2,
				address.street,
				address.city,
				address.state_province,
				address.postal_code,
				address.country_region,
			];
			return `ADR;${address.label};POSTAL;PARCEL;DOM;PREF:${addr.join(";")}`;
		})
	);

	parts.push(
		...construct_fields(
			contact?.urls,
			(url) => `URL;${url.label};PREF:${url.href}`
		)
	);

	parts.push(`REV:${new Date().toISOString()}`, "END:VCARD");

	return parts.join("\n");
}

/**
 * Construit les champs vCard pour une collection
 * @param collection - Collection d'elements
 * @param cb - Callback de formatage
 * @returns Tableau de champs vCard
 */
function construct_fields<T>(
	collection: T[] | undefined,
	cb: (v: T) => string
): string[] {
	const fields: string[] = [];

	if (!collection?.length) return fields;

	if (collection.length) {
		for (const item of collection) {
			if (!has_values(item)) continue;
			fields.push(cb(item));
		}
	}

	return fields;
}

/**
 * Verifie si un objet contient des valeurs non vides
 * @param obj - Objet a verifier
 * @returns true si l'objet a des valeurs
 */
function has_values(obj: Record<string, any>): boolean {
	const values = Object.values(obj).map((v) => (v === "" ? undefined : v));
	const flushed = flush(values);
	return Boolean(flushed?.length);
}
