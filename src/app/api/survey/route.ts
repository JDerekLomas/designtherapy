import { put, list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `survey-responses/response-${timestamp}.json`;

    // Save to Vercel Blob
    const blob = await put(filename, JSON.stringify(data, null, 2), {
      access: "public",
      contentType: "application/json",
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      message: "Survey saved successfully!"
    });
  } catch (error) {
    console.error("Error saving survey:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save survey" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // List all survey responses
    const { blobs } = await list({ prefix: "survey-responses/" });

    return NextResponse.json({
      success: true,
      responses: blobs.map(b => ({
        url: b.url,
        uploadedAt: b.uploadedAt,
        size: b.size,
      }))
    });
  } catch (error) {
    console.error("Error listing surveys:", error);
    return NextResponse.json(
      { success: false, error: "Failed to list surveys" },
      { status: 500 }
    );
  }
}
