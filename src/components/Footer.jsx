import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">RETVIN PANT</div>

        <div className="footer-contact">
          <a href="tel:7137955821">
            <FiPhone size={14} />
            713-795-5821
          </a>
          <a href="mailto:retvinpant@gmail.com">
            <FiMail size={14} />
            retvinpant@gmail.com
          </a>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="footer-links">
            <a href="https://github.com/Ret101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={16} />
            </a>
            <a href="http://www.linkedin.com/in/retvin-pant" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={16} />
            </a>
          </div>
          <a
            href="https://d2b0d7e8-68b9-42c1-892a-1d906e88c17d.filesusr.com/ugd/073043_dc2f027bf7094ee4a294b98f2c7a4526.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: '0.72rem', padding: '8px 14px' }}
          >
            <FiDownload size={13} />
            PDF Portfolio
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Retvin Pant — Mechanical Engineering</span>
        <span>University of Texas at Austin</span>
      </div>
    </footer>
  )
}
