export type AlignItemsProperties =
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'stretch';

export type DirectionFlexProperties = 'column-reverse' | 'column' | 'row-reverse' | 'row';

export type JustifyContentProperties =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export enum LanguageEnum {
  EN = 'en',
  FR = 'fr',
  AR = 'ar',
}

export enum SocialNameEnum {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
}

// eslint-disable-next-line
export interface NestedDictionary {
  [x: string]: NestedDictionary | string;
}

export type FlattenedDictionary = Record<string, string>;
