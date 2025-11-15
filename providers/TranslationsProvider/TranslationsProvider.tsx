"use client";

import type { FC } from "react";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { LanguageEnum } from "@utils/types";
import type { ITranslationsProviderProps } from "@providers/TranslationsProvider/types";
import { getWritingDirection, locales } from "./services";

const TranslationsProvider: FC<ITranslationsProviderProps> = ({
  language,
  children,
}) => {
  useEffect(() => {
    document.body.setAttribute("dir", getWritingDirection(language));
  }, [language]);
  return (
    <IntlProvider
      locale={language}
      messages={locales[language]}
      defaultLocale={LanguageEnum.EN}
    >
      {children}
    </IntlProvider>
  );
};

export default TranslationsProvider;
