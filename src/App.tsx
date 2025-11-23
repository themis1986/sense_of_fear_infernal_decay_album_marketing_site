import { GlobalStyles } from "@mui/material";
import MarketingPage from "./marketing-page/MarketingPage";

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          ':where([data-mui-color-scheme="dark"]) #hero': {
            backgroundImage: "none !important",
          },
        }}
      />

      <MarketingPage />
    </>
  );
}

export default App;
