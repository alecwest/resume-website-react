import { ResumeEntriesByType } from "@/models/models";
import React from "react";
import TypeCard from "./TypeCard";
import { ResumeEntryTypeEnum } from "@/api/v1";

interface ProfileProps {
  entriesByType: ResumeEntriesByType;
}

const Profile = ({ entriesByType }: ProfileProps) => {
  const sortedTypes = Object.keys(entriesByType).sort((a, b) => {
    const order = { bio: -1 };
    return ((order as any)[a] || 0) - ((order as any)[b] || 0);
  }) as ResumeEntryTypeEnum[];

  return sortedTypes.map((type) => {
    return (
      <TypeCard
        key={type}
        resumeEntries={
          entriesByType[type as keyof ResumeEntriesByType]
        }></TypeCard>
    );
  });
};

export default Profile;
