export type Page = {
    id: string,
    uid: string | null,
    url: string,
    type: string,
    href: string,
    first_publication_date: string,
    last_publication_date: string,
    slugs: string[]
    linked_documents: string[],
    lang: "fr-fr",
    alternate_languages: string[],
}