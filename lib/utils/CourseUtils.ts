import { supabase } from "@/lib/supabase";

export async function fetchCourses(majorId?: string) {
    if (majorId) {
        // 1. Get courses for a major + count their resources
        const { data, error } = await supabase
            .from('major_course')
            .select(`
                courses:courses (
                    *,
                    resources(count)
                ) 
            `)
            .eq('major_id', majorId);

        if (error) {
            console.error("Supabase Error:", error);
            return [];
        }

        return data?.map(item => {
            const course = Array.isArray(item.courses) ? item.courses[0] : item.courses;
            return {
                ...course,
                resourceCount: course.resources?.[0]?.count || 0
            };
        }) || [];
    }

    // 2. Get all courses + count their resources
    const { data, error } = await supabase
        .from('courses')
        .select(`
            *,
            resources(count)
        `);

    if (error) {
        console.error("Supabase Error:", error);
        return [];
    }

    return data.map(course => ({
        ...course,
        resourceCount: course.resources?.[0]?.count || 0
    })) || [];
}

export async function fetchFaculties() {
    const { data, error } = await supabase
        .from('faculties')
        .select(`
            id,
            name,
            majors (id, name)
        `)

    if (error) {
        console.error("Supabase Error:", error);
        return [];
    }
    return data || [];
}

export async function fetchMajorById(majorId: string) {
    const { data, error } = await supabase
        .from('majors')
        .select('*, faculties(name)')
        .eq('id', majorId)
        .single();

    if (error) return null;
    return data;
}

export async function fetchCourseById(courseId: string) {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

    if (error) return null;
    return data;
}

export async function fetchResourcesByCourse(courseId: string) {
    const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('course_id', courseId);

    if (error) return [];

    return data.map(res => ({
        id: res.id,
        name: res.title,
        stars: res.stars,
        uploadDate: new Date(res.upload_date),
        uploader: res.uploader,
        category: res.category,
        fileUrl: res.file_url,
    }));
}