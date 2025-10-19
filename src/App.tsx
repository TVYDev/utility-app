import {
  BracesIcon,
  BrushCleaningIcon,
  ClipboardCopyIcon,
  ClipboardPasteIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const App = () => {
  const [json, setJson] = useState("");

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

  const handleCopy = () => {
    if (!json.trim()) {
      alert("JSON is empty");
      return;
    }

    navigator.clipboard.writeText(json);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setJson(text);
  };

  return (
    <main className="h-screen bg-gray-300 flex flex-col p-2 gap-2">
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
        <Separator orientation="vertical" className="bg-gray-800" />
        <div className="flex gap-2">
          <Button
            size="sm"
            className="active:scale-95 transition-transform cursor-pointer"
            onClick={handleCopy}
          >
            <ClipboardCopyIcon />
            &nbsp;Copy
          </Button>
          <Button
            size="sm"
            className="active:scale-95 transition-transform cursor-pointer"
            onClick={handlePaste}
          >
            <ClipboardPasteIcon />
            &nbsp;Paste
          </Button>
        </div>
        <Separator orientation="vertical" className="bg-gray-800" />
        <Button
          size="sm"
          variant="secondary"
          className="active:scale-95 transition-transform cursor-pointer"
          onClick={handleClear}
        >
          <TrashIcon />
          &nbsp;Clear
        </Button>
      </div>
      <div className="flex-1 flex">
        <Textarea
          spellCheck="false"
          autoComplete="off"
          autoCapitalize="off"
          className="bg-gray-200 flex-1 resize-none font-mono border-2 border-solid border-gray-400 focus-visible:ring-0"
          value={json}
          onChange={(e) => {
            setJson(e.target.value);
          }}
        />
      </div>
    </main>
  );
};

export default App;
