import { images } from '@/shared/assets'

import type { ContentBlock } from '@/shared/lib'

import type { Post, PostDetail } from '../model/schema'

const ANDREW = { name: 'Andrew Jonson', avatar: images.avatarAndrew }
const MATHEW = { name: 'Mathew Jasele', avatar: images.avatarMathew }
const HUSSEN = { name: 'Hussen Abakas', avatar: images.avatarHussen }
const JAVENA = { name: 'Javena Melo', avatar: images.team3 }

const EXCERPT = 'It is a long established fact that a reader will be distracted by the readable content of a page.'

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

function post(id: number, title: string, date: string, image: string, author: Post['author']): Post {
  return { id: `post-${id}`, slug: slugify(title), title, excerpt: EXCERPT, date, image, author }
}

/** Big post at the top of the Blog page. */
export const TRENDING_POST: Post = {
  id: 'trending',
  slug: 'breaking-the-code-how-did-we-build-our-figma-plugin',
  title: 'Breaking the code How did we build our Figma plugin',
  excerpt:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.',
  date: '2021-01-27',
  image: images.blogTrending,
  author: ANDREW,
}

/** Side panel next to the trending post. */
export const POPULAR_POSTS: Post[] = [
  post(101, 'Great design expectations prejudice in digital products in Next Year', '2021-01-19', images.blogRecent1, ANDREW),
  post(102, 'Why accessibility is the next big design expectation', '2021-01-19', images.blogRecent2, MATHEW),
  post(103, 'Design systems that scale: lessons from a growing product team', '2021-01-19', images.blogRecent3, HUSSEN),
]

/** Newest first. The first four are "recent", the rest is the archive. */
export const REGULAR_POSTS: Post[] = [
  post(1, 'Today’s best design trends for digital products', '2021-01-19', images.blog1, JAVENA),
  post(2, 'A practical guide to building a brand strategy', '2021-01-19', images.blog2, JAVENA),
  post(3, 'How remote teams stay creative together', '2021-01-18', images.blogRecent3, ANDREW),
  post(4, 'Why every product needs a design system', '2021-01-18', images.blogRecent4, ANDREW),

  post(5, 'We aim to attain the greatest satisfaction for our clients', '2021-01-17', images.blogPost1, ANDREW),
  post(6, 'How we run design critiques that people actually enjoy', '2021-01-16', images.blogPost2, MATHEW),
  post(7, 'Choosing the right tech stack for your next product', '2021-01-15', images.blogPost3, HUSSEN),
  post(8, 'A small guide to writing better UX copy', '2021-01-14', images.blogPost4, ANDREW),
  post(9, 'What we learned from migrating to the cloud', '2021-01-13', images.blogPost5, MATHEW),
  post(10, 'Sketching ideas fast: from paper to prototype', '2021-01-12', images.blogPost6, HUSSEN),
  post(11, 'Open office or remote: finding the balance', '2021-01-11', images.blogRecent1, ANDREW),
  post(12, 'Building a design system that lasts', '2021-01-10', images.blogRecent2, MATHEW),
]

export const RECENT_COUNT = 4

export const ALL_POSTS: Post[] = [TRENDING_POST, ...POPULAR_POSTS, ...REGULAR_POSTS]

const HEADING = 'Transform Your Idea Into Reality with Ether a Leading Digital Agency'

const LONG =
  'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.’'

const SHORT =
  'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.'

const ARTICLE: ContentBlock[] = [
  { type: 'heading', level: 2, text: HEADING },
  { type: 'paragraph', text: LONG },
  { type: 'paragraph', text: SHORT },
  { type: 'paragraph', text: SHORT },
  { type: 'paragraph', text: LONG },
  { type: 'heading', level: 3, text: HEADING },
  {
    type: 'list',
    style: 'plain',
    items: [
      'Step 1: Download the plugin from Figma community, search Ghost UXWriter',
      'Step 2: Open the plugin on your artboard',
      'Step 3: Search for your copy or look through the different categories of the copies',
      'Step 4: Select the type of error you are looking for. You will get three different copies for each error',
      'Step 5: Tap on the cards to insert text in your frames',
      'And you are all geared up to make your UX copies more fun and exciting 😎',
    ],
  },
  { type: 'heading', level: 3, text: HEADING },
  { type: 'paragraph', text: LONG },
]

/** Every mock post shares the same article body. */
export function toDetail(post: Post): PostDetail {
  return {
    ...post,
    cover: post.id === TRENDING_POST.id ? images.officeLounge : post.image,
    content: ARTICLE,
  }
}
