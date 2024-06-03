import Specialite from "@/models/Specialite";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const specialites = await Specialite.find({}, null, { sort: { _id: -1 } });
    return NextResponse.json(specialites);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
