import type { ContentArray } from '@/types/ContentType';
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { TranslationFunction } from '@/types/Common';
const contentTemplates = ({ t }: { t: TranslationFunction }): ContentArray => [
  {
    name: t('youtubeVideoDescription.name'),
    desc: t('youtubeVideoDescription.desc'),
    category: t('youtubeVideoDescription.category'),
    icon: FaYoutube,
    aiPrompt: t('youtubeVideoDescription.aiPrompt'),
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
    aiPrompt: t('youtubeVideoIdea.aiPrompt'),
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
    aiPrompt: t('instagramHashtags.aiPrompt'),
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
    aiPrompt: t('tiktokHashtags.aiPrompt'),
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
    aiPrompt: t('linkedinPost.aiPrompt'),
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
    aiPrompt: t('tweet.aiPrompt'),
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
