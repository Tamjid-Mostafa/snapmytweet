import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { VerifiedIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TweetCard(props: any) {
  const {
    name,
    username,
    profileImage,
    timestamp,
    tweetText,
    hashtags,
    bgColor,
    width,
    fontSize,
    fontFamily,
    textAlign,
    borderRadius,
    borderWidth,
    borderColor,
  } = props;

  const formattedTimestamp =
    timestamp instanceof Date && !isNaN(timestamp.getTime())
      ? format(timestamp, "hh:mm a · M/dd/yy")
      : "";

  return (
    <Card
      style={{
        backgroundColor: bgColor,
        width: `${width}px`,
        borderRadius: `${borderRadius}px`,
        borderWidth,
        borderColor,
        fontFamily,
        fontSize: `${fontSize}px`,
        textAlign,
      }}
      className="text-foreground border"
    >
      <CardContent style={{ padding: `${props.cardPadding || 24}px` }}>
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback>{name?.[0] || "?"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium leading-none flex items-center gap-1">
              {name}
              <VerifiedIcon className="w-4 h-4 fill-[#1DA1F2] text-white" />
            </p>
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
