'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toPng } from 'html-to-image';
import { Loader2 } from 'lucide-react';

export default function DownloadButton({ cardRef }: any) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      if (!cardRef.current) return;
      setIsLoading(true);

      const dataUrl = await toPng(cardRef.current);
      const link = document.createElement('a');
      link.download = 'tweet-image.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isLoading}
      variant="default"
      className="flex items-center gap-2 transition-all"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Downloading...
        </>
      ) : (
        'Download PNG'
      )}
    </Button>
  );
}
