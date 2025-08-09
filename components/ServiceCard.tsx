import Link from "next/link";
export default function ServiceCard({ title, desc, href }:{ title:string, desc:string, href:string }){
  return (
    <Link href={href} className="card p-6 hover:shadow-md transition block">
      <div className="font-semibold text-lg">{title}</div>
      <p className="text-gray-600 mt-1">{desc}</p>
      <div className="text-brand mt-3 text-sm">Learn more →</div>
    </Link>
  );
}
