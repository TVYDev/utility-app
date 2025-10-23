import {
  BinaryIcon,
  BookUpIcon,
  BrushCleaningIcon,
  ClipboardCopyIcon,
  ClipboardPasteIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";
import { useTimeout } from "usehooks-ts";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ModeToggle";

const UrlDecoderEncoder = () => {
  const [url, setUrl] = useState("");

  const [isCopied, setIsCopied] = useState(false);
  const [isPasted, setIsPasted] = useState(false);

  useTimeout(
    () => {
      setIsCopied(false);
    },
    isCopied ? 2000 : null
  );

  useTimeout(
    () => {
      setIsPasted(false);
    },
    isPasted ? 2000 : null
  );

  const handleEncodeUrl = () => {
    if (!url.trim()) {
      alert("URL is empty");
      return;
    }

    const encoded = encodeURIComponent(url);
    setUrl(encoded);
  };

  const handleDecodeUrl = () => {
    if (!url.trim()) {
      alert("URL is empty");
      return;
    }

    const decoded = decodeURIComponent(url);
    setUrl(decoded);
  };

  const handleTrimUrl = () => {
    if (!url.trim()) {
      alert("URL is empty");
      return;
    }

    const trimmed = url.trim();
    setUrl(trimmed);
  };

  const handleClear = () => {
    setUrl("");
  };

  const handleCopy = async () => {
    if (!url.trim()) {
      alert("JSON is empty");
      return;
    }

    await navigator.clipboard.writeText(url);
    setIsCopied(true);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setUrl(text);
    setIsPasted(true);
  };

  return (
    <div className="h-screen bg-border grid grid-rows-[min-content_calc(100vh-3.5rem)] p-2 gap-2">
      <div className="flex justify-between h-8">
        <div className="flex gap-4">
          <div className="flex gap-2">
            <Button
              size="sm"
              className="active:scale-95 transition-transform cursor-pointer min-w-50"
              onClick={handleEncodeUrl}
            >
              <BinaryIcon />
              &nbsp;Encode URL
            </Button>
            <Button
              size="sm"
              className="active:scale-95 transition-transform cursor-pointer min-w-50"
              onClick={handleDecodeUrl}
            >
              <BookUpIcon />
              &nbsp;Decode URL
            </Button>
            <Button
              size="sm"
              className="active:scale-95 transition-transform cursor-pointer min-w-50"
              onClick={handleTrimUrl}
            >
              <BrushCleaningIcon />
              &nbsp;Trim URL
            </Button>
          </div>
          <Separator orientation="vertical" className="bg-muted-foreground" />
          <div className="flex gap-2">
            <Button
              size="sm"
              className="active:scale-95 transition-transform cursor-pointer min-w-25"
              onClick={handleCopy}
            >
              <ClipboardCopyIcon />
              &nbsp;{isCopied ? "Copied" : "Copy"}
            </Button>
            <Button
              size="sm"
              className="active:scale-95 transition-transform cursor-pointer min-w-25"
              onClick={handlePaste}
            >
              <ClipboardPasteIcon />
              &nbsp;{isPasted ? "Pasted" : "Paste"}
            </Button>
          </div>
          <Separator orientation="vertical" className="bg-muted-foreground" />
          <Button
            size="sm"
            variant="outline"
            className="active:scale-95 transition-transform cursor-pointer"
            onClick={handleClear}
          >
            <TrashIcon />
            &nbsp;Clear
          </Button>
        </div>
        <ModeToggle />
      </div>
      <div className="flex-1 flex">
        <Textarea
          spellCheck="false"
          autoComplete="off"
          autoCapitalize="off"
          className="bg-muted flex-1 resize-none font-mono border-2 border-solid border-muted-foreground focus-visible:ring-0 focus:ring-0"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default UrlDecoderEncoder;
