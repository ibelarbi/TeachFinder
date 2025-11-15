import { LanguageEnum } from '@utils/types';
import { flattenMessages } from '@config/intl';
import enMessages from '@i18n/en.json';
import frMessages from '@i18n/fr.json';
import arMessages from '@i18n/ar.json';


export const getWritingDirection = (language: LanguageEnum): string => {
  const isRTLDirectionLanguage = language === LanguageEnum.AR ;
  return isRTLDirectionLanguage ? 'rtl' : 'ltr';
};

export const locales = {
  en: flattenMessages(enMessages),
  fr: flattenMessages(frMessages),
  ar: flattenMessages(arMessages),
};
