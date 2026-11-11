export const SITE = {
  name: 'Finsweet',
  phone: '020 7993 2905',
  email: 'hi@finsweet.com',
  address: 'DLF Cybercity, Bhubaneswar, India, 52050',
  /** Approximate position of the office, used by the contact map. */
  coordinates: { lat: 20.3496, lng: 85.819 },
  workingHours: {
    days: 'Monday To Friday',
    time: '9:00 AM to 8:00 PM',
    note: 'Our Support Team is available 24Hrs',
  },
  socials: [
    { network: 'facebook', href: 'https://facebook.com' },
    { network: 'twitter', href: 'https://twitter.com' },
    { network: 'instagram', href: 'https://instagram.com' },
    { network: 'linkedin', href: 'https://linkedin.com' },
  ],
} as const

export type SocialNetwork = (typeof SITE.socials)[number]['network']
