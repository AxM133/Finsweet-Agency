import { useEffect, useState } from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { LuCheck, LuLink } from 'react-icons/lu'

import { cn } from '@/shared/lib'

type SharePostProps = {
  title: string
  className?: string
}

export function SharePost({ title, className }: SharePostProps) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return
    const timer = setTimeout(() => setIsCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [isCopied])

  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(title)

  const networks = [
    { label: 'Share on Twitter', href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`, icon: FaTwitter },
    { label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}`, icon: FaFacebook },
    { label: 'Share on LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, icon: FaLinkedin },
  ]

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
    } catch {
      window.prompt('Copy this link', window.location.href)
    }
  }

  return (
    <div className={cn('flex items-center gap-5 text-ink', className)}>
      <span className="text-xs text-muted">Share</span>
      <ul className="flex items-center gap-4">
        {networks.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="block transition-colors hover:text-primary"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={copyLink}
        className="flex cursor-pointer items-center gap-2 text-xs transition-colors hover:text-primary"
      >
        {isCopied ? <LuCheck className="size-4 text-primary" aria-hidden="true" /> : <LuLink className="size-4" aria-hidden="true" />}
        <span aria-live="polite">{isCopied ? 'Link copied' : 'Copy link'}</span>
      </button>
    </div>
  )
}
