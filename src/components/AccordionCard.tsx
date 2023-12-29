import { ResumeEntry } from "@/api/v1";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

interface AccordionCardProps {
  resumeEntries: ResumeEntry[];
}

const AccordionCard = ({ resumeEntries }: AccordionCardProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      {resumeEntries.map((entry) => {
        return (
          <Accordion key={entry.id} TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{entry.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>details details</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccordionCard;
