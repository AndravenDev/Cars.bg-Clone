import Chip from "@mui/material/Chip";

export const PublishDateFilter = () => {
  return (
    <div>
      <Chip label="Last day" />
      <Chip label="Last 10 days" />
      <Chip label="Last 30 days" />
    </div>
  );
};
