import {
  ClipboardIcon,

  HomeIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

import { Atom, Pyramid, type LucideIcon } from 'lucide-react';
import { IconProps } from '@radix-ui/react-icons/dist/types';

export interface NavItem {
  title: string;
  href: string;
  icon?:
    | LucideIcon
    | React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
      >;
  color?: string;
  isChidren?: boolean;
  children?: NavItem[];
}

export const NavItems: NavItem[] = [
  {
    title: 'Home',
    icon: HomeIcon,
    href: '/',
    color: 'text-green-500',
  },
  {
    title: 'Hello world',
    icon: Pyramid,
    href: '/hello-world',
    color: 'text-green-500',
  },
  {
    title: 'Hello techs',
    icon: Atom,
    href: '/technologies',
    color: 'text-green-500',
    isChidren: true,
    children: [
      {
        title: 'React',
        href: '/technologies/react',
        color: 'text-green-500',
        icon: DotFilledIcon,
      },
      {
        title: 'Vite',
        href: '/technologies/vite',
        color: 'text-green-500',
        icon: DotFilledIcon,
      },
    ],
  },
];
