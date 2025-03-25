import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DateTimePicker24h } from "../DateTimePicker24h";
import MediaUploader from "../MediaUploader";
import { useState } from "react";
import Dropzone from "../Dropzone";
import { Textarea } from "../ui/textarea";

export default function EditorBasicInfo({ tweetData, setTweetData }: any) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input
          value={tweetData.name}
          onChange={(e) => setTweetData({ ...tweetData, name: e.target.value })}
        />
      </div>
      <div>
        <Label>Username</Label>
        <Input
          value={tweetData.username}
          onChange={(e) =>
            setTweetData({ ...tweetData, username: e.target.value })
          }
        />
      </div>
      <div>
        <Label>Profile Image</Label>
        <MediaUploader
          value={tweetData.profileImage}
          onChange={(url) =>
            setTweetData({ ...tweetData, profileImage: url })
          }
          folder="snapmytweet"
        />
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <Label>Tweet Text</Label>
          <span className="text-xs text-muted-foreground">
            {tweetData.tweetText.length}/280 characters
          </span>
        </div>
        <Textarea
          value={tweetData.tweetText}
          onChange={(e) => {
            const input = e.target.value;
            if (input.length <= 280) {
              setTweetData({ ...tweetData, tweetText: input });
            }
          }}
          placeholder="Write your tweet..."

        />
      </div>

      <div>
        <Label>Hashtags</Label>
        <Input
          value={tweetData.hashtags}
          onChange={(e) =>
            setTweetData({ ...tweetData, hashtags: e.target.value })
          }
        />
      </div>
      <div>
        <Label>Time</Label>
        <DateTimePicker24h
          value={tweetData.timestamp}
          onChange={(val) => setTweetData({ ...tweetData, timestamp: val })}
        />
      </div>
    </div>
  );
}
