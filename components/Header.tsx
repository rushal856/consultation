import Image from "next/image";

export function Header() {
  return (
    <header className="site-header">
      <Image
        src="/digital-rushal-logo-cropped.png"
        alt="Digital Rushal — AI Solutions. Smarter Marketing. Stronger Growth."
        width={1700}
        height={330}
        priority
        className="brand-logo"
      />
    </header>
  );
}
