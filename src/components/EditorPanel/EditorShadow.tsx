import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function EditorShadow({ tweetData, setTweetData }: any) {
  return (
    <div className="space-y-4">
      <div>
        <Label>
          Card Shadow ({tweetData.shadowStrength}px)
        </Label>
        <Slider
          min={0}
          max={100}
          step={1}
          value={[tweetData.shadowStrength]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, shadowStrength: val })
          }
        />
      </div>

      <div>
        <Label>
          Shadow Opacity ({(tweetData.shadowOpacity * 100).toFixed(0)}%)
        </Label>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={[tweetData.shadowOpacity]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, shadowOpacity: val })
          }
        />
      </div>

      <div>
        <Label>Shadow Color</Label>
        <Input
          type="color"
          value={tweetData.shadowColor}
          onChange={(e) =>
            setTweetData({ ...tweetData, shadowColor: e.target.value })
          }
          className="h-10 p-0 border-none"
        />
      </div>
    </div>
  );
}
