import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container py-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <img src="/logo.svg" alt="Computers on Wheels" className="h-10 w-auto mb-3" />
          <p>Fast, friendly IT support for businesses and homes in Greater Victoria.</p>
          <p className="mt-3">Hours: Mon–Fri 9am–5pm</p>
        </div>
        <div>
          <div className="font-semibold text-brand mb-2">Services</div>
          <ul className="space-y-1">
            <li><Link href="/business-it" className="hover:underline">Business IT</Link></li>
            <li><Link href="/residential" className="hover:underline">Residential</Link></li>
            <li><Link href="/remote-support" className="hover:underline">Remote Support</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-brand mb-2">Contact</div>
          <p>Victoria, BC</p>
          <p>Phone: <a href="tel:0000000000" className="hover:underline">(000) 000-0000</a></p>
          <p>Email: <a href="mailto:info@computersonwheels.com" className="hover:underline">info@computersonwheels.com</a></p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} Computers on Wheels</div>
    </footer>
  );
}
