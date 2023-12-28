"use client";
import Profile from "@/components/Profile";
// TODO I should be able to make this a server component later

import { ResumeDataContext } from "@/lib/ResumeDataClient";
import { Box, CircularProgress } from "@mui/material";
import { useContext } from "react";

export default function Home() {
  const [resumeDataContext, _] = useContext(ResumeDataContext);

  return (
    <Box className="flex-auto flex-col items-center grow align-middle justify-center">
      {resumeDataContext ? (
        <Box className="flex flex-col space-y-12">
          <Profile entriesByType={resumeDataContext} />
        </Box>
      ) : (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
