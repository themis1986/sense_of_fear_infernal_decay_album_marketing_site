import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import AlbumPlayer from "./components/AlbumPlayer";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <AlbumPlayer />
        <Divider />
        <About />
        <Divider />
        <Highlights />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
