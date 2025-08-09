export default function Section({ title, intro, children }:{ title:string, intro?:string, children:any }){
  return (
    <section className="container my-12">
      <h2 className="subtitle">{title}</h2>
      {intro && <p className="lead mt-2">{intro}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
