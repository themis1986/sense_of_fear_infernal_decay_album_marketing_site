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
            <strong>Sense of Fear</strong> is one of the longest-running heavy
            metal bands from Northern Greece, active since our formation in 1998
            in the city of Kozani.
            <br />
            <br />
            Musically, we carve a path deeply rooted in the powerful spine of
            ’80s heavy metal, blending dark atmosphere, aggressive riffing, and
            modern melodic elements. Our sound has often been described as{" "}
            <strong>
              dark, aggressive heavy metal infused with thrash and power
              influences.
            </strong>{" "}
            <br />
            <br />
            <strong>Sense of Fear</strong>entered the studio to record our first
            official release — the self-titled “Sense of Fear” EP, released in
            October 2013. In 2018 we released our full-length album “As the Ages
            Passing By”, earning excellent reviews from both Greek and
            international press. The album’s release was met with tremendously
            positive feedback by the fans, and was followed by numerous live
            shows across Greece.
            <br />
            <br />
            Sense of Fear have shared the stage with renowned metal acts such as
            <strong>
              Accept, Gamma Ray, Queensrÿche, Kamelot, Warrel Dane, Gus G.,
              Blaze Bayley
            </strong>{" "}
            and many more.
            <br />
            <br />
            Now in late 2025, the new full length album{" "}
            <strong>“Infernal Decay”</strong> is done and waiting for a
            thunderous release in 2026! This album is a relentless journey
            through crushing riffs, haunting melodies, and powerfull rhythms
            that embody the essence of dark/aggressive heavy metal. Experience
            the fusion of brutality and atmosphere as{" "}
            <strong>Sense of Fear</strong> delivers a sonic assault that will
            leave you breathless.
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
