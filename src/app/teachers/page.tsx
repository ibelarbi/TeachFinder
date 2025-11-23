import Teachers from "@templates/Teachers/Teachers";
import TranslationsProvider from "@providers/TranslationsProvider/TranslationsProvider";
import { LanguageEnum } from "@utils/types";
import Layout from "@templates/Layout/Layout";
import { NextPage } from "next";

const TeachersPage: NextPage = () => {
  return (
    <TranslationsProvider language={LanguageEnum.EN}>
      <Layout>
        <Teachers />
      </Layout>
    </TranslationsProvider>
  );
};

export default TeachersPage;
