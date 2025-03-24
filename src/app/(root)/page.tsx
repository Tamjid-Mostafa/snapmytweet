"use client";
import { useState, useEffect, useRef } from "react";
import TweetCard from "@/components/TweetCard";
import EditorPanel from "@/components/EditorPanel";
import DownloadButton from "@/components/DownloadButton";
import { ScrollArea } from "@/components/ui/scroll-area";

const LOCAL_KEY = "tweetImageData";

export default function HomePage() {
  const [tweetData, setTweetData] = useState({
    name: "Tamjid Mostafa",
    username: "t4mjid",
    profileImage: "https://media.licdn.com/dms/image/v2/D5603AQGzob2QVYaOsw",
    timestamp: new Date(),
    tweetText:
      "Good code gets you in the door.\nClear updates keep you in the room.",
    hashtags: "#FreelanceDev #SaaSBuilders #ClientRetention",
    bgColor: "",
    width: 350,
  });

  const cardRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.timestamp = new Date(parsed.timestamp); // <-- force conversion
      setTweetData(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(tweetData));
  }, [tweetData]);

  return (
    <main className="md:min-h-screen flex flex-col md:flex-row items-start justify-center p-4 md:p-6 gap-6 overflow-x-hidden">
      <div className="w-full flex flex-col-reverse md:flex-row gap-6 items-center md:items-start max-w-5xl mx-auto">
          <EditorPanel tweetData={tweetData} setTweetData={setTweetData} />
      <div className="flex flex-col items-center gap-4 w-full">
        <div ref={cardRef}>
          <TweetCard {...tweetData} />
        </div>
        <DownloadButton cardRef={cardRef} />
        </div>
      </div>
    </main>
  );
}
