import React from "react";

import { ResumeEntry, ResumeEntryTypeEnum } from "../api/v1";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { titleCase } from "@/lib/stringUtils";
import RankCard from "./RankCard";
import BioCard from "./BioCard";

interface TypeCardProps {
  resumeEntries: ResumeEntry[];
}

const TypeCard = ({ resumeEntries }: TypeCardProps) => {
  const type = (resumeEntries.length > 0 && resumeEntries[0].type) || "unknown";

  const content = () => {
    if (type === ResumeEntryTypeEnum.Bio) {
      return <BioCard resumeEntry={resumeEntries[0]} />;
    } else if (
      resumeEntries.every(
        (entry) =>
          entry.details &&
          Object.values(entry.details).some((entryDetailValue) =>
            Array.isArray(entryDetailValue)
          )
      )
    ) {
      return "newDataGrid";
    } else if (resumeEntries.every((entry) => entry.details.proficiency)) {
      return <RankCard resumeEntries={resumeEntries} />;
    } else {
      return "wip";
    }
  };

  return (
    <Card>
      <CardHeader title={titleCase(type)}></CardHeader>
      <CardContent>{content()}</CardContent>
    </Card>
  );
};

export default TypeCard;
