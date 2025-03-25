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
  timestamp: new Date(),
  tweetText:
    "Good code gets you in the door.\nClear updates keep you in the room.",
  hashtags: "#FreelanceDev #SaaSBuilders #ClientRetention",
  bgColor: "#ffffff",
  width: 350,
  cardPadding: 24,
  showCanvas: false,
  canvasBg: "#f9f9f9",
  canvasPaddingX: 32,
  canvasPaddingY: 32,
  shadowStrength: 8,
  shadowColor: "#000000",
  shadowOpacity: 0.5,
  borderRadius: 16,
  borderColor: "#e5e7eb",
  borderWidth: 1,
  fontSize: 16,
  fontFamily: "sans-serif",
  textAlign: "left",
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

  console.log(tweetData.shadowColor);
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
                  <TweetCard {...tweetData} />
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
