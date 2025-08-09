import Link from "next/link";
export default function CTA() {
  return (
    <div className="container my-12">
      <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xl md:text-2xl font-semibold text-brand">Need help today?</div>
          <div className="text-gray-600">Same-day remote support or on-site visit in Greater Victoria.</div>
        </div>
        <div className="flex gap-3">
          <a className="btn-outline" href="tel:0000000000">Call Now</a>
          <Link className="btn" href="/contact">Book a Technician</Link>
        </div>
      </div>
    </div>
  );
}
