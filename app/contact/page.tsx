export const metadata = { title: "Contact | Computers on Wheels" };
export default function Contact(){
  return (
    <div className="container py-10">
      <h1 className="title">Contact / Book a Technician</h1>
      <p className="lead mt-2">Tell us a bit about your issue and we’ll get back to you quickly.</p>

      <form className="card p-6 mt-6 grid md:grid-cols-2 gap-4" method="POST" action="/api/contact">
        <input className="border rounded-xl px-3 py-2" name="name" placeholder="Your name" required />
        <input className="border rounded-xl px-3 py-2" name="email" type="email" placeholder="Email" required />
        <input className="border rounded-xl px-3 py-2" name="phone" placeholder="Phone" />
        <select className="border rounded-xl px-3 py-2" name="type">
          <option value="business">Business</option>
          <option value="residential">Residential</option>
        </select>
        <textarea className="border rounded-xl px-3 py-2 md:col-span-2" name="message" placeholder="How can we help?" rows={5} required />
        <button className="btn md:col-span-2" type="submit">Send</button>
      </form>

      <p className="text-sm text-gray-500 mt-3">Submitting will log the request to the server console for now; we can wire email or Slack next.</p>
    </div>
  );
}
