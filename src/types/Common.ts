import { useTranslations } from 'next-intl';

type NextIntlTranslationFunction = ReturnType<typeof useTranslations>;
type GenericTranslationFunction = (
  key: string,
  values?: Record<string, unknown>
) => string;
export type TranslationFunction =
  | NextIntlTranslationFunction
  | GenericTranslationFunction;
