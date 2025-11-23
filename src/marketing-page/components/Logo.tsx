import { Box } from "@mui/material";
import logo from "../../assets/logo_cropped.png";

export default function SitemarkIcon() {
  return (
    <Box
      component="img"
      src={logo}
      alt="band logo"
      sx={{ width: 200, borderRadius: 2 }}
    ></Box>
  );
}
