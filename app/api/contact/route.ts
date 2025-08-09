import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());
  console.log("Contact form submission:", data);
  // TODO: Integrate email via Resend/SendGrid or Slack webhook
  return NextResponse.redirect(new URL("/contact?sent=1", req.url));
}
