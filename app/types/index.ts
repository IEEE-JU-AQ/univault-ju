export type Course = {
  id: string;
  name: string;
  description: string;
  resourceCount: number;
};

export type Major = {
  id: string;
  name: string;
  courses: Course[];
};

export type Faculty = {
  id: string;
  name: string;
  majors: { id: string; name: string }[];
};

export type CourseGridProps = {
    courses: Course[];
    majorName?: string;
    searchParams?: Promise<{ query?: string }>;
    searchDefaultValue?: string;
}

export type CompletedCourse = {
  id: string;
  name: string;
  grade: string;
  credits: number;
};

export type ResourceCardProps = {
  id: string;
  name: string;
  stars: number;
  uploadDate: Date;
  uploader: string;
};

export type Resource = ResourceCardProps & {
  category: "notes" | "exams" | "other";
};

export type MajorCoursesProps = {
    params: Promise<{ majorId: string }>;
    searchParams?: Promise<{ query?: string }>;
}

export type Theme = "light" | "dark";

export type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
}

export type UploadFormProps = {
    faculties: Faculty[];
    courses: Course[];
}