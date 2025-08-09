"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const nav = [
  { href: "/", label: "Home" },
  { href: "/business-it", label: "Business IT" },
  { href: "/residential", label: "Residential" },
  { href: "/pricing", label: "Pricing" },
  { href: "/service-area", label: "Service Area" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Computers on Wheels" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className={`hover:text-brand ${pathname===n.href?"text-brand font-semibold":"text-gray-700"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn text-sm">Book a Technician</Link>
      </div>
    </header>
  );
}
