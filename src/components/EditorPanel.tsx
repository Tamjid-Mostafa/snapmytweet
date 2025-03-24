import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { DateTimePicker24h } from "./DateTimePicker24h";
import { Slider } from "./ui/slider";
import { ScrollArea } from "./ui/scroll-area";

export default function EditorPanel({ tweetData, setTweetData }: any) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <ScrollArea className="md:h-full h-[40vh] py-4">
        <CardContent className="p-6 space-y-4">
          <div>
            <Label className="block text-sm font-medium mb-1">Name</Label>
            <Input
              type="text"
              value={tweetData.name}
              onChange={(e) =>
                setTweetData({ ...tweetData, name: e.target.value })
              }
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">Username</Label>
            <Input
              type="text"
              value={tweetData.username}
              onChange={(e) =>
                setTweetData({ ...tweetData, username: e.target.value })
              }
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">Profile Image (url)</Label>
            <Input
              type="text"
              value={tweetData.profileImage}
              onChange={(e) =>
                setTweetData({ ...tweetData, profileImage: e.target.value })
              }
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">Tweet Text</Label>
            <Input
              type="text"
              value={tweetData.tweetText}
              onChange={(e) =>
                setTweetData({ ...tweetData, tweetText: e.target.value })
              }
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">Hashtags</Label>
            <Input
              type="text"
              value={tweetData.hashtags}
              onChange={(e) =>
                setTweetData({ ...tweetData, hashtags: e.target.value })
              }
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">Time</Label>
            <DateTimePicker24h
              value={tweetData.timestamp}
              onChange={(date: Date) =>
                setTweetData({ ...tweetData, timestamp: date })
              }
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">Background Color (optional)</Label>
            <Input
              type="color"
              value={tweetData.bgColor || "#ffffff"}
              onChange={(e) =>
                setTweetData({ ...tweetData, bgColor: e.target.value })
              }
              className="h-10 p-0 border-none"
            />
          </div>

          {/* <div>
            <Label className="block text-sm font-medium mb-1">
              Card Width ({tweetData.width}px)
            </Label>
            <Slider
              min={200}
              max={600}
              step={10}
              value={[tweetData.width]}
              onValueChange={([val]) => setTweetData({ ...tweetData, width: val })}
            />
          </div> */}
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
