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

const fontFamilies = [
  { label: "Sans-serif", value: "sans-serif" },
  { label: "Serif", value: "serif" },
  { label: "Monospace", value: "monospace" },
  { label: "System", value: "system-ui" },
];

export default function EditorTypography({ tweetData, setTweetData }: any) {
  const renderFontControls = (label: string, key: string) => (
    <div className="space-y-2">
      <Label>{label} Font Size ({tweetData[`${key}FontSize`]}px)</Label>
      <Slider
        min={10}
        max={32}
        step={1}
        value={[tweetData[`${key}FontSize`]]}
        onValueChange={([val]) =>
          setTweetData({ ...tweetData, [`${key}FontSize`]: val })
        }
      />
      <Label>{label} Font Family</Label>
      <Select
        value={tweetData[`${key}FontFamily`]}
        onValueChange={(val) =>
          setTweetData({ ...tweetData, [`${key}FontFamily`]: val })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Choose font" />
        </SelectTrigger>
        <SelectContent>
          {fontFamilies.map((f) => (
            <SelectItem key={f.value} value={f.value}>
              {f.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="space-y-6">
      {renderFontControls("Tweet", "tweet")}
      {renderFontControls("Username", "username")}
      {renderFontControls("Hashtag", "hashtag")}
      {renderFontControls("Timestamp", "timestamp")}

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
  );
}
