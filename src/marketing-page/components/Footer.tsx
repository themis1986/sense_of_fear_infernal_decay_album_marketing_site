import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import { CircularProgress, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { Link as RouterLink } from "react-router-dom";

function InstagramIcon() {
  return (
    <SvgIcon>
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </SvgIcon>
  );
}

function FacebookIcon() {
  return (
    <SvgIcon>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12z" />
    </SvgIcon>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <MuiLink color="text.secondary" href="#">
        Sense of Fear
      </MuiLink>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: 350,
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
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [status]);

  const FORM_ENDPOINT = `https://formsubmit.co/ajax/${
    import.meta.env.VITE_EMAIL
  }`;

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
        pt: { xs: 8, sm: 10 },
        pb: { xs: 8, sm: 10, md: 30 },
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
            The form sends your message and forwards it to us via email. You can
            also contact us on our social media platforms or directly from your
            email at{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              senseoffearband@gmail.com
            </span>
            .
            <br />
            <br />
            We look forward to hearing from you!
          </Typography>
        </Box>

        {/* === 2. Unified Contact Form === */}
        <Box sx={{ width: { xs: "100%", sm: "60%" } }} id="contact">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
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
              sx={{ width: "350px" }}
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
              sx={{ width: "350px" }}
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
              sx={{ width: "150px" }}
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
          <MuiLink
            component={RouterLink}
            to="/privacy-policy"
            color="primary"
            target="_blank"
          >
            Privacy Policy
          </MuiLink>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <MuiLink
            component={RouterLink}
            to="/terms-and-conditions"
            color="primary"
            target="_blank"
          >
            Terms & Conditions
          </MuiLink>
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
            href="https://instagram.com/senseoffear.official"
            aria-label="
            Instagram"
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://facebook.com/senseoffearband"
            aria-label="Facebook"
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
