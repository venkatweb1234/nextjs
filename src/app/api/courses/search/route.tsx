import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query: any = searchParams.get("query");
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query?.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}
