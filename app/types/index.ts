export type course = {
  id: string;
  name: string;
  code: string;
};

export type Major = {
  id: string;
  name: string;
  courses: course[];
};

export type Faculty = {
  id: string;
  faculty_name: string;
  majors: Major[];
};