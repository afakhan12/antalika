
import { NavItem, Sector } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Filters', href: '/filters' },
  { label: 'Oil & Gas', href: '/oil-gas-equipment' },
  { label: 'Supplements & Food', href: '/supplements' },
  { label: 'Outsourcing', href: '/outsourcing' },
  { label: 'Contact', href: '/contact-us' },
];

export const SECTORS: Sector[] = [
  { title: 'Oil & Gas', image: 'Machinary.avif', href: '/oil-gas-equipment' },
  { title: 'Food Industry', image: 'food.webp', href: '/supplements' },
];

export const BRANDS = [
  'ABB', 'SIEMENS', 'ATLAS COPCO', 'JOHN CRANE', 'CUMMINS', 'EATON', 'SCHNEIDER', 'HYUNDAI', 
  'GRUNDFOS', 'STANDART', '3M', 'JESSBERGER', 'TADIRAN', 'ALLEN BRADLEY', 'MAKITA', 'PARKER',
  'HITACHI', 'KAESER', 'KOHLER', 'JOHNSON', 'SCHLUMBERGER', 'BAKER HUGHES', 'HALLIBURTON',
  'GENERAL ELECTRIC', 'NOV', 'BASF', 'HONDA', 'BOSCH'
];
