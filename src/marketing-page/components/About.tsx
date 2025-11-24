import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import themis from "../../assets/themis.png";
import markos from "../../assets/markos.png";
import mike from "../../assets/mike.png";
import antonis from "../../assets/antonis.png";
import giannis from "../../assets/giannis.png";
import ilias from "../../assets/ilias.png";

const items = [
  {
    icon: (
      <img
        src={ilias}
        alt="Ilias Kitidis"
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    ),
    title: "Ilias Kitidis",
    description: "Vocals",
  },
  {
    icon: (
      <img
        src={giannis}
        alt="Ioannis Kikis"
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    ),
    title: "Ioannis Kikis",
    description: "Guitars",
  },
  {
    icon: (
      <img
        src={themis}
        alt="Themis Iakovidis"
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    ),
    title: "Themis Iakovidis",
    description: "Guitars",
  },
  {
    icon: (
      <img
        src={antonis}
        alt="Antonis Kikis"
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    ),
    title: "Antonis Kikis",
    description: "Guitars",
  },
  {
    icon: (
      <img
        src={mike}
        alt="Mike Mastrokoukos"
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    ),
    title: "Mike Mastrokoukos",
    description: "Bass",
  },
  {
    icon: (
      <img
        src={markos}
        alt="Markos Kikis"
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    ),
    title: "Markos Kikis",
    description: "Drums",
  },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            About us
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Hail from the depths of darkness with Sense of Fear's "Infernal
            Decay." This album is a relentless journey through crushing riffs,
            haunting melodies, and thunderous rhythms that embody the essence of
            dark/agressive heavy metal. Experience the fusion of brutality and
            atmosphere as Sense of Fear delivers a sonic assault that will leave
            you breathless."
            <br />
            Sense of Fear is a Heavy Metal band that was formed in 1998 in
            Kozani, Greece. With aggresive style, extreme solos and piercing
            melodies we are trying to convey our own musical message to the rest
            of the world. Did you get YOUR taste of sense of fear yet? Have
            shared the stage with Judas Priest, Accept, Queensryche, Gamma Ray,
            Kamelot, Warrel Dane, Blaze Bayley, Gus G, Omen and more...
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "grey.800",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
