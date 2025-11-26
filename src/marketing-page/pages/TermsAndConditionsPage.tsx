import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function TermsAndConditions() {
  const serviceName = "Sense of fear";
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
          Terms of Service
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {" "}
          Effective Date: {new Date().toDateString()}
        </Typography>
      </Box>

      {/* Introduction */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Introduction
        </Typography>
        <Typography paragraph>
          These Terms of Service ("Terms") govern your use of **{serviceName}**
          (the "Service"), a platform for streaming and marketing new album. By
          accessing or using the Service, you agree to comply with these Terms.
          If you do not agree, do not use the Service.
        </Typography>
      </Box>

      {/* 1. Use of the Service */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          1. Use of the Service
        </Typography>
        <List sx={{ listStyleType: "disc", ml: 3 }} disablePadding>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText primary="The Service is provided for personal, non-commercial use only." />
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText primary="You may stream content but are strictly prohibited from downloading, copying, reproducing, distributing, or publicly sharing any content without explicit permission." />
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText primary="Users may not attempt to reverse engineer, modify, or circumvent the Service's technology." />
          </ListItem>
        </List>
      </Box>

      {/* 2. Intellectual Property */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          2. Intellectual Property
        </Typography>
        <Typography paragraph>
          All content, including but not limited to music, albums, artwork,
          videos, and marketing materials, is the property of **{serviceName}**
          or its licensors.
        </Typography>
        <Typography paragraph>
          All rights are **reserved**, and you are granted only a limited
          license to access and stream the content via the Service.
        </Typography>
        <Typography paragraph>
          You may not claim ownership, upload, or distribute any content in
          violation of this license.
        </Typography>
      </Box>

      {/* 3. Restrictions */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          3. Restrictions
        </Typography>
        <Typography paragraph>You agree not to:</Typography>
        <List sx={{ listStyleType: "disc", ml: 3 }} disablePadding>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText primary="Download, copy, reproduce, distribute, or publicly display any content without authorization." />
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText primary="Share your account credentials with others." />
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText primary="Use the Service to infringe any intellectual property rights or violate applicable laws." />
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText primary="Attempt to access content or accounts you are not authorized to access." />
          </ListItem>
        </List>
      </Box>

      {/* 4. Termination */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          4. Termination
        </Typography>
        <Typography paragraph>
          We may suspend or terminate your access to the Service at any time,
          without notice, for violating these Terms or engaging in unauthorized
          use of content.
        </Typography>
      </Box>

      {/* 5. Disclaimers */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          5. Disclaimers
        </Typography>
        <Typography paragraph>
          The Service is provided "as is" and we make no warranties regarding
          content availability, accuracy, or reliability.
        </Typography>
        <Typography paragraph>
          We are not responsible for any content posted by users or third-party
          services linked through the Service.
        </Typography>
      </Box>

      {/* 6. Limitation of Liability */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          6. Limitation of Liability
        </Typography>
        <Typography paragraph>
          **Sense of fear** is not liable for any indirect, incidental, or
          consequential damages arising from your use of the Service.
        </Typography>
        <Typography paragraph>
          You acknowledge that your use of the Service is at your own risk.
        </Typography>
      </Box>

      {/* 7. Indemnification */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          7. Indemnification
        </Typography>
        <Typography paragraph>
          You agree to indemnify and hold **Sense of fear marketing site**
          harmless from any claims, losses, or damages arising from your
          violation of these Terms or misuse of the Service.
        </Typography>
      </Box>

      {/* 8. Modifications */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          8. Modifications
        </Typography>
        <Typography paragraph>
          We may update these Terms at any time. Continued use of the Service
          constitutes acceptance of the revised Terms.
        </Typography>
      </Box>

      {/* 9. Governing Law */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          9. Governing Law
        </Typography>
        <Typography paragraph>
          These Terms are governed by and construed in accordance with the laws
          of **Greece**, without regard to conflict of law principles.
        </Typography>
      </Box>

      {/* 10. Contact Information */}
      <Box mb={4}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          10. Contact Information
        </Typography>
        <Typography paragraph>
          For questions or concerns regarding these Terms, contact:
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

export default TermsAndConditions;
