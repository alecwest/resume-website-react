import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Home() {
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
      <Card>
        <CardHeader title="Education"></CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Hi! I'm Alec West.
            <br />
            <br />
            I'm a Software Engineer in the Denver area. Thus far in my career,
            I've become an expert on Angular frontends and accessible web pages,
            created full stack features in a microservice platform, improved
            build pipelines, explored scalable services in the cloud, mentored
            others, and planned/managed my team's backlog.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
