import { ResumeEntry } from "@/api/v1";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface BioCardProps {
  resumeEntry: ResumeEntry;
}

const BioCard = ({ resumeEntry }: BioCardProps) => {
  const name = resumeEntry.title;
  const intro = resumeEntry.details.description || [];
  const headshot =
    resumeEntry.details.images && resumeEntry.details.images.length > 0
      ? resumeEntry.details.images[0]
      : "";

  return (
    <Box className="flex flex-row space-x-4">
      <Box className="flex-none">
        <Image
          src={headshot}
          alt={"Headshot for " + name}
          width={0}
          height={0}
          sizes="12rem"
          style={{
            borderRadius: "100%",
            width: "-webkit-fill-available",
            height: "auto",
          }}
        />
      </Box>
      <Box className="grow flex justify-center flex-col space-y-2">
        {intro.map((line, i) => {
          return (
            <Typography key={i} variant="body1">
              {line}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default BioCard;
