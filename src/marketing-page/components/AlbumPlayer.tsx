import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AudioPlayer, { type PlayerHandle } from "./Player";
import { styled } from "@mui/material/styles";

import cover from "../../assets/cover.png";

const items = [
  {
    title: "1. Intro",
    src: "../../../audio_samples/test_audio.mp3",
  },
  {
    title: "2. Hellfire",
    src: "../../../audio_samples/test_audio_2.mp3",
  },
  {
    title: "3. Infernal Decay",
    src: "../../../audio_samples/test_audio.mp3",
  },
  {
    title: "4. Shadows of the Past",
    src: "../../../audio_samples/test_audio_2.mp3",
  },
  {
    title: "5. Eternal Damnation",
    src: "../../../audio_samples/test_audio.mp3",
  },
  {
    title: "6. Rise of the Fallen",
    src: "../../../audio_samples/test_audio_2.mp3",
  },
  {
    title: "7. Beyond the Grave",
    src: "../../../audio_samples/test_audio.mp3",
  },
  {
    title: "8. Final Judgment",
    src: "../../../audio_samples/test_audio_2.mp3",
  },
  {
    title: "9. Into the Abyss",
    src: "../../../audio_samples/test_audio.mp3",
  },
  {
    title: "10. End of Days",
    src: "../../../audio_samples/test_audio_2.mp3",
  },
  {
    title: "11. Requiem for the Lost",
    src: "../../../audio_samples/test_audio.mp3",
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: (theme.vars || theme).palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}
          >
            {selectedFeature.title}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Player() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const playerRef = React.useRef<PlayerHandle>(null);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
    playerRef.current?.play();
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="player" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: "100%", md: "60%" } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Stream our music
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary", mb: { xs: 2, sm: 4 } }}
        >
          Listen to our latest album tracks.All audio streams are at quality
          levels optimized for all devices and network conditions.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
            }}
          >
            {items.map(({ title }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: (theme.vars || theme).palette.action
                        .hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: "action.selected",
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      gap: 1,
                      textAlign: "left",
                      textTransform: "none",
                      color: "text.secondary",
                    },
                    selectedItemIndex === index && {
                      color: "text.primary",
                    },
                  ]}
                >
                  <Typography variant="h6">{title}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
            height: "50%",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              alignItems: "center",
              p: 2,
            }}
          >
            <AudioPlayer
              ref={playerRef}
              src={items[selectedItemIndex].src}
              onClickNext={() => {
                const nextIndex = (selectedItemIndex + 1) % items.length;
                setSelectedItemIndex(nextIndex);
              }}
              onClickPrevious={() => {
                const prevIndex =
                  (selectedItemIndex - 1 + items.length) % items.length;
                setSelectedItemIndex(prevIndex);
              }}
            />

            <Box
              sx={(theme) => ({
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${cover})`,
                ...theme.applyStyles("dark", {
                  backgroundImage: `url(${cover})`,
                }),
              })}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
