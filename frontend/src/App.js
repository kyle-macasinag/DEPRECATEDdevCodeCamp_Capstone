// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {CssBaseline, Grid} from "@material-ui/core";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import GymList from "./components/GymList/GymList";
import Map from "./components/Map/Map";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={3} style={{ width: "100%"}}>
        <Grid item xs={12} md={4}>
          <GymList/>
        </Grid>
      <Grid item xs={12} md={8}>
        <Map/>
      </Grid>

      </Grid>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
            </PrivateRoute>
          }
        />
        {/* <Route path="/home" element={<HomePage/>} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
