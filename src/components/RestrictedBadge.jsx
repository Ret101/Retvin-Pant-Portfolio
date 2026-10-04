export default function RestrictedBadge({ label = 'Under NDA' }) {
  return (
    <span className="restricted-badge">
      <svg className="restricted-lock" viewBox="0 0 24 24" width="11" height="11" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="2.4" />
      </svg>
      {label}
    </span>
  )
}
