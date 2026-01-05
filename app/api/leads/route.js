import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

const DB_NAME = "production";
const COLLECTION_NAME = "admission_forms";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const body = await request.json();
    
    const enquiry = {
      ...body,
      createdAt: new Date(),
      status: "new",
    };

    await db.collection(COLLECTION_NAME).insertOne(enquiry);

    return NextResponse.json({ success: true, message: "Enquiry saved successfully" }, { status: 201 });
  } catch (e) {
    console.error("Failed to save enquiry", e);
    return NextResponse.json({ success: false, error: "Failed to save enquiry" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const leads = await db
      .collection(COLLECTION_NAME)
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (e) {
    console.error("Failed to fetch enquiries", e);
    return NextResponse.json({ success: false, error: "Failed to fetch enquiries" }, { status: 500 });
  }
}
