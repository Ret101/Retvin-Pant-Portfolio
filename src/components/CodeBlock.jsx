import { FiChevronRight } from 'react-icons/fi'

// A code listing that starts collapsed. Built on <details>, so it opens with a click,
// Enter or Space, and screen readers announce it as expandable without extra wiring.
export default function CodeBlock({ title, language, children, open = false }) {
  const code = String(children).replace(/\n$/, '')
  const lines = code.split('\n').length
  return (
    <details className="code-block" open={open}>
      <summary>
        <FiChevronRight className="code-block-chevron" aria-hidden="true" />
        <span className="code-block-title">{title}</span>
        <span className="code-block-meta">{language ? `${language} · ` : ''}{lines} lines</span>
      </summary>
      <pre><code>{code}</code></pre>
    </details>
  )
}
