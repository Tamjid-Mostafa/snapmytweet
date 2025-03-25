import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function EditorCanvas({ tweetData, setTweetData }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="canvas-toggle"
          checked={tweetData.showCanvas}
          onCheckedChange={(val) =>
            setTweetData({ ...tweetData, showCanvas: val === true })
          }
        />
        <Label htmlFor="canvas-toggle">Show Canvas Background</Label>
      </div>

      <div>
        <Label>Canvas Background</Label>
        <Input
          type="color"
          value={tweetData.canvasBg || "#f9f9f9"}
          onChange={(e) =>
            setTweetData({ ...tweetData, canvasBg: e.target.value })
          }
          className="h-10 p-0 border-none"
        />
      </div>

      <div>
        <Label>
          Canvas Padding X ({tweetData.canvasPaddingX}px)
        </Label>
        <Slider
          min={0}
          max={128}
          step={4}
          value={[tweetData.canvasPaddingX]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, canvasPaddingX: val })
          }
        />
      </div>

      <div>
        <Label>
          Canvas Padding Y ({tweetData.canvasPaddingY}px)
        </Label>
        <Slider
          min={0}
          max={128}
          step={4}
          value={[tweetData.canvasPaddingY]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, canvasPaddingY: val })
          }
        />
      </div>
    </div>
  );
}
