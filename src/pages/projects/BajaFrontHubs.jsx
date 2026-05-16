import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StickyTOC from '../../components/StickyTOC'

const toc = [
  { id: 'engineering-challenge', label: 'Engineering Challenge' },
  { id: 'design-constraints',    label: 'Design Constraints'    },
]

export default function BajaFrontHubs() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
      backTo="/baja"
      backLabel="Longhorn Baja"
      tag="SAE Baja · Vehicle Dynamics"
      title="Front Hubs"
      software={['SolidWorks CAD', 'SolidWorks FEA']}
      roles={['Vehicle Dynamics Lead']}
      inProgress
    >
      <ScrollReveal>
        <div id="engineering-challenge" className="project-section">
          <h3>Engineering Challenge</h3>
          <p>
            The front hub is the most geometrically constrained component on the vehicle: it has to
            package the wheel bearing, brake rotor interface, steering knuckle attachment, and upper
            and lower ball joint mounts, all within the hardpoint positions locked by the master sketch.
            Compromising any one interface affects suspension geometry, brake performance, or bearing life.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="design-constraints" className="project-section">
          <h3>Design Constraints</h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 2, fontSize: '0.95rem' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Geometry:</strong> Ball joint positions fixed by master sketch hardpoints, no deviation allowed</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Bearing:</strong> Must accommodate the selected wheel bearing OD and width without overhang</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Brake:</strong> Rotor must clear the caliper at full steering lock in both directions</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Mass:</strong> Minimized since front unsprung mass directly affects transient handling response</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section" style={{ borderTop: '1px solid var(--card-border)', paddingTop: 32 }}>
          <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Manufacturing method, FEA load cases, and CAD are under active development and will be
            added as the design cycle progresses.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
    </>
  )
}
