"use client";

interface ImageLoaderProps {
	src: string;
	width: number;
	quality?: number;
}

export default function ImageLoader({
	src,
	width,
	quality,
}: ImageLoaderProps): string {
	return `http://127.0.0.1:8000/static/${src}?w=${width}&q=${quality || 90}`;
}
