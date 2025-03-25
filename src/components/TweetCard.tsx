import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { VerifiedIcon } from "lucide-react";

export default function TweetCard({
  name,
  username,
  profileImage,
  timestamp,
  tweetText,
  hashtags,
  bgColor,
  width,
}: any) {
    const formattedTimestamp =
  timestamp instanceof Date && !isNaN(timestamp.getTime())
    ? format(timestamp, 'hh:mm a · M/dd/yy')
    : '';

  return (
    <Card
      style={{ backgroundColor: bgColor || undefined, width: `${width}px` }}
      className="text-foreground"
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {profileImage ? (
            <img
              src={profileImage}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-muted" />
          )}
          <div>
            <p className="font-medium leading-none">{name} <VerifiedIcon className="inline-block w-4 h-4 fill-[#1DA1F2] text-white"/></p>
            <p className="text-sm text-muted-foreground">@{username}</p>
          </div>
        </div>
        <p className="whitespace-pre-line text-base mb-4">{tweetText}</p>
        <p className="text-sm text-muted-foreground">{hashtags}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {formattedTimestamp} · {name}
        </p>
      </CardContent>
    </Card>
  );
}
