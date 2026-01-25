export type Course = {
  id: string;
  name: string;
  description: string;
  code: string;
};

export type Major = {
  id: string;
  name: string;
  courses: Course[];
};

export type Faculty = {
  id: string;
  faculty_name: string;
  majors: Major[];
};

export type CourseGridProps = {
    courses: Course[];
    majorName?: string;
}

export type CompletedCourse = {
  id: string;
  name: string;
  grade: string;
  credits: number;
};