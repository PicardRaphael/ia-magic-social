import { IconType } from 'react-icons/lib';

export type Content = {
  name: string;
  icon: IconType;
  category: string;
  desc: string;
  aiPrompt: IAPrompt;
  slug: string;
  form: Array<ContentForm>;
};
export type IAPrompt = {
  role: string;
  skills: string;
  context: string;
  task: string;
  process: string[];
  characteristics: string;
};
export type ContentForm = {
  label: string;
  field: string;
  name: string;
  required?: boolean;
};
export type ContentArray = Array<Content>;
