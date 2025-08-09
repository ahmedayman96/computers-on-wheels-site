import Section from "@/components/Section";

export const metadata = { title: "Business IT Services | Computers on Wheels" };

export default function BusinessIT(){
  return (
    <div>
      <section className="container py-10">
        <h1 className="title">Business IT Services</h1>
        <p className="lead mt-2">Everything your small business needs—without the enterprise headache.</p>
      </section>

      <Section title="Managed IT & Helpdesk" intro="Proactive monitoring, updates, and fast support for your team.">
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Unlimited remote support during business hours</li>
          <li>Patch management and security updates</li>
          <li>Device inventory and warranty tracking</li>
          <li>Monthly health reports</li>
        </ul>
      </Section>

      <Section title="Network & Wi-Fi" intro="Rock-solid networks for offices, shops, and warehouses." >
        <ul className="list-disc pl-6 text-gray-700 space-y-1" id="network">
          <li>UniFi design and deployment</li>
          <li>Gigabit switching, VLANs, and QoS</li>
          <li>VPN: site-to-site and remote users</li>
          <li>Structured cabling</li>
        </ul>
      </Section>

      <Section title="Microsoft 365 & Email" intro="Setup, migrations, licensing, and training.">
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Exchange Online, SharePoint, OneDrive</li>
          <li>Device join and conditional access</li>
          <li>Backup and retention policies</li>
        </ul>
      </Section>

      <Section title="Cybersecurity" intro="Practical security that fits your business." >
        <ul className="list-disc pl-6 text-gray-700 space-y-1" id="security">
          <li>MFA everywhere; password managers</li>
          <li>Endpoint protection (AV/EDR)</li>
          <li>Phishing awareness training</li>
          <li>Policy templates and incident response basics</li>
        </ul>
      </Section>

      <Section title="Backup & Recovery" intro="Local + cloud, encrypted, with recovery tests." >
        <ul className="list-disc pl-6 text-gray-700 space-y-1" id="backup">
          <li>Workstation and server backups</li>
          <li>Versioned cloud storage (Canada-hosted available)</li>
          <li>Regular restore testing</li>
        </ul>
      </Section>

      <Section title="Hardware Procurement & Setup" intro="We source reliable gear and set it up right.">
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Desktops, laptops, NAS, switches, firewalls</li>
          <li>Imaging and onboarding for new hires</li>
        </ul>
      </Section>
    </div>
  );
}
