"use client";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import TweetCard from "@/components/TweetCard";
import DownloadButton from "@/components/DownloadButton";
import { EditorPanel } from "@/components/EditorPanel";

const LOCAL_KEY = "tweetImageData";

const defaultTweetData = {
  name: "Tamjid Mostafa",
  username: "t4mjid",

  profileImage: "",
  profileImageSize: 40,

  timestamp: new Date(),

  tweetText: `Good code gets you in the door.  
Clear updates keep you in the room.

- Show up, even when it's hard.  
- Build before you beg.  
- Done > Perfect.  
- Consistency is compound interest.  
- Your website is your handshake.  
- Clients don’t hire skills — they hire clarity.`,

  hashtags: "#FreelanceDev #SaaSBuilders #ClientRetention",

  // card layout + appearance
  bgColor: "#000000",
  width: 350,
  cardPadding: 24,
  textAlign: "left",
  borderRadius: 16,
  borderColor: "#e5e7eb",
  borderWidth: 0,

  // shadow + canvas
  showCanvas: true,
  canvasBg: "#05ff65",
  canvasPaddingX: 36,
  canvasPaddingY: 56,
  shadowStrength: 17,
  shadowColor: "#000000",
  shadowOpacity: 0.48,

  // colors
  textColor: "#ffffff",
  usernameColor: "#6b7280",
  hashtagColor: "#1c60e9",
  timestampColor: "#9ca3af",

  // font styles
  tweetFontSize: 16,
  tweetFontFamily: "sans-serif",

  usernameFontSize: 14,
  usernameFontFamily: "sans-serif",

  hashtagFontSize: 14,
  hashtagFontFamily: "sans-serif",

  timestampFontSize: 12,
  timestampFontFamily: "sans-serif",
};

const MemoizedTweetCard = memo(TweetCard);

export default function HomePage() {
  const [tweetData, setTweetData] = useState(defaultTweetData);
  const cardRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.timestamp = new Date(parsed.timestamp);
      setTweetData({ ...defaultTweetData, ...parsed });
    }
  }, []);

  const saveToStorage = useDebouncedCallback((data) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }, 500);

  useEffect(() => {
    saveToStorage(tweetData);
  }, [tweetData, saveToStorage]);

  const shadowColor = useMemo(() => {
    const r = parseInt(tweetData.shadowColor.slice(1, 3), 16);
    const g = parseInt(tweetData.shadowColor.slice(3, 5), 16);
    const b = parseInt(tweetData.shadowColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${tweetData.shadowOpacity})`;
  }, [tweetData.shadowColor, tweetData.shadowOpacity]);

  return (
    <main className="md:min-h-[calc(100vh-200px)] flex flex-col md:flex-row items-start justify-center p-4 md:p-6 gap-6 overflow-x-hidden">
      <div className="w-full flex flex-col-reverse md:flex-row gap-6 items-center md:items-start max-w-5xl mx-auto">
        <EditorPanel tweetData={tweetData} setTweetData={setTweetData} />
        <div className="flex flex-col items-center gap-4 w-full">
          <div ref={cardRef}>
            {tweetData.showCanvas ? (
              <div
                className="relative w-full flex items-center justify-center"
                style={{
                  backgroundColor: tweetData.canvasBg,
                  padding: `${tweetData.canvasPaddingY}px ${tweetData.canvasPaddingX}px`,
                }}
              >
                <div
                  style={{
                    filter: `drop-shadow(0 4px ${tweetData.shadowStrength}px ${shadowColor})`,
                    transition: "filter 0.3s ease",
                  }}
                >
                  <MemoizedTweetCard {...tweetData} />
                </div>
              </div>
            ) : (
              <div
                style={{
                  filter: `drop-shadow(0 4px ${tweetData.shadowStrength}px ${shadowColor})`,
                  transition: "filter 0.3s ease",
                }}
              >
                <MemoizedTweetCard {...tweetData} />
              </div>
            )}
          </div>
          <DownloadButton cardRef={cardRef} />
        </div>
      </div>
    </main>
  );
}
