import Image from "next/image";

export function Header() {
  return (
    <header className="site-header">
      <Image
        src="/digital-rushal-logo.png"
        alt="Digital Rushal — AI Solutions. Smarter Marketing. Stronger Growth."
        width={568}
        height={100}
        priority
        className="brand-logo"
      />
    </header>
  );
}
