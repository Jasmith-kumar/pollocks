import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

const DB_NAME = "production";
const COLLECTION_NAME = "contact_forms";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const body = await request.json();
    
    const contactSubmission = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      createdAt: new Date(),
      status: "new",
      source: "contact_page",
    };

    await db.collection(COLLECTION_NAME).insertOne(contactSubmission);

    return NextResponse.json({ success: true, message: "Contact form submitted successfully" }, { status: 201 });
  } catch (e) {
    console.error("Failed to save contact form", e);
    return NextResponse.json({ success: false, error: "Failed to save contact form" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const contacts = await db
      .collection(COLLECTION_NAME)
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, contacts }, { status: 200 });
  } catch (e) {
    console.error("Failed to fetch contact forms", e);
    return NextResponse.json({ success: false, error: "Failed to fetch contact forms" }, { status: 500 });
  }
}

