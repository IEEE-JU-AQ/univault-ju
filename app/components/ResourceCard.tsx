import { Download, Star, Eye } from "lucide-react";
import type { ResourceCardProps } from "@/app/types";

export default function ResourceCard({ name, stars, uploadDate, uploader }: ResourceCardProps) {
    return (
        <div className="border border-border rounded-xl bg-white p-4 bg-card text-card-foreground shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-start mt-2 mb-3">
                    {/* Resource Name */}
                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {name}
                    </h2>
                    <div className="flex gap-1 items-center">
                        <p className="text-sm text-gray-500">{stars}</p>
                        <Star className="text-yellow-400 cursor-pointer" size={25} />
                    </div>
                </div>

                {/* Uploader */}
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    Uploaded by: {uploader}
                </p>

                {/* Date Added */}
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    Date Added: {uploadDate.toLocaleDateString()}
                </p>
            </div>
            {/* Action Button - Uses your refined Secondary color */}
            <div className="flex justify-between gap-4">
                <button className="w-full mt-6 py-2.5 px-4 rounded-l font-semibold flex items-center justify-center">
                    <Eye className="mb-1" size={20} />
                </button>
                <button className="w-full mt-6 py-2.5 px-4 rounded-l font-semibold flex items-center justify-center">
                    <Download className="mb-1" size={20} />
                </button>
            </div>
        </div>
    );
}