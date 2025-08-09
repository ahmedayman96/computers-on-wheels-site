import Link from "next/link";
import CTA from "@/components/CTA";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";

export default function Home(){
  return (
    <div>
      <section className="container py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="title">Fast, friendly IT support in Victoria</h1>
            <p className="lead mt-3">
              Computers on Wheels helps small businesses and homeowners with networks, Microsoft 365, cybersecurity, backups, and PC/Mac repair.
            </p>
            <div className="mt-6 flex gap-3">
              <Link className="btn" href="/contact">Book a Technician</Link>
              <Link className="btn-outline" href="/business-it">See Services</Link>
            </div>
            <div className="mt-4">
              <span className="badge">Mon–Fri 9am–5pm</span> <span className="badge">Serving Greater Victoria</span>
            </div>
          </div>
          <div className="card p-6">
            <ul className="space-y-3 text-gray-700">
              <li>• Same-day remote support or on-site visit</li>
              <li>• Clear advice and upfront pricing</li>
              <li>• Managed IT for growing teams</li>
              <li>• Secure, Canada-hosted backup options</li>
            </ul>
          </div>
        </div>
      </section>

      <Section title="Popular services">
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Managed IT & Helpdesk" desc="Monitoring, updates, and unlimited remote support." href="/business-it#managed" />
          <ServiceCard title="Wi-Fi & Networks" desc="Office cabling, UniFi setup, site-to-site VPNs." href="/business-it#network" />
          <ServiceCard title="Cybersecurity" desc="MFA, endpoint protection, phishing training." href="/business-it#security" />
          <ServiceCard title="PC/Mac Repair" desc="Tune-ups, upgrades, malware cleanup." href="/residential#repair" />
          <ServiceCard title="Home Wi-Fi & Mesh" desc="Strong, stable coverage in every room." href="/residential#wifi" />
          <ServiceCard title="Backup & Recovery" desc="Local + cloud backup with recovery testing." href="/business-it#backup" />
        </div>
      </Section>

      <Section title="What clients say">
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial quote="Showed up the same day and fixed our Wi-Fi issues in under an hour." name="Local Café Owner" />
          <Testimonial quote="Migrated our email to Microsoft 365 with zero downtime—super smooth." name="Law Firm Partner" />
          <Testimonial quote="Explained everything in plain English and left us with a simple checklist." name="Homeowner in Oak Bay" />
        </div>
      </Section>

      <CTA />
    </div>
  );
}
