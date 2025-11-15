import type { ReactNode } from 'react';
import type { LanguageEnum } from '@utils/types';

export interface ITranslationsProviderProps {
  language: LanguageEnum;
  children: ReactNode;
}
