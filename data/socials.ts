export type SocialType = "github" | "email" | "whatsapp";

export const socials: {
  type: SocialType;
  label: string;
  href: string;
  external: boolean;
}[] = [
  {
    type: "github",
    label: "GitHub",
    href: "https://github.com/USERNAME_KAMU",
    external: true,
  },
  {
    type: "email",
    label: "Email",
    href: "mailto:hello@vinzz.dev",
    external: false,
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/6280000000000",
    external: true,
  },
];