export interface IContact {
  value: string;
  href: string;
  label: string;
}

export const contacts: IContact[] = [
  {
    value: 'info@movemnt.digital',
    href: 'mailto:info@movemnt.digital',
    label: 'Email',
  },
  {
    value: 'Movemnt.digital',
    href: 'https://www.instagram.com/movemnt.digital/',
    label: 'Instagram',
  },
];
