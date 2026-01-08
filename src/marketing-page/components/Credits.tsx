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
              href="http://www.valvestudio.gr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>Stratos “Strutter” Karagiannidis</strong>
            </a>
            .( except drums on tracks 2,3,6,7 and 8, which were recorded at{" "}
            <strong>Magnanimous Studios</strong> by{" "}
            <strong>Nik Logiatidis</strong>).
            <br />
            <br />
            Re-amped, mixed and mastered by{" "}
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
            Produced by <strong>Stratos “Strutter” Karagiannidis</strong>.
            Executive producer: Ioannis Kikis.
            <br />
            <br />
            Second solo on "Riddle Of Shadows" performed by Antonis Kikis and
            recorded at <strong>Vault Studios by Kostas Theoxaris</strong>.
            <br />
            <br />
            "Labyrinth" vocals featuring{" "}
            <a
              href="https://www.instagram.com/sakis.tolis/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sakis Tolis Instagram profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>Sakis Tolis (Rotting Christ)</strong>
            </a>
            .
            <br />
            <br />
            Choir recorded at{" "}
            <strong>Binaural Feeling Studios by Zisis Sapnaras</strong>. The
            choir consists of: Emmelia Kiki, Nantia Matiaki, Xristina Matiaki,
            Jutta Tsotsou, Elli Theodoridou, Eleni Davidopoulou, Eleni
            Tsiouxara, Rita Tsioura.
            <br />
            <br />
            Artwork by{" "}
            <strong>
              Colin Marks -{" "}
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
            Photoshoot by <strong>Nikos Momtsios</strong>.
            <br />
            <br />
            Special thanks to:
            <br />
            Stratos “Strutter” Karagiannidis, George Neratzis, Sakis Tolis,
            Colin Marks, Antonis Kikis, Nik Logiatidis, Kostas Theoxaris, Zisis
            Sapnaras,Nikos Momtsios, our Awesome choir, Evita Mwraiti, Xrusa
            Valsami, our road crew, families and friends.
            <br />
            Extra special thanks to our awesome fans for their love and support
            throughout all these years!
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
