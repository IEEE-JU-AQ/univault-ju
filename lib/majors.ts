import faculties from "@/app/data/faculties.json";

export function getCourses(majorId?: string) {
    if (majorId) {
        const major = faculties
            .flatMap(f => f.majors)
            .find(m => m.id === majorId);

        return major ? major.courses : [];
    }

    const allCourses = faculties.flatMap(f =>
        f.majors.flatMap(m => m.courses)
    );

    return Array.from(new Map(allCourses.map(c => [c.id, c])).values());
}

export function getMajorfromId(majorId: string) {
    for (const faculty of faculties) {
        for (const major of faculty.majors) {
            if (major.id == majorId) {
                return major;
            }
        }
    }
    return null;
}