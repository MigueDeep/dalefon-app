import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRouter } from "./AppRouter";
import "./index.css";
import theme from "@config/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <CssBaseline />
        <Grid container sx={{ height: "100vh" }}>
          <AppRouter />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
