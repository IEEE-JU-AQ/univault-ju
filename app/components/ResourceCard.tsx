'use client';

import { Download, Star, Eye } from "lucide-react";
import { useState, useRef } from "react";
import type { ResourceCardProps } from "@/app/types";
import { downloadResource } from "@/lib/utils/DownloadResource";

export default function ResourceCard({ name, stars, uploadDate, uploader, id }: ResourceCardProps) {
    const [viewerOpen, setViewerOpen] = useState(false);
    const [viewerUrl, setViewerUrl] = useState("");
    const downloadLinkRef = useRef<HTMLAnchorElement>(null);

    const onDownloadClick = async () => {
        const url = await downloadResource(id);
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            if (downloadLinkRef.current) {
                downloadLinkRef.current.href = blobUrl;
                downloadLinkRef.current.download = name || 'download';
                downloadLinkRef.current.click();
                window.URL.revokeObjectURL(blobUrl);
            }
        } catch (err) {
            console.error('Download failed:', err);
        }
    };
    const onViewClick = async () => {
        const url = await downloadResource(id);
        setViewerOpen(true);
        setViewerUrl(url);
    };
    return (
        <div className="border border-border rounded-xl p-4 card bg-[var(--card)] text-[var(--card-foreground)] shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-start mt-2 mb-3">
                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {name}
                    </h2>
                    <div className="flex gap-1 items-center ml-2">
                        <p className="text-sm opacity-80">{stars}</p>
                        <Star className="text-yellow-400 cursor-pointer" size={25} />
                    </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    Uploaded by: {uploader}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    Date Added: {uploadDate.toLocaleDateString()}
                </p>
            </div>
            <div className="flex justify-between gap-2">
                <button className="w-full mt-6 py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center" onClick={onViewClick}>
                    <Eye className="mb-1" size={20} />
                </button>
                <button className="w-full mt-6 py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center" onClick={onDownloadClick}>
                    <Download className="mb-1" size={20} />
                </button>
            </div>
            {viewerOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-[var(--card)] rounded-lg p-4 w-11/12 h-5/6 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">{name}</h3>
                            <button onClick={() => setViewerOpen(false)} className="text-2xl font-bold">×</button>
                        </div>
                        <iframe src={viewerUrl} style={{ width: '100%', height: '100%', flex: 1 }} />
                    </div>
                </div>
            )}
            <a ref={downloadLinkRef} style={{ display: 'none' }} />
        </div>
    );
}