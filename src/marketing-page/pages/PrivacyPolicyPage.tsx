import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function PrivacyPolicy() {
  const siteName = "Sense of fear";
  const contactEmail = "senseoffearband@gmail.com";

  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Last updated: {new Date().toDateString()}
        </Typography>
      </Box>

      {/* Introduction */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Introduction
        </Typography>
        <Typography paragraph>
          This Privacy Policy describes how <strong>{siteName}</strong>{" "}
          collects, uses, shares, and protects information when you access or
          interact with our album streaming and marketing platform (the
          “Service”). By using the Service, you agree to the practices described
          in this Privacy Policy.
        </Typography>
      </Box>

      {/* 1. Information We Collect */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          1. Information We Collect
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          Personal Information
        </Typography>
        <Typography paragraph>
          We may collect personal information you provide directly, such as:
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Name" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Email address" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Phone number (if applicable)" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="User account details (username, password)" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Artist profile details" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Contact preferences" />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
          Streaming & Interaction Data
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Albums, tracks, and pages you view" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Streams, plays, skips, and listening duration" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Clicks, likes, follows, comments, or shares" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Engagement with marketing links and campaigns" />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
          Technical & Usage Data
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="IP address" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Device and browser information" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Operating system" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Referring URLs" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Access times and browsing behavior" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Cookies, pixels, and similar tracking technologies" />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
          Marketing & Analytics Data
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Email campaign opens and clicks" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Traffic sources (social media, ads, referral links)" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Geographic region (approximate)" />
          </ListItem>
        </List>
      </Box>

      {/* 2. How We Use Your Information */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>We use collected data to:</Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Provide and maintain the album streaming experience" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Support artist marketing campaigns" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Track engagement and generate insights for artists and marketing partners" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Improve site performance and user experience" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Personalize music recommendations and content" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Communicate updates, promotions, or important notices" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Detect, prevent, and respond to fraud or security issues" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Comply with legal requirements" />
          </ListItem>
        </List>
      </Box>

      {/* 3. How We Share Your Information */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          3. How We Share Your Information
        </Typography>
        <Typography paragraph>We may share your information with:</Typography>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
          Artists & Marketing Partners
        </Typography>
        <Typography paragraph>
          For promotional and analytics purposes, we may share aggregated or
          pseudonymized user engagement data (e.g., stream counts, traffic
          sources, click-through metrics). We do not share your personal
          identity unless you opt in (such as subscribing to an artist’s mailing
          list).
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
          Service Providers
        </Typography>
        <Typography paragraph>
          Trusted third-party vendors who assist with:
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Hosting and infrastructure" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Analytics tools" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Email delivery" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Payment processing (if applicable)" />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
          Legal & Compliance
        </Typography>
        <Typography paragraph>
          We may disclose information if required by law, legal process, or to
          protect our rights.
        </Typography>
        <Typography paragraph>
          **We do not sell personal information.**
        </Typography>
      </Box>

      {/* 4. Cookies & Tracking Technologies */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          4. Cookies & Tracking Technologies
        </Typography>
        <Typography paragraph>
          We use cookies, pixels, tags, and similar technologies to:
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Track streams, plays, and interactions" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Analyze engagement for marketing purposes" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Remember preferences" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Improve functionality" />
          </ListItem>
        </List>
        <Typography paragraph>
          You can modify your browser settings to block cookies, but some
          features may not work properly.
        </Typography>
      </Box>

      {/* 5. Data Retention */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          5. Data Retention
        </Typography>
        <Typography paragraph>
          We retain information only as long as necessary to:
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Provide services" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Generate marketing analytics" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Comply with legal obligations" />
          </ListItem>
        </List>
        <Typography paragraph>You may request deletion at any time.</Typography>
      </Box>

      {/* 6. Data Security */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          6. Data Security
        </Typography>
        <Typography paragraph>
          We implement administrative, technical, and physical safeguards to
          protect your information. However, no internet-based service is
          completely secure.
        </Typography>
      </Box>

      {/* 7. Children's Privacy */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          7. Children's Privacy
        </Typography>
        <Typography paragraph>
          The Service is not intended for children under 13 (or 16 where
          applicable). We do not knowingly collect information from children.
        </Typography>
      </Box>

      {/* 8. Your Rights & Choices */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          8. Your Rights & Choices
        </Typography>
        <Typography paragraph>
          Depending on your location, you may have rights such as:
        </Typography>
        <List dense sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary="Access your data" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Request deletion" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Request correction" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Opt out of marketing emails" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Withdraw consent" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Request limitation or portability of your data" />
          </ListItem>
        </List>
        <Typography paragraph>
          Contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> to
          exercise these rights.
        </Typography>
      </Box>

      {/* 9. International Data Transfers */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          9. International Data Transfers
        </Typography>
        <Typography paragraph>
          Your information may be transferred to and processed in countries
          outside your own. We take steps to ensure appropriate protections are
          in place.
        </Typography>
      </Box>

      {/* 10. Updates to This Policy */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          10. Updates to This Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy periodically. The “Last Updated”
          date indicates the most recent version.
        </Typography>
      </Box>

      {/* 11. Contact Us */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          11. Contact Us
        </Typography>
        <Typography paragraph>
          For questions or requests regarding this Privacy Policy, contact:
        </Typography>
        <Box component="ul" sx={{ listStyleType: "none", pl: 0 }}>
          <li>
            <Typography>
              <strong>Sense of fear</strong>
            </Typography>
          </li>
          <li>
            <Typography>
              Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </Typography>
          </li>
        </Box>
      </Box>
    </Container>
  );
}

export default PrivacyPolicy;
