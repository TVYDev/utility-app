import {
  BracesIcon,
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

const JsonFormatter = () => {
  const [json, setJson] = useState("");

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

  const handleFormatJson = () => {
    if (!json.trim()) {
      alert("JSON is empty");
      return;
    }

    try {
      const parsed = JSON.parse(json);
      const formatted = JSON.stringify(parsed, null, 2);
      setJson(formatted);
    } catch (e) {
      alert(`Invalid JSON: ${(e as Error).message}`);
    }
  };

  const handleRemoveWhitespaces = () => {
    if (!json.trim()) {
      alert("JSON is empty");
      return;
    }

    try {
      const parsed = JSON.parse(json);
      const compact = JSON.stringify(parsed);
      setJson(compact);
    } catch (e) {
      alert(`Invalid JSON: ${(e as Error).message}`);
    }
  };

  const handleClear = () => {
    setJson("");
  };

  const handleCopy = async () => {
    if (!json.trim()) {
      alert("JSON is empty");
      return;
    }

    await navigator.clipboard.writeText(json);
    setIsCopied(true);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setJson(text);
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
              onClick={handleFormatJson}
            >
              <BracesIcon />
              &nbsp;Format JSON
            </Button>
            <Button
              size="sm"
              className="active:scale-95 transition-transform cursor-pointer min-w-50"
              onClick={handleRemoveWhitespaces}
            >
              <BrushCleaningIcon />
              &nbsp;Remove Whitespaces
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
          value={json}
          onChange={(e) => {
            setJson(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default JsonFormatter;
