/* Shared section type for ZEN EATS legal document pages.
   Mirrors the structure used by the Privacy Policy (src/app/privacy/policyContent.ts). */

export interface PolicySection {
  id: string;
  number: number;
  title: string;
  /** Plain paragraphs of body text. */
  body?: string[];
  /** Optional intro line shown before a bullet list. */
  listIntro?: string;
  /** Optional bullet items. */
  list?: string[];
}

/** Optional contact block rendered after a specific section. */
export interface ContactBlock {
  /** Section id this block should render under. */
  sectionId: string;
  heading: string;
  email?: string;
  phone?: string;
  address?: string[];
}

export interface LegalDoc {
  /** Hero eyebrow (small uppercase label). */
  eyebrow: string;
  /** Hero title — split so part can be emphasized. e.g. ["Terms of ", "Use"]. */
  titleLead: string;
  titleEmphasis: string;
  /** Hero subtitle / intro paragraph. */
  intro: string;
  lastUpdated: string;
  sections: PolicySection[];
  /** Optional contact block(s) keyed to a section. */
  contact?: ContactBlock;
}
