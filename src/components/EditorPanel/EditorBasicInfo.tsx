import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DateTimePicker24h } from '../DateTimePicker24h';

export default function EditorBasicInfo({ tweetData, setTweetData }: any) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input value={tweetData.name} onChange={(e) => setTweetData({ ...tweetData, name: e.target.value })} />
      </div>
      <div>
        <Label>Username</Label>
        <Input value={tweetData.username} onChange={(e) => setTweetData({ ...tweetData, username: e.target.value })} />
      </div>
      <div>
        <Label>Profile Image</Label>
        <Input value={tweetData.profileImage} onChange={(e) => setTweetData({ ...tweetData, profileImage: e.target.value })} />
      </div>
      <div>
        <Label>Tweet Text</Label>
        <Input value={tweetData.tweetText} onChange={(e) => setTweetData({ ...tweetData, tweetText: e.target.value })} />
      </div>
      <div>
        <Label>Hashtags</Label>
        <Input value={tweetData.hashtags} onChange={(e) => setTweetData({ ...tweetData, hashtags: e.target.value })} />
      </div>
      <div>
        <Label>Time</Label>
        <DateTimePicker24h value={tweetData.timestamp} onChange={(val) => setTweetData({ ...tweetData, timestamp: val })} />
      </div>
    </div>
  );
}
