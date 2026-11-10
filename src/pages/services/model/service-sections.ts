import { images } from '@/shared/assets'

const TEXT =
  'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.'

/** Content of the alternating blocks. `id` is the anchor used by links across the site. */
export const SERVICE_SECTIONS = [
  {
    id: 'technical-support',
    title: 'Technical Support',
    heading: 'Best in class tech support for your company. We become your tech backbone',
    text: TEXT,
    image: images.service1,
    imageAlt: 'Support engineers working together at their desks',
    tone: 'white',
  },
  {
    id: 'development',
    title: 'Development',
    heading: 'Bring your ideas to reality with certified team of developers, working with latest technologies',
    text: TEXT,
    image: images.service2,
    imageAlt: 'Developer writing code on a laptop',
    tone: 'mint',
  },
  {
    id: 'aws-azure',
    title: 'AWS/Azure',
    heading: 'We help you deploy, manage and secure your application on leading web services',
    text: TEXT,
    image: images.service3,
    imageAlt: 'Wide monitor with code on a white desk',
    tone: 'white',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    heading: 'Get advice from world class professionals',
    text: TEXT,
    image: images.service4,
    imageAlt: 'Consultant presenting in a meeting room',
    tone: 'lavender',
  },
  {
    id: 'information-technology',
    title: 'Information Technology',
    heading: 'We want to get local identification in every corner of the world in this era of global citizenship.',
    text: TEXT,
    image: images.service5,
    imageAlt: 'Laptop with code next to a cup of coffee',
    tone: 'white',
  },
] as const

export type ServiceSectionData = (typeof SERVICE_SECTIONS)[number]
