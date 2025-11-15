import Teachers from "@templates/teachers/Teachers";
import { getTeachers } from "@services/teachers/services";
import TranslationsProvider from "@providers/TranslationsProvider/TranslationsProvider";
import { LanguageEnum } from "@utils/types";

export default async function TeachersPage() {
  const teachers = await getTeachers();

  return (
    <TranslationsProvider language={LanguageEnum.EN}>
      <div>
        <Teachers teachers={teachers} />
      </div>
    </TranslationsProvider>
  );
}
