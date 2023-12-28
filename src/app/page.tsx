"use client";
import TypeCard from "@/components/TypeCard";
// TODO I should be able to make this a server component later

import { ResumeDataContext } from "@/lib/ResumeDataClient";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";

export default function Home() {
  const [resumeDataContext, _] = useContext(ResumeDataContext);

  return (
    <>
      <Card sx={{ minWidth: 400 }}>
        <CardHeader title="Bio"></CardHeader>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://placehold.co/100x100"
            alt="Alec West"
          />
          <Box sx={{ display: "flex" }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Hi! I'm Alec West.
                <br />
                <br />
                I'm a Software Engineer in the Denver area. Thus far in my
                career, I've become an expert on Angular frontends and
                accessible web pages, created full stack features in a
                microservice platform, improved build pipelines, explored
                scalable services in the cloud, mentored others, and
                planned/managed my team's backlog.
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
      {resumeDataContext ? (
        Object.keys(resumeDataContext).map((type) => {
          return (
            <TypeCard
              key={type}
              resumeEntries={(resumeDataContext as any)[type]}></TypeCard>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
