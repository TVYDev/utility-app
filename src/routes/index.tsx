import { createFileRoute } from "@tanstack/react-router";

import JsonFormatter from "@/components/page/JsonFormatter";

export const Route = createFileRoute("/")({
  component: () => <JsonFormatter />,
});
