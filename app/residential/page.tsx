import Section from "@/components/Section";
export const metadata = { title: "Residential Services | Computers on Wheels" };
export default function Residential(){
  return (
    <div>
      <section className="container py-10">
        <h1 className="title">Residential Services</h1>
        <p className="lead mt-2">Friendly help for your home computers and Wi-Fi.</p>
      </section>

      <Section title="PC/Mac Repair & Tune-ups" >
        <ul className="list-disc pl-6 text-gray-700 space-y-1" id="repair">
          <li>Slow computer fixes and upgrades (SSD/RAM)</li>
          <li>Malware cleanup and protection</li>
          <li>Printer and peripheral setup</li>
        </ul>
      </Section>

      <Section title="Home Wi-Fi & Mesh" >
        <ul className="list-disc pl-6 text-gray-700 space-y-1" id="wifi">
          <li>Whole-home coverage with mesh systems</li>
          <li>Smart home device setup</li>
          <li>Parental controls</li>
        </ul>
      </Section>

      <Section title="Data Transfer & Backup" >
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Moving to a new computer</li>
          <li>Family photo backup plans</li>
        </ul>
      </Section>
    </div>
  );
}
