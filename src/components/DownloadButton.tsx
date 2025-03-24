import { Button } from '@/components/ui/button';
import { toPng } from 'html-to-image';

export default function DownloadButton({ cardRef }: any) {
  const handleDownload = async () => {
    if (!cardRef.current) return;
    const dataUrl = await toPng(cardRef.current);
    const link = document.createElement('a');
    link.download = 'tweet-image.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <Button onClick={handleDownload} variant="default">
      Download PNG
    </Button>
  );
}