import faculties from "@/app/data/faculties.json";
import { Major } from "@/app/types";

export function getMajors() {
  const majors: Array<Major & { facultyId: string; facultyName: string }> = [];

  faculties.forEach((faculty) => {
    faculty.majors.forEach((major) => {
      majors.push({
        ...major,
        facultyId: faculty.id,
        facultyName: faculty.faculty_name,
      });
    });
  });

  return majors;
}