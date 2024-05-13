import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { done: "Successfull", ok: { allUsers: "HELLO WORKD " } },
    { status: 200 }
  );
}
