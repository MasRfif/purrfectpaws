import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeTeamsFields {
  teamName: EntryFieldTypes.RichText;
  jobTitle: EntryFieldTypes.RichText;
  jobDesc: EntryFieldTypes.RichText;
  photoProfile: EntryFieldTypes.AssetLink;
}

export type TypeTeamsSkeleton = EntrySkeletonType<TypeTeamsFields, string>;

export type TypeTeams<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeTeamsSkeleton, Modifiers, Locales>;

export interface TeamImage {
  fields: {
    file: {
      url: string;
      details: { image: { width: number; height: number } };
    };
  };
}
