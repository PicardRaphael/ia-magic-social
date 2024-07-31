import { IconType } from 'react-icons/lib';

export type Content = {
  name: string;
  icon: IconType;
  category: string;
  desc: string;
  aiPrompt: string;
  slug: string;
  form: Array<ContentForm>;
};

export type ContentForm = {
  label: string;
  field: string;
  name: string;
  required?: boolean;
};
export type ContentArray = Array<Content>;
