import type { ContentArray } from '@/types/ContentType';
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { TranslationFunction } from '@/types/Common';
const getProcessSteps = (t: TranslationFunction, baseKey: string): string[] => {
  const steps: string[] = [];
  let i = 1;
  while (true) {
    const step = t(`${baseKey}.${i}`, { fallback: '' });
    if (step === '') break;
    steps.push(step);
    i++;
  }
  return steps;
};
const contentTemplates = ({ t }: { t: TranslationFunction }): ContentArray => [
  {
    name: t('youtubeVideoDescription.name'),
    desc: t('youtubeVideoDescription.desc'),
    category: t('youtubeVideoDescription.category'),
    icon: FaYoutube,
    aiPrompt: {
      role: t('youtubeVideoDescription.aiPrompt.role'),
      skills: t('youtubeVideoDescription.aiPrompt.competences'),
      context: t('youtubeVideoDescription.aiPrompt.contexte'),
      task: t('youtubeVideoDescription.aiPrompt.tache'),
      process: getProcessSteps(t, 'youtubeVideoDescription.aiPrompt.process'),
      characteristics: t('youtubeVideoDescription.aiPrompt.caracteristiques'),
    },
    slug: 'youtube-description',
    form: [
      {
        label: t('youtubeVideoDescription.form.title.label'),
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: t('youtubeVideoDescription.form.outline.label'),
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: t('youtubeVideoIdea.name'),
    desc: t('youtubeVideoIdea.desc'),
    category: t('youtubeVideoIdea.category'),
    icon: FaYoutube,
    aiPrompt: {
      role: t('youtubeVideoIdea.aiPrompt.role'),
      skills: t('youtubeVideoIdea.aiPrompt.competences'),
      context: t('youtubeVideoIdea.aiPrompt.contexte'),
      task: t('youtubeVideoIdea.aiPrompt.tache'),
      process: getProcessSteps(t, 'youtubeVideoIdea.aiPrompt.process'),
      characteristics: t('youtubeVideoIdea.aiPrompt.caracteristiques'),
    },
    slug: 'generate-youtube-video-idea',
    form: [
      {
        label: t('youtubeVideoIdea.form.niche.label'),
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: t('youtubeVideoIdea.form.outline.label'),
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: t('instagramHashtags.name'),
    desc: t('instagramHashtags.desc'),
    category: t('instagramHashtags.category'),
    icon: FaInstagram,
    aiPrompt: {
      role: t('instagramHashtags.aiPrompt.role'),
      skills: t('instagramHashtags.aiPrompt.competences'),
      context: t('instagramHashtags.aiPrompt.contexte'),
      task: t('instagramHashtags.aiPrompt.tache'),
      process: getProcessSteps(t, 'instagramHashtags.aiPrompt.process'),
      characteristics: t('instagramHashtags.aiPrompt.caracteristiques'),
    },
    slug: 'generate-instagram-hashtags',
    form: [
      {
        label: t('instagramHashtags.form.niche.label'),
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: t('instagramHashtags.form.outline.label'),
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: t('tiktokHashtags.name'),
    desc: t('tiktokHashtags.desc'),
    category: t('tiktokHashtags.category'),
    icon: FaTiktok,
    aiPrompt: {
      role: t('tiktokHashtags.aiPrompt.role'),
      skills: t('tiktokHashtags.aiPrompt.competences'),
      context: t('tiktokHashtags.aiPrompt.contexte'),
      task: t('tiktokHashtags.aiPrompt.tache'),
      process: getProcessSteps(t, 'tiktokHashtags.aiPrompt.process'),
      characteristics: t('tiktokHashtags.aiPrompt.caracteristiques'),
    },
    slug: 'generate-tiktok-hashtags',
    form: [
      {
        label: t('tiktokHashtags.form.niche.label'),
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: t('tiktokHashtags.form.outline.label'),
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: t('linkedinPost.name'),
    desc: t('linkedinPost.desc'),
    category: t('linkedinPost.category'),
    icon: FaLinkedin,
    aiPrompt: {
      role: t('linkedinPost.aiPrompt.role'),
      skills: t('linkedinPost.aiPrompt.competences'),
      context: t('linkedinPost.aiPrompt.contexte'),
      task: t('linkedinPost.aiPrompt.tache'),
      process: getProcessSteps(t, 'linkedinPost.aiPrompt.process'),
      characteristics: t('linkedinPost.aiPrompt.caracteristiques'),
    },
    slug: 'generate-likedin-post',
    form: [
      {
        label: t('linkedinPost.form.niche.label'),
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: t('linkedinPost.form.outline.label'),
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: t('tweet.name'),
    desc: t('tweet.desc'),
    category: t('tweet.category'),
    icon: FaTwitter,
    aiPrompt: {
      role: t('tweet.aiPrompt.role'),
      skills: t('tweet.aiPrompt.competences'),
      context: t('tweet.aiPrompt.contexte'),
      task: t('tweet.aiPrompt.tache'),
      process: getProcessSteps(t, 'tweet.aiPrompt.process'),
      characteristics: t('tweet.aiPrompt.caracteristiques'),
    },
    slug: 'generate-tweet-post',
    form: [
      {
        label: t('tweet.form.niche.label'),
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: t('tweet.form.outline.label'),
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
];

export default contentTemplates;
