import img from '../img'

// Reading order for Previous / Next navigation at the bottom of project pages.
export const projectSequence = [
  { to: '/industry/daikin',              title: 'Heat Exchanger Automated Manufacturing Cell', tag: 'Daikin · Internship',   image: img('/images/Daikin/Full Cell (2).webp') },
  { to: '/baja',                         title: 'Longhorn Baja Racing',                        tag: 'SAE Baja',              image: img('/images/baja sae hero image.jpeg') },
  { to: '/baja/control-arms',            title: 'Control Arms',                                tag: 'SAE Baja',              image: img('/images/Trailing Arm Images/WhatsApp Image 2026-10-03 at 5.46.39 PM (6).jpeg') },
  { to: '/baja/rear-hubs',               title: 'Rear Hubs',                                   tag: 'SAE Baja',              image: img('/images/rear hub machined image.jpg') },
  { to: '/baja/cv-axles',                title: 'Modified CV Axles',                           tag: 'SAE Baja',              image: img('/images/CV Axle Modification.jpeg') },
  { to: '/baja/master-sketch',           title: 'Vehicle Master Sketch',                       tag: 'SAE Baja',              image: img('/images/car mastersketch v2.png') },
  { to: '/industry/spring-steel-wheel',  title: 'Spring Steel Wheel',                          tag: 'NASA JSC · Internship', image: img('/images/spring steel wheel.jpg') },
  { to: '/industry/swarm-extruder',      title: 'Swarm Extruder End Effector',                 tag: 'UT SiDi Lab · Research', image: img('/images/UR5E.jpg') },
  { to: '/industry/swarm-heated-bed',    title: 'Hotswappable Heated Bed',                     tag: 'UT SiDi Lab · Research', image: img('/images/heated bed crossbar bending failure.jpg') },
  { to: '/industry/candy-sorter',        title: 'Automated Candy Sorter',                      tag: 'SPARX · Internship',    image: img('/images/sweetsifter.jpg') },
  { to: '/team/guadaloop',               title: 'Guadaloop Hyperloop Bogie',                   tag: 'Texas Guadaloop',       image: img('/images/guad pod.png') },
  { to: '/team/frc-robots',              title: 'FRC Robots (Team 5414)',                      tag: 'FRC',                   image: img('/images/brownout robot frc.jpg') },
  { to: '/team/frc-robots/rooty',        title: 'Rooty',                                       tag: 'FRC · 2023',            image: img('/images/rooty frc robot.jpg') },
  { to: '/team/frc-robots/ringo',        title: 'Ringo',                                       tag: 'FRC · 2024',            image: img('/images/ringo full assembly iso.png') },
  { to: '/team/frc-robots/brownout',     title: 'Brownout',                                    tag: 'FRC · 2024',            image: img('/images/brownout robot frc.jpg') },
  { to: '/team/robotics-roadcase',       title: 'Robotics Road Case',                          tag: 'FRC',                   image: img('/images/roadcase.png') },
  { to: '/personal/electric-skateboard', title: 'Electric Skateboard',                         tag: 'Personal',              image: img('/images/skateboard horizontal.jpg') },
  { to: '/personal/beetleweight',        title: 'Beetleweight Battlebot',                      tag: 'Personal',              image: img('/images/battlebot.jpg') },
]

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
