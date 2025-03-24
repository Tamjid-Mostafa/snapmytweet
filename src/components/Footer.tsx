import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-sm text-muted-foreground border-t mt-10">
      Made with <Heart className="text-red-500 fill-red-500 inline-block w-4 h-4" /> · Tweet Image Generator ·{" "}
      {new Date().getFullYear()}
    </footer>
  );
}
