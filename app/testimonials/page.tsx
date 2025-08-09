import Testimonial from "@/components/Testimonial";
export const metadata = { title: "Testimonials | Computers on Wheels" };
export default function Testimonials(){
  return (
    <div className="container py-10">
      <h1 className="title">Testimonials</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <Testimonial quote="Fixed our network and explained everything clearly." name="Retail Manager" />
        <Testimonial quote="Reliable and on time. Great value." name="Restaurant Owner" />
        <Testimonial quote="They saved our files after a crash—lifesavers!" name="Home user" />
      </div>
    </div>
  );
}
