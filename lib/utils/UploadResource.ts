import supabase from "@/lib/supabase";

export async function uploadResource(formData: FormData) {
    const file = formData.get('file') as File;
    const courseId = formData.get('courseid');
    const category = formData.get('category');
    const title = formData.get('fileTitle');
    const uploader = formData.get('uploader');

    if (!file || !courseId) throw new Error("Missing file or course ID");

    // 1. Storage Upload
    const { data: storageData, error: storageError } = await supabase.storage
        .from('univault-resources')
        .upload(`${courseId}/${Date.now()}_${file.name}`, file);

    if (storageError) throw storageError;

    // 2. Database Insert
    const { error: dbError } = await supabase
        .from('resources')
        .insert({
            title: title,
            course_id: courseId,
            category: category,
            file_url: storageData.path,
            uploader: uploader,
        });

    if (dbError) {
        // Cleanup: If DB fails, delete the file we just uploaded to Storage
        await supabase.storage.from('univault-resources').remove([storageData.path]);
        throw dbError;
    }

    return { success: true };
}