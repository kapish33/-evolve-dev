import { buttonVariants } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';
import { Url } from 'next/dist/shared/lib/router/router';

type css = VariantProps<typeof buttonVariants>;

export interface navigation {
  variant: css['variant'];
  name: string;
  href: Url;
  size: {
    pc: css['size'];
    mobile: css['size'];
  };
}

export const NavLink = ({
  variant,
  size,
  name,
  href,
}: navigation): navigation => {
  return {
    variant: variant,
    size: size,
    name: name,
    href: href,
  };
};

export const Navigation: Array<navigation> = [
  NavLink({
    variant: 'link',
    size: { mobile: 'sm', pc: 'default' },
    name: '✈️  To Happiness',
    href: 'flight-to-happiness',
  }),
  // NavLink({
  //   variant: "link",
  //   size: { mobile: "sm", pc: "default" },
  //   name: "2nd Innings Wellness Programs",
  //   href: "2nd-innings-wellness-programs",
  // }),
  NavLink({
    variant: 'link',
    size: { mobile: 'sm', pc: 'default' },
    name: 'Fall Prevention',
    href: 'fall-prevention-programs',
  }),
  NavLink({
    variant: 'link',
    size: { mobile: 'sm', pc: 'default' },
    name: 'Happy ❤️ Center',
    href: 'happy-heart-center',
  }),
  // NavLink({
  //   variant: "secondary",
  //   size: { mobile: "sm", pc: "default" },
  //   name: "Mera Sathi Helpline",
  //   href: "mera-sathi-helpline",
  // }),
];

export const allProgramNames: string[] = [
  ...Navigation.map((nav) => nav.name),
  'Mera Sathi Helpline',
  '2nd Innings Wellness Programs',
];
