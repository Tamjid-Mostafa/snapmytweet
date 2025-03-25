'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import EditorBasicInfo from './EditorBasicInfo';
import EditorCanvas from './EditorCanvas';
import EditorCardStyle from './EditorCardStyle';
import EditorShadow from './EditorShadow';
import EditorTypography from './EditorTypography';

export default function EditorPanel({ tweetData, setTweetData }: any) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <ScrollArea className="md:h-[70vh] h-[40vh] py-4">
        <CardContent className="p-6 space-y-6">
          <EditorBasicInfo tweetData={tweetData} setTweetData={setTweetData} />
          <EditorCanvas tweetData={tweetData} setTweetData={setTweetData} />
          <EditorCardStyle tweetData={tweetData} setTweetData={setTweetData} />
          <EditorShadow tweetData={tweetData} setTweetData={setTweetData} />
          <EditorTypography tweetData={tweetData} setTweetData={setTweetData} />
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
