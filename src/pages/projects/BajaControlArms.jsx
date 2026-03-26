import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'

export default function BajaControlArms() {
  return (
    <DetailPage
      backTo="/team/longhorn-baja"
      backLabel="Longhorn Baja"
      tag="SAE Baja · Vehicle Dynamics"
      title="Control Arms"
      software={['SolidWorks CAD', 'SolidWorks FEA']}
      roles={['Vehicle Dynamics Lead']}
      inProgress
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            Front and rear control arm design for the 25'–26' Longhorn Baja vehicle. Geometry is derived
            directly from the master sketch hardpoint locations.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section" style={{ borderTop: '1px solid var(--card-border)', paddingTop: 32 }}>
          <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
            This section is under active development. Design details, analysis, and CAD will be added
            as the design cycle progresses.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
