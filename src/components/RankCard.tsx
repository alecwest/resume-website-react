import { ResumeEntry } from "@/api/v1";
import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";
import React from "react";

interface RankCardProps {
  resumeEntries: ResumeEntry[];
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number; label: string }
) {
  const normalized = (props.value * 100) / 5;

  return (
    <Box>
      <Box>
        <Typography
          variant="body1"
          color="text.primary"
          className="text-center">
          {props.label}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" value={normalized} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">
            {props.value}/5
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const RankCard = ({ resumeEntries }: RankCardProps) => {
  const sorted = resumeEntries.sort((a, b) => {
    const skillSort = b.details.proficiency! - a.details.proficiency!;
    if (skillSort === 0) {
      return a.title.localeCompare(b.title);
    } else {
      return skillSort;
    }
  });

  return (
    <Box className="grid grid-flow-row grid-cols-3">
      {sorted.map((entry) => {
        return (
          <Box key={entry.title} className="py-2">
            <LinearProgressWithLabel
              variant="determinate"
              value={entry.details.proficiency!}
              label={entry.title}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default RankCard;
