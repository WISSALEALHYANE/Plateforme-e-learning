import { NextRequest, NextResponse } from 'next/server';
import { courses } from '@/data/courses';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category') || 'Tous';

  let filteredCourses = courses;

  if (category !== 'Tous') {
    filteredCourses = filteredCourses.filter(course => course.category === category);
  }

  if (query) {
    filteredCourses = filteredCourses.filter(course =>
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  return NextResponse.json(filteredCourses);
}