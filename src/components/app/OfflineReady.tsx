import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";

interface OfflineReadyProps {
  className?: string;
}

const OfflineReady = ({ className }: OfflineReadyProps) => {
  return (
    <Badge
      className={`h-6 bg-green-700 text-white dark:bg-green-700 ${className}`}
    >
      <BadgeCheckIcon />
      Offline Ready
    </Badge>
  );
};

export default OfflineReady;
