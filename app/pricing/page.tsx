export const metadata = { title: "Pricing | Computers on Wheels" };
export default function Pricing(){
  return (
    <div className="container py-10">
      <h1 className="title">Pricing</h1>
      <p className="lead mt-2">Transparent rates. No surprises.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <div className="text-xl font-semibold text-brand">Residential</div>
          <ul className="mt-3 text-gray-700 space-y-1">
            <li>• On-site: $120/hr (1-hour minimum)</li>
            <li>• Remote: $90/hr (30-minute minimum)</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-xl font-semibold text-brand">Business</div>
          <ul className="mt-3 text-gray-700 space-y-1">
            <li>• On-site: $140/hr</li>
            <li>• Remote: $110/hr</li>
            <li>• Managed IT: from $49/device/mo</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">* Replace with your real rates; travel fees may apply outside core Victoria.</p>
    </div>
  );
}
