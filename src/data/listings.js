import img from '../img'

// Projects on the listing pages. The home page tiles count these, so add new projects here.

export const industry = [
  {
    image: img('/images/Daikin/full-cell-cropped.webp'),
    title: 'Heat Exchanger Automated Manufacturing Cell',
    description: 'Daikin: designed four custom material-handling systems and end-of-arm tooling for a robotic heat exchanger forming and bending cell.',
    to: '/industry/daikin',
    result: '+76% daily production · 1.98-year payback',
    tag: 'Daikin · Summer 2026',
    restricted: true,
    restrictedLabel: 'Limited Information',
    // Wide transparent render: show the whole cell on its off-white ground
    imageStyle: { objectFit: 'contain', background: '#f2f0ec' },
  },
  {
    image: img('/images/spring steel wheel.jpg'),
    title: 'Spring Steel Wheel',
    description: 'NASA Johnson Space Center: spring steel wheel prototype and universal hub for Microchariot lunar rover testing.',
    to: '/industry/spring-steel-wheel',
    result: 'Built and drop-tested for lunar rover trials',
    tag: 'NASA JSC · Summer 2024',
  },
  {
    image: img('/images/sweetsifter.jpg'),
    title: 'Automated Candy Sorter',
    description: 'SPARX Engineering: autonomous multi-stage self-sorting machine with ~90% accuracy, showcased at trade shows.',
    to: '/industry/candy-sorter',
    result: '~90% sort accuracy, run live at trade shows',
    tag: 'SPARX · 2023 – 2024',
  },
]

export const research = [
  {
    image: img('/images/heated bed crossbar bending failure.jpg'),
    title: 'Swarm Manufacturing, Hotswappable Heated Bed',
    description: 'UT SiDi Lab: custom resistive PCB heated bed with scissor-lift mechanism for Swarm 3D manufacturing.',
    to: '/industry/swarm-heated-bed',
    tag: 'UT SiDi Lab · 2024 – Present',
    imageStyle: { objectPosition: 'center 62%' },
    inProgress: true,
  },
  {
    image: img('/images/UR5E.jpg'),
    title: 'Swarm Manufacturing, Extruder',
    description: 'UT SiDi Lab: custom extruder design for the UR5E robotic arm converted into a 3D printer.',
    to: '/industry/swarm-extruder',
    result: 'Validated with a successful live print test',
    tag: 'UT SiDi Lab · Fall 2024',
  },
  {
    image: img('/images/roboball.jpg'),
    title: 'Roboball',
    description: 'TEES RAD Lab: engineering prototype developed during a summer research internship.',
    to: null,
    tag: 'TEES RAD Lab · Summer 2025',
    restricted: true,
  },
]

export const team = [
  {
    image: img('/images/baja sae hero image.jpeg'),
    // Portrait shot, keep the airborne car in frame
    imageStyle: { objectPosition: 'center 60%' },
    title: "SAE Longhorn Baja Racing",
    description: 'Suspension design lead and co-founder. Designed a single-seater off-road competition car from scratch for SAE Baja.',
    to: '/baja',
    result: 'Passed tech inspection · finished 65th of 83',
    inProgress: true,
  },
  {
    image: img('/images/guad pod.png'),
    title: 'Guadaloop Hyperloop Bogie',
    description: 'Bogie structure for a scaled hyperloop pod at European Hyperloop Week: subsystem integration and FEA under the power-failure braking case.',
    to: '/team/guadaloop',
  },
  {
    image: img('/images/brownout robot frc.jpg'),
    title: 'FRC Robots (Team 5414)',
    description: 'Technical Captain & Mechanical Designer for three FIRST Robotics Competition robots across the 2023–2024 seasons.',
    to: '/team/frc-robots',
  },
  {
    image: img('/images/roadcase.png'),
    title: 'Robotics Road Case',
    description: 'FRC Team 5414, compact road case enabling faster competition setup and double normal material capacity.',
    to: '/team/robotics-roadcase',
    result: 'Carries about twice the usual materials',
  },
]

export const personal = [
  {
    image: img('/images/skateboard horizontal.jpg'),
    title: 'Electric Skateboard',
    description: 'Custom-built electric skateboard reaching 12 mph and 15 miles per charge, built for ~$250 using ESP32 and custom CAD parts.',
    to: '/personal/electric-skateboard',
    result: '12 mph · 15 mi per charge · ~$250 build',
  },
  {
    image: img('/images/battlebot.jpg'),
    title: 'Beetleweight Battlebot',
    description: 'Sub-3 lb combat robot for Texas Roborumble at UT Austin, vertical spinner with TPU chassis, went 3-2-0.',
    to: '/personal/beetleweight',
    result: 'Went 3-2-0 at Texas Roborumble',
  },
]
