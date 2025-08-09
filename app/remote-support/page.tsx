export const metadata = { title: "Remote Support | Computers on Wheels" };
export default function Remote(){
  return (
    <div className="container py-10">
      <h1 className="title">Remote Support</h1>
      <p className="lead mt-2">Call us first, then download our remote support tool. We'll provide a session code and connect securely.</p>
      <div className="card p-6 mt-6">
        <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>Download for macOS (placeholder)</a>
        <a className="btn-outline ml-3" href="#" onClick={(e)=>e.preventDefault()}>Download for Windows (placeholder)</a>
        <p className="text-sm text-gray-500 mt-3">We’ll replace these with your preferred remote tool links.</p>
      </div>
    </div>
  );
}
