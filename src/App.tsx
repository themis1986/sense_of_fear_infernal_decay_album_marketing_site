import { GlobalStyles } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MarketingPage from "./marketing-page/pages/MarketingPage";
import PrivacyPolicyPage from "./marketing-page/pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./marketing-page/pages/TermsAndConditionsPage";

// const basePath = "/sense_of_fear_infernal_decay_album_marketing_site";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles
        styles={{
          ':where([data-mui-color-scheme="dark"]) #hero': {
            backgroundImage: "none !important",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route
          path="*"
          element={
            <div style={{ padding: 20 }}>
              <h2>404 - Page Not Found</h2>
              <p>Sorry, the page you requested does not exist.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
