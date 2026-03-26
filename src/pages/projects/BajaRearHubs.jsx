import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'

export default function BajaRearHubs() {
  return (
    <DetailPage
      backTo="/team/longhorn-baja"
      backLabel="Longhorn Baja"
      tag="SAE Baja · Laminated Manufacturing"
      title="Rear Hubs — Laminated Manufacturing"
      software={['SolidWorks CAD', 'SolidWorks FEA', 'CNC Mill']}
      roles={['Vehicle Dynamics Lead']}
      inProgress
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            Rear hub design for the 25'–26' Longhorn Baja vehicle, manufactured using laminated
            manufacturing techniques to achieve precise geometry while minimizing weight.
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
