/** "2021-01-19" → "Jan 19, 2021" */
export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(isoDate))
}

/** "2021-01-27" → "27th January 2021" */
export function formatLongDate(isoDate: string) {
  const date = new Date(isoDate)
  const day = date.getUTCDate()
  const isTeen = day % 100 >= 11 && day % 100 <= 13
  const suffix = isTeen ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[day % 10] ?? 'th'
  const monthAndYear = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)

  return `${day}${suffix} ${monthAndYear}`
}
