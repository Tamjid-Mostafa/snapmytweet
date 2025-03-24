import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { DateTimePicker24h } from "./DateTimePicker24h";
import { Slider } from "./ui/slider";

export default function EditorPanel({ tweetData, setTweetData }: any) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-6 space-y-4">
        {[
          "name",
          "username",
          "profileImage",
          "tweetText",
          "hashtags",
        ].map((field) => (
          <div key={field}>
            <Label className="capitalize mb-1 block text-sm font-medium">
              {field}
            </Label>
            <Input
              type="text"
              value={tweetData[field]}
              onChange={(e) =>
                setTweetData({ ...tweetData, [field]: e.target.value })
              }
            />
          </div>
        ))}
        <div>
          <Label className="block text-sm font-medium mb-1">
            Background Color (optional)
          </Label>
          <DateTimePicker24h
            value={tweetData.timestamp}
            onChange={(date: Date) =>
              setTweetData({ ...tweetData, timestamp: date })
            }
          />
        </div>
        <div>
          <Label className="block text-sm font-medium mb-1">
            Background Color (optional)
          </Label>
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
    </Card>
  );
}
