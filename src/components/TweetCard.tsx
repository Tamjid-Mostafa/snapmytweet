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
    borderRadius,
    borderWidth,
    borderColor,
    textAlign,

    cardPadding,

    textColor,
    usernameColor,
    hashtagColor,
    timestampColor,

    tweetFontSize,
    tweetFontFamily,
    usernameFontSize,
    usernameFontFamily,
    hashtagFontSize,
    hashtagFontFamily,
    timestampFontSize,
    timestampFontFamily,
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
        textAlign,
      }}
      className="text-foreground border"
    >
      <CardContent style={{ padding: `${cardPadding || 24}px` }}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback>{name?.[0] || "?"}</AvatarFallback>
          </Avatar>
          <div>
            <p
              className="font-medium leading-none flex items-center gap-1"
              style={{
                color: textColor,
                fontSize: `${usernameFontSize}px`,
                fontFamily: usernameFontFamily,
              }}
            >
              {name}
              <VerifiedIcon className="w-4 h-4 fill-[#1DA1F2] text-white" />
            </p>
            <p
              className="text-sm"
              style={{
                color: usernameColor,
                fontSize: `${usernameFontSize}px`,
                fontFamily: usernameFontFamily,
              }}
            >
              @{username}
            </p>
          </div>
        </div>

        {/* Tweet Content */}
        <p
          className="whitespace-pre-line mb-4"
          style={{
            color: textColor,
            fontSize: `${tweetFontSize}px`,
            fontFamily: tweetFontFamily,
          }}
        >
          {tweetText}
        </p>

        {/* Hashtags */}
        <p
          className="text-sm"
          style={{
            color: hashtagColor,
            fontSize: `${hashtagFontSize}px`,
            fontFamily: hashtagFontFamily,
          }}
        >
          {hashtags}
        </p>

        {/* Timestamp */}
        <p
          className="mt-4 text-xs"
          style={{
            color: timestampColor,
            fontSize: `${timestampFontSize}px`,
            fontFamily: timestampFontFamily,
          }}
        >
          {formattedTimestamp} · {name}
        </p>
      </CardContent>
    </Card>
  );
}
