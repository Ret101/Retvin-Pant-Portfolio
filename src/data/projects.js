import img from '../img'

// Reading order for Previous / Next navigation at the bottom of project pages,
// and the rows of the work index on the home page (grouped by `group`).
export const projectSequence = [
  { to: '/industry/daikin',              title: 'Heat Exchanger Automated Manufacturing Cell', tag: 'Daikin · Internship',   group: 'Industry & Research', result: '+76% daily production · 1.98-year payback', blurb: 'Four material-handling systems and end-of-arm tooling for a robotic forming and bending cell.', image: img('/images/Daikin/full-cell-cropped.webp') },
  { to: '/baja',                         title: 'Longhorn Baja Racing',                        tag: 'SAE Baja',              group: 'Longhorn Baja Racing', blurb: 'Co-founded the team; set the vehicle architecture and suspension geometry for car 185.', image: img('/images/baja sae hero image.jpeg') },
  { to: '/baja/control-arms',            title: 'Control Arms',                                tag: 'SAE Baja',              group: 'Longhorn Baja Racing', result: 'Built and installed on car 185', blurb: '4130 chromoly arms sized against cornering, bump, combined and braking load cases.', image: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (6).jpeg') },
  { to: '/baja/rear-hubs',               title: 'Rear Hubs',                                   tag: 'SAE Baja',              group: 'Longhorn Baja Racing', blurb: 'Drive torque through a laminated spline, made without a broach or wire EDM.', image: img('/images/rear hub machined image.jpg') },
  { to: '/baja/cv-axles',                title: 'Modified CV Axles',                           tag: 'SAE Baja',              group: 'Longhorn Baja Racing', blurb: 'Extended stock axles with press-fit sleeves to restore the designed rear track.', image: img('/images/CV Axle Modification.jpeg') },
  { to: '/baja/master-sketch',           title: 'Vehicle Master Sketch',                       tag: 'SAE Baja',              group: 'Longhorn Baja Racing', blurb: 'The single source of truth for every suspension hardpoint on the car.', image: img('/images/car mastersketch v2.png') },
  { to: '/industry/spring-steel-wheel',  title: 'Spring Steel Wheel',                          tag: 'NASA JSC · Internship', group: 'Industry & Research', result: 'Built and drop-tested for lunar rover trials', blurb: 'Spring steel wheel prototype and universal hub for Microchariot lunar rover testing.', image: img('/images/spring steel wheel.jpg') },
  { to: '/industry/swarm-extruder',      title: 'Swarm Extruder End Effector',                 tag: 'UT SiDi Lab · Research', group: 'Industry & Research', blurb: 'A custom extruder that turns a UR5e robot arm into a 3D printer.', image: img('/images/UR5E.jpg') },
  { to: '/industry/swarm-heated-bed',    title: 'Hotswappable Heated Bed',                     tag: 'UT SiDi Lab · Research', group: 'Industry & Research', blurb: 'Resistive PCB heated bed on a scissor lift for swarm 3D manufacturing.', image: img('/images/heated bed crossbar bending failure.jpg') },
  { to: '/industry/candy-sorter',        title: 'Automated Candy Sorter',                      tag: 'SPARX · Internship',    group: 'Industry & Research', blurb: 'A multi-stage self-sorting machine at about 90% accuracy, shown at trade shows.', image: img('/images/sweetsifter.jpg') },
  { to: '/team/guadaloop',               title: 'Guadaloop Hyperloop Bogie',                   tag: 'Texas Guadaloop',       group: 'Team Projects', blurb: 'Bogie structure for a scaled hyperloop pod, checked by FEA under power-failure braking.', image: img('/images/guad pod.png') },
  { to: '/team/frc-robots',              title: 'FRC Robots (Team 5414)',                      tag: 'FRC',                   group: 'Team Projects', blurb: 'Technical captain and mechanical designer for three competition robots.', image: img('/images/brownout robot frc.jpg') },
  { to: '/team/frc-robots/rooty',        title: 'Rooty',                                       tag: 'FRC · 2023',            group: 'Team Projects', blurb: 'The 2023 season robot: six subsystems, able to score at every position.', image: img('/images/rooty frc robot.jpg') },
  { to: '/team/frc-robots/ringo',        title: 'Ringo',                                       tag: 'FRC · 2024',            group: 'Team Projects', blurb: 'First 2024 robot: a combined shooter-intake and a dedicated amp arm.', image: img('/images/ringo full assembly iso.png') },
  { to: '/team/frc-robots/brownout',     title: 'Brownout',                                    tag: 'FRC · 2024',            group: 'Team Projects', blurb: 'The 2024 upgrade from Ringo: climbing, an under-bumper intake, longer shots.', image: img('/images/brownout robot frc.jpg') },
  { to: '/team/robotics-roadcase',       title: 'Robotics Road Case',                          tag: 'FRC',                   group: 'Team Projects', blurb: 'A compact road case for faster competition setup and twice the usual capacity.', image: img('/images/roadcase.png') },
  { to: '/personal/electric-skateboard', title: 'Electric Skateboard',                         tag: 'Personal',              group: 'Personal', blurb: '12 mph and 15 miles a charge, built for about $250 around an ESP32.', image: img('/images/skateboard horizontal.jpg') },
  { to: '/personal/beetleweight',        title: 'Beetleweight Battlebot',                      tag: 'Personal',              group: 'Personal', blurb: 'A 3 lb vertical spinner with a TPU chassis; went 3-2-0 at Texas Roborumble.', image: img('/images/battlebot.jpg') },
]

// The three projects to read first, shown large on the home page
export const startHere = ['/industry/daikin', '/baja/control-arms', '/industry/spring-steel-wheel']

// Strongest design work, surfaced as "Other Projects" cards
export const featuredProjects = [
  '/baja/control-arms',
  '/baja/rear-hubs',
  '/baja/cv-axles',
  '/industry/daikin',
  '/industry/swarm-extruder',
  '/industry/spring-steel-wheel',
  '/industry/candy-sorter',
]
