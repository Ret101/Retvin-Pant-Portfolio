import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <header className="page-head container">
        <h1><span className="plate plate-line">Page not found</span></h1>
        <div>
          <p>That link doesn't lead anywhere on this site. The project may have moved.</p>
          <p style={{ marginTop: 24 }}>
            <Link to="/" className="btn btn-primary"><FiArrowLeft aria-hidden="true" /> Back to the home page</Link>
          </p>
        </div>
      </header>
    </div>
  )
}
