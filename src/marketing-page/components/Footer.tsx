import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Logo from "./Logo";
import { CircularProgress, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://mui.com/">
        Sense of Fear
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: 250,
  // Background and text color for dark mode look
  backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
  color: theme.palette.text.primary,

  // Outlined border style
  borderRadius: "4px",
  border: `1px solid ${theme.palette.divider}`,

  // Padding to match TextField's internal padding (makes height look correct)
  padding: "8px 12px",

  boxSizing: "border-box",
  resize: "vertical",
  fontFamily: theme.typography.fontFamily,

  // Focus and Hover effects
  "&:hover": {
    borderColor: theme.palette.text.primary,
  },
  "&:focus-visible": {
    outline: "none",
    borderColor: theme.palette.primary.main,
    borderWidth: "2px",
  },
}));

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  useEffect(() => {
    console.log(status);
  }, [status]);

  const FORM_ENDPOINT = "https://formsubmit.co/ajax/themis19861986@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    let emailSuccess = false;

    // 1. Send Email via FormSubmit
    try {
      const emailResponse = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `New contact message from ${formData.name}`, // Subject line for the email
        }),
      });

      if (emailResponse.ok) {
        emailSuccess = true;
      } else {
        console.error("Email forwarding failed (FormSubmit error).");
      }
    } catch (error) {
      console.error("Network error during FormSubmit call:", error);
    }

    if (emailSuccess) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setStatus("error");
    }
  };

  // Helper text based on submission status
  const getStatusMessage = () => {
    if (status === "success") {
      return (
        <Typography color="success.main" variant="body2" sx={{ mt: 1 }}>
          Message sent successfully! We will be in touch soon.
        </Typography>
      );
    }
    if (status === "error") {
      return (
        <Typography color="error.main" variant="body2" sx={{ mt: 1 }}>
          Failed to send message. Please check the console and ensure the email
          address is confirmed.
        </Typography>
      );
    }
    return null;
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
          gap: { xs: 4, sm: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Logo />
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: 600, mt: 2 }}
          >
            Interested in our work? Let's talk!
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            The form below sends your message to our secure database AND
            forwards it to us via email. You can also contact us directly on{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              myemail@gmail.com
            </span>
            .
          </Typography>
        </Box>

        {/* === 2. Unified Contact Form === */}
        <Box sx={{ width: { xs: "100%", sm: "60%" } }} id="contact">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {/* Name Field */}
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextField
              id="name"
              hiddenLabel
              size="small"
              variant="outlined"
              required
              fullWidth
              aria-label="Enter your name"
              placeholder="Your name / label"
              value={formData.name}
              onChange={handleChange}
              sx={{ width: "250px" }}
            />

            {/* Email Field */}
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
              id="email"
              type="email"
              hiddenLabel
              size="small"
              variant="outlined"
              required
              fullWidth
              aria-label="Enter your email address"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              sx={{ width: "250px" }}
            />

            {/* Message Textarea */}
            <InputLabel htmlFor="message">Contact us</InputLabel>
            <StyledTextarea
              id="message"
              aria-label="Enter your text"
              placeholder="Your text"
              minRows={3}
              required
              value={formData.message}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "250px" }}
            >
              {status === "loading" ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", // Center content horizontally
                    gap: 1,
                  }}
                >
                  <CircularProgress size={20} color="inherit" />
                  Sending...
                </Box>
              ) : (
                "Send Message"
              )}
            </Button>

            {getStatusMessage()}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left", color: "text.secondary" }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
