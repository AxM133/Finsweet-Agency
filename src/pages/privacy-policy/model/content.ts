import type { ContentBlock } from '@/shared/lib'

export const PRIVACY_UPDATED_AT = '2021-01-27'

const INTRO =
  'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.’'

const SHORT =
  'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.'

export const PRIVACY_CONTENT: ContentBlock[] = [
  { type: 'heading', level: 2, text: 'Transform Your Idea Into Reality with Finsweet a Leading Digital Agency' },
  { type: 'paragraph', text: INTRO },
  { type: 'paragraph', text: SHORT },
  { type: 'paragraph', text: SHORT },
  { type: 'paragraph', text: INTRO },
  { type: 'heading', level: 3, text: 'We disclose your information in the following manner:' },
  {
    type: 'paragraph',
    text: 'Business partners, suppliers and sub-contractors (“Affiliates”): Affiliates may use this information to help provide, understand, and improve our services and Affiliate’s own services for the performance of any contract we enter into.',
  },
  {
    type: 'paragraph',
    text: 'Financial Institutions and Auditors: In order to complete third party financial, technical and legal audits of our operations to help us operate our business, we may need to share your information with financial institutions and auditors.',
  },
  {
    type: 'paragraph',
    text: 'Advertisers and Advertising Networks: To provide you with select and serve relevant advertisements to you and others, we may share your data with advertisers and advertising networks. We do not disclose your Personal Information or Sensitive Personal Information to our advertisers, but we may provide them with aggregate information about our users (for example, we may inform them that any given number of participants in a specified age group who clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target.',
  },
]
