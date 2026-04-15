"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BEHOLD_FEED_URL = "https://feeds.behold.so/LOtyOXLVYX4KYSHEhn0K";

interface BeholdPost {
  id: string;
  permalink: string;
  mediaType: string;
  thumbnailUrl: string;
  prunedCaption: string;
  sizes: {
    large: { mediaUrl: string; width: number; height: number };
  };
}

interface BeholdFeed {
  posts: BeholdPost[];
}

function CardSkeleton() {
  return (
    <div className="aspect-square relative overflow-hidden border border-outline-variant/20 bg-surface-container animate-pulse" />
  );
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BEHOLD_FEED_URL)
      .then((r) => r.json())
      .then((data: BeholdFeed) => {
        const videos = data.posts
          .filter((p) => p.mediaType === "VIDEO")
          .slice(0, 3);
        setPosts(videos);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square relative group overflow-hidden border border-outline-variant/20 block"
        >
          <Image
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt={post.prunedCaption || "Bigdatia en Instagram"}
            src={post.sizes.large.mediaUrl}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </a>
      ))}
    </>
  );
}
