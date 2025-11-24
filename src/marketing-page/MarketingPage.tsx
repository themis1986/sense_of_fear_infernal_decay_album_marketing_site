import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import AlbumPlayer from "./components/AlbumPlayer";
import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
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
        <Testimonials />
        <Divider />
        <Pricing />
        {/* <Divider /> */}
        {/* <FAQ /> */}
        {/* <Divider /> */}
        <Footer />
      </div>
    </AppTheme>
  );
}
