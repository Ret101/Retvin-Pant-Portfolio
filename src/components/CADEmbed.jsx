export default function CADEmbed({ title }) {
  return (
    <div className="cad-embed">
      <div className="cad-embed-icon">⬡</div>
      <div className="cad-embed-title">{title} — CAD Viewer</div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', maxWidth: 480, textAlign: 'center' }}>
        Replace this placeholder with your Onshape or GrabCAD embed iframe.
      </p>
      <code className="cad-embed-hint">
        {`<iframe src="https://cad.onshape.com/..." width="100%" height="500px" allowfullscreen></iframe>`}
      </code>
    </div>
  )
}
