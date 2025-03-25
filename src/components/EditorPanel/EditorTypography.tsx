import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditorTypography({ tweetData, setTweetData }: any) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Font Size ({tweetData.fontSize}px)</Label>
        <Slider
          min={10}
          max={24}
          step={1}
          value={[tweetData.fontSize]}
          onValueChange={([val]) =>
            setTweetData({ ...tweetData, fontSize: val })
          }
        />
      </div>

      <div>
        <Label>Font Family</Label>
        <Select
          value={tweetData.fontFamily}
          onValueChange={(val) =>
            setTweetData({ ...tweetData, fontFamily: val })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sans-serif">Sans-serif</SelectItem>
            <SelectItem value="serif">Serif</SelectItem>
            <SelectItem value="monospace">Monospace</SelectItem>
            <SelectItem value="system-ui">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Text Align</Label>
        <Select
          value={tweetData.textAlign}
          onValueChange={(val) =>
            setTweetData({ ...tweetData, textAlign: val })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose alignment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Text Color</Label>
        <Input
          type="color"
          value={tweetData.textColor}
          onChange={(e) =>
            setTweetData({ ...tweetData, textColor: e.target.value })
          }
        />
      </div>

      <div>
        <Label>Username Color</Label>
        <Input
          type="color"
          value={tweetData.usernameColor}
          onChange={(e) =>
            setTweetData({ ...tweetData, usernameColor: e.target.value })
          }
        />
      </div>

      <div>
        <Label>Hashtag Color</Label>
        <Input
          type="color"
          value={tweetData.hashtagColor}
          onChange={(e) =>
            setTweetData({ ...tweetData, hashtagColor: e.target.value })
          }
        />
      </div>

      <div>
        <Label>Timestamp Color</Label>
        <Input
          type="color"
          value={tweetData.timestampColor}
          onChange={(e) =>
            setTweetData({ ...tweetData, timestampColor: e.target.value })
          }
        />
      </div>
    </div>
  );
}
