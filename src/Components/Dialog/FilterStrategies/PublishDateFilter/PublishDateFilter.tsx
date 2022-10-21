import Chip from "@mui/material/Chip";

interface PublishDateFilterProps {
  onClose: () => void;
}

export const PublishDateFilter = ({ onClose }: PublishDateFilterProps) => {
  return (
    <div>
      <Chip label="Last day" />
      <Chip label="Last 10 days" />
      <Chip label="Last 30 days" />
    </div>
  );
};
