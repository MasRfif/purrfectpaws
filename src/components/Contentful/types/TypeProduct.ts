import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProductFields {
  featuredImage: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Text;
  productName: EntryFieldTypes.Text;
  price: EntryFieldTypes.Number;
  fields: EntryFieldTypes.AssetLink;
}

export type TypeProductSkeleton = EntrySkeletonType<TypeProductFields, string>;

export type TypeProduct<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductSkeleton, Modifiers, Locales>;

export interface ProductImage {
  fields: {
    file: {
      url: string;
      details: { image: { width: number; height: number } };
    };
  };
}
