"use client"; // Mark this as a client component
// React
import { ThemeProvider } from "styled-components";

// Styles
import GlobalStyle from "@styles/GlobalStyle";
import { theme } from "@styles/theme";

// Axios & 3rd Party
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@store/store";

// Pages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "./dashboard/page";

// Main Page component
const Page = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ToastContainer position="top-right" autoClose={5000} />
          <DashboardPage />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default Page;
