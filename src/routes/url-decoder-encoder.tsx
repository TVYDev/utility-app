import { createFileRoute } from "@tanstack/react-router";

import UrlDecoderEncoder from "@/components/page/UrlDecoderEncoder";

export const Route = createFileRoute("/url-decoder-encoder")({
  component: () => <UrlDecoderEncoder />,
});
