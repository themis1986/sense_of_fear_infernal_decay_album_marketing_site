import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import band from "../../assets/band.jpg";

export default function About() {
  return (
    <Box
      id="credits"
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
          gap: { xs: 0, sm: 0 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Credits
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Recorded at Valve Studios by{" "}
            <a
              href="http://www.valvestudios.gr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>Stratos “Strutter” Karagiannidis</strong>
            </a>
            .( except drums from 2,3,6,7,8 songs , which have been recorded at{" "}
            <strong>Magnanimous Studios</strong> by{" "}
            <strong>Nik Logiatidis</strong>).
            <br />
            <br />
            Reamped, Mixed and Mastered by{" "}
            <a
              href="http://www.georgenerantzis.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>George Nerantzis</strong>
            </a>
            .
            <br />
            <br />
            Producer <strong>Stratos “Strutter” Karagiannidis</strong>.
            Executive producer Ioannis Kikis.
            <br />
            <br />
            2nd solo from Riddle Of Shadows by Antonis Kikis recorded at{" "}
            <strong>Vault Studios by Kostas Theoxaris</strong>.
            <br />
            <br />
            Choir recorded at{" "}
            <strong>Binaural Feeling Studios by Zisis Sapnaras</strong>. Choir
            consists of: Emmelia Kiki, Nantia Matiaki, Xristina Matiaki, Jutta
            Tsotsou, Elli Theodoridou, Eleni Davidopoulou, Eleni Tsiouxara, Rita
            Tsioura.
            <br />
            <br />
            Artwork made by{" "}
            <strong>
              Colin Marks,{" "}
              <a
                href="http://rainsongdesign.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Rainsong Design
              </a>
            </strong>
            .
            <br />
            <br />
            Photoshooting by <strong>Nikos Momtsios</strong>.
            <br />
            <br />
            Sense Of Fear would like to thank: Stratos “Strutter” Karagiannidis,
            George Neratzis , Colin Marks, Antonis Kikis, Nik Logiatidis, Kostas
            Theoxaris, Zisis Sapnaras,Nikos Momtsios, our Awesome choir, Evita
            Mwraiti, Xrusa Valsami, Kelly & Alex, our road crew, families and
            friends!!! Special thanks to our Fans for their support all over
            these years!!!
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            m: "auto",
            width: "100%",
            maxWidth: 800, // optional: limit max width
            aspectRatio: "21/25",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${band})`,
            ...theme.applyStyles("dark", {
              backgroundImage: `url(${band})`,
            }),
          })}
        />
      </Container>
    </Box>
  );
}
