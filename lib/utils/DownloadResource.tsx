import supabase from "../supabase";

export async function downloadResource(resourceId: string) {
    const { data, error } = await supabase
        .from('resources')
        .select('file_url, title')
        .eq('id', resourceId)
        .single();

    if (error || !data) throw new Error("Resource not found");

    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
        .from('univault-resources')
        .createSignedUrl(data.file_url, 60 * 60);

    if (signedUrlError) throw signedUrlError;

    return signedUrlData.signedUrl;
}