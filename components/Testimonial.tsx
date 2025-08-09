export default function Testimonial({ quote, name }:{ quote:string, name:string }){
  return (
    <div className="card p-6">
      <p className="text-gray-700 italic">“{quote}”</p>
      <div className="mt-3 text-sm text-gray-600">— {name}</div>
    </div>
  );
}
