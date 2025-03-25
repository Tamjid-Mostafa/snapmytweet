import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function EditorCardStyle({ tweetData, setTweetData }: any) {
  return (
    <div className="space-y-4">
      <div>
        <Label>
          Card Width ({tweetData.width}px)
        </Label>
        <Slider
          min={200}
          max={600}
          step={10}
          value={[tweetData.width]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, width: val })
          }
        />
      </div>

      <div>
        <Label>
          Card Padding ({tweetData.cardPadding}px)
        </Label>
        <Slider
          min={0}
          max={64}
          step={4}
          value={[tweetData.cardPadding]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, cardPadding: val })
          }
        />
      </div>

      <div>
        <Label>
          Border Radius ({tweetData.borderRadius}px)
        </Label>
        <Slider
          min={0}
          max={40}
          step={2}
          value={[tweetData.borderRadius]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, borderRadius: val })
          }
        />
      </div>

      <div>
        <Label>
          Border Width ({tweetData.borderWidth}px)
        </Label>
        <Slider
          min={0}
          max={8}
          step={1}
          value={[tweetData.borderWidth]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, borderWidth: val })
          }
        />
      </div>

      <div>
        <Label>Border Color</Label>
        <Input
          type="color"
          value={tweetData.borderColor}
          onChange={(e) =>
            setTweetData({ ...tweetData, borderColor: e.target.value })
          }
          className="h-10 p-0 border-none"
        />
      </div>
      <div>
        <Label>Card Background Color</Label>
        <Input
          type="color"
          value={tweetData.bgColor}
          onChange={(e) =>
            setTweetData({ ...tweetData, bgColor: e.target.value })
          }
          className="h-10 p-0 border-none"
        />
      </div>
    </div>
  );
}
