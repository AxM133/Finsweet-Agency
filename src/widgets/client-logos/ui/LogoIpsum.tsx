const GLYPHS = [
  // four tiles
  <path key="0" d="M3 3h8v8H3zM13 13h8v8h-8zM13 3h8v8h-8z" />,
  // letter D
  <path key="1" fillRule="evenodd" d="M4 3h7a9 9 0 0 1 0 18H4zm5 5v8h2a4 4 0 0 0 0-8z" />,
  // crossed ring
  <path key="2" fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-6 12.6 8.6-8.6a6 6 0 0 0-8.6 8.6zm2.4 2.4a6 6 0 0 0 8.6-8.6z" />,
  // stacked layers
  <path key="3" d="M12 3 2 8l10 5 10-5zM2 12l10 5 10-5v3l-10 5L2 15z" />,
  // cut square
  <path key="4" fillRule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />,
]

/** Placeholder client logo ("logoipsum") with one of five glyphs. */
export function LogoIpsum({ glyph }: { glyph: number }) {
  return (
    <span className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
        {GLYPHS[glyph % GLYPHS.length]}
      </svg>
      logoipsum
    </span>
  )
}
