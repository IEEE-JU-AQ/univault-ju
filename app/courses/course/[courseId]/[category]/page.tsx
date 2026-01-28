import ResourceCard from "@/app/components/ResourceCard";

export default async function ResourceCategoryPage({ params }: { params: Promise<{ courseId: string; category: string }> }) {
const { category } = await params;

  return (
    <div className="p-6">
      <h1 className="capitalize text-xl font-bold mb-3 mt-4">
        {category.replace('-', ' ')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {category === "lecture-notes" && <ResourceCard key="1" name="Resource 1" uploader="John Doe" stars={50} uploadDate={new Date("2024-01-01")} />}
        {category === "past-papers" && <ResourceCard key="2" name="Resource 2" uploader="Jane Smith" stars={45} uploadDate={new Date("2024-01-02")} />}
        {category === "other" && <ResourceCard key="3" name="Resource 3" uploader="Bob Johnson" stars={40} uploadDate={new Date("2024-01-03")} />}
        {category === "lecture-notes" && <ResourceCard key="4" name="Resource 4" uploader="Alice Williams" stars={35} uploadDate={new Date("2024-01-04")} />}
        {category === "past-papers" && <ResourceCard key="5" name="Resource 5" uploader="Charlie Brown" stars={30} uploadDate={new Date("2024-01-05")} />}
        {category === "other" && <ResourceCard key="6" name="Resource 6" uploader="Diana Miller" stars={25} uploadDate={new Date("2024-01-06")} />}
        {category === "lecture-notes" && <ResourceCard key="7" name="Resource 7" uploader="Eve Davis" stars={20} uploadDate={new Date("2024-01-07")} />}
        {category === "past-papers" && <ResourceCard key="8" name="Resource 8" uploader="Frank Wilson" stars={15} uploadDate={new Date("2024-01-08")} />}
        {category === "other" && <ResourceCard key="9" name="Resource 9" uploader="Grace Moore" stars={10} uploadDate={new Date("2024-01-09")} />}
      </div>
    </div>
  );
}