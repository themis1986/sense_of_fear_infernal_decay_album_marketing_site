import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// --- START: Aspect Ratio Box Styles ---

// 1. Styles for the wrapper (Aspect Ratio Box)
const iframeWrapperStyles = {
  // Makes the container relative for absolute positioning of the iframe
  position: "relative",
  // 16:9 Aspect Ratio: 9 / 16 = 0.5625, so 56.25% padding top
  paddingTop: "56.25%",
  height: 0,
  overflow: "hidden",
  // Adds some margin below the video before the text/header starts
  mb: 2,
};

// 2. Styles for the iframe itself
const iframeStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%", // Essential to fill the container width
  height: "100%", // Essential to fill the container height
  border: "0",
};
// --- END: Aspect Ratio Box Styles ---

const userTestimonials = [
  {
    name: "Conflict of interest",
    occupation: "Lyric video (from upcoming album)",
    videoUrl: "https://www.youtube.com/embed/XLxmzKf9s98?si=ivgJDlOWnEbIDQZm",
    testimonial:
      "Watch the latest lyric video from our upcoming album, 'Infernal Decay'.",
  },
  {
    name: "Retaliation",
    occupation: "Video clip (latest single)",
    videoUrl: "https://www.youtube.com/embed/WBiSLTpc9gw?si=uEh2kJrvKCRMqrSu",
    testimonial:
      "Watch the latest lyric video from our upcoming album, 'Infernal Decay'.",
  },
  {
    name: "Black hole",
    occupation: "Video clip (from previous album)",
    videoUrl: "https://www.youtube.com/embed/Cl_LI4NmUHw?si=oIXFcmqPoGtPChmX",
    testimonial:
      "Watch the latest lyric video from our upcoming album, 'Infernal Decay'.",
  },
  {
    name: "Torture of mind",
    occupation: "Video clip (from previous album)",
    videoUrl: "https://www.youtube.com/embed/AkSjWa0zYZE?si=wuDOo5m8b5AZZ_8g",
    testimonial:
      "Watch the latest lyric video from our upcoming album, 'Infernal Decay'.",
  },
  {
    name: "Unbreached walls",
    occupation: "Video clip (from previous album)",
    videoUrl: "https://www.youtube.com/embed/nd9DcP96Klo?si=UGkP53L7NOvKxoKu",
    testimonial:
      "Watch the latest lyric video from our upcoming album, 'Infernal Decay'.",
  },
  {
    name: "Angel of steel",
    occupation: "Official music video",
    videoUrl: "https://www.youtube.com/embed/iPYjfZw9P7s?si=GvZDl16o1g7z9gax",
    testimonial:
      "Watch the latest lyric video from our upcoming album, 'Infernal Decay'.",
  },
];

export default function Highlights() {
  return (
    <Container
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Highlights
        </Typography>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          Check out released singles "Conflict of interest" and "Retaliation"
          from our latest album "Infernal Decay" that showcase the band's
          signature sound and musical evolution.
          <br />
          Feel free to also check out some of our previous music videos from our
          earlier album "As the ages passing by...time still runs against us".
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {userTestimonials.map((testimonial, index) => (
          <Grid
            key={index}
            sx={{
              display: "flex",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                // --- FIXED WIDTH APPLIED HERE ---
                // Full width on extra-small screens, fixed 320px otherwise
                width: { xs: "100%", sm: 320 },
                // --- END FIXED WIDTH ---

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {" "}
                {/* Remove CardContent default padding */}
                {/* New Conditional Rendering for Video vs Text 
                  We check for the existence of the videoUrl field
                */}
                {testimonial.videoUrl ? (
                  // 1. Video Present: Render the responsive wrapper Box
                  <Box sx={iframeWrapperStyles}>
                    <iframe
                      // Use the URL from the data structure
                      src={testimonial.videoUrl}
                      title={testimonial.name}
                      style={iframeStyles} // Apply the responsive, absolute styles
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </Box>
                ) : (
                  // 2. Video Not Present: Render standard Typography inside CardContent
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: "text.secondary", p: 2 }} // Re-add padding here
                  >
                    {testimonial.testimonial}
                  </Typography>
                )}
              </CardContent>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  p: 1, // Padding for the area containing the header and avatar/logo
                  borderTop: "1px solid",
                  borderColor: "divider",
                }}
              >
                <CardHeader
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                  sx={{ p: 1 }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
