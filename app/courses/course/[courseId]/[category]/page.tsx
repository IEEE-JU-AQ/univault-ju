import ResourceCard from "@/app/components/ResourceCard";
import { fetchResourcesByCourse } from "@/lib/utils/CourseUtils";

export default async function ResourceCategoryPage({ params }: { params: Promise<{ courseId: string; category: string }> }) {
const { category, courseId } = await params;
const resources = await fetchResourcesByCourse(courseId);

  return (
    <main className="p-6 pb-10">
      <h1 className="capitalize text-xl font-bold mb-3 mt-4">
        {category.replace('-', ' ')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources
          .filter((resource) => resource.category === category)
          .sort((a, b) => b.stars - a.stars)
          .map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
      </div>
    </main>
  );
}