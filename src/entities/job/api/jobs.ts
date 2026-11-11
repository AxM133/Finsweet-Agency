import { queryOptions } from '@tanstack/react-query'

import { HttpError, mockRequest } from '@/shared/api'

import { jobDetailSchema, jobListSchema } from '../model/schema'
import type { Job, JobDetail } from '../model/schema'

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

function job(
  id: number,
  title: string,
  department: Job['department'],
  location: string,
  salary: string,
  note: string,
): Job {
  return { id: `job-${id}`, slug: slugify(title), title, department, location, type: 'Full Time', salary, note }
}

const JOBS: Job[] = [
  job(1, 'Full Stack Developer', 'Engineering', 'Bengaluru', '$10K - $18K', 'No equity'),
  job(2, 'Testing Engineer', 'Quality', 'Remote', '$08K - $10K', 'No equity'),
  job(3, 'HR Manager', 'People', 'Mumbai', '$08K - $10K', '4 to 5 Yrs Exp'),
  job(4, 'Product Designer', 'Design', 'Mumbai', '$08K - $10K', '4 to 5 Yrs Exp'),
  job(5, 'WordPress Developer', 'Engineering', 'Mumbai', '$08K - $10K', '4 to 5 Yrs Exp'),
  job(6, 'Jr. QA Tester', 'Quality', 'California, USA', '$14K - $23K', 'No equity'),
  job(7, 'Sr. UX Designer', 'Design', 'California, USA', '$14K - $23K', 'No equity'),
  job(8, 'Social Media Manager', 'Marketing', 'Kolkata, India', '$5K - $6K', 'Fresher'),
  job(9, 'Golang Developer', 'Engineering', 'Mumbai', '$08K - $10K', '4 to 5 Yrs Exp'),
]

const DETAILS = [
  'Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).',
  'Design & Create highly engaging industry-related content in both photo, gif & video format',
  'Publish Posts on various social media channels',
  'Promote content on social networks and monitor engagement (e.g. comments and shares)',
  'Research industry-related topics',
  'Editing audio and sound design on projects',
  'Engage in opportunities to develop original content and concepts for web and mobile',
  'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',
  'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels',
]

const REQUIREMENTS = [
  'Proven experience in a similar role and a portfolio of shipped work',
  'Strong written and verbal communication skills in English',
  'Ability to work independently and collaborate with a distributed team',
  'Comfortable giving and receiving constructive feedback',
  'Attention to detail and a habit of testing your own work',
]

const RESPONSIBILITIES = [
  'Own your work from the first idea to the final release',
  'Work closely with designers, engineers and product managers',
  'Take part in planning, estimations and code or design reviews',
  'Share knowledge with the team through demos and documentation',
  'Keep improving our processes, tools and quality standards',
]

const EXPERIENCE_LABEL: Record<string, string> = {
  'No equity': 'Flexible experience level',
  'Fresher': 'Freshers are welcome',
  '4 to 5 Yrs Exp': '4 to 5 Years Of Experience',
}

function toDetail(item: Job): JobDetail {
  const place = item.location === 'Remote' ? 'Remote, India' : item.location

  return {
    ...item,
    summary: `${place} , ${EXPERIENCE_LABEL[item.note] ?? item.note}`,
    positions: 5,
    intro: 'Through True Rich Attended does no end it his mother since real had half every him case in packages.',
    details: DETAILS,
    requirements: REQUIREMENTS,
    responsibilities: RESPONSIBILITIES,
  }
}

export const jobQueries = {
  all: () =>
    queryOptions({
      queryKey: ['jobs'],
      queryFn: () => mockRequest(jobListSchema, JOBS),
    }),
  bySlug: (slug: string) =>
    queryOptions({
      queryKey: ['jobs', slug],
      queryFn: () => {
        const found = JOBS.find((item) => item.slug === slug)
        if (!found) throw new HttpError(404, 'Job not found')
        return mockRequest(jobDetailSchema, toDetail(found))
      },
    }),
}
