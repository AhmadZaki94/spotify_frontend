// import logo from './logo.svg';
// import { useState } from "react";
import "./App.css";
// import { Listing } from "./component/Listing";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import { AddNewSong } from "./component/AddNewSong";
// import { Artist } from "./component/Artist";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import { AllRoutes } from "./component/AllRoutes";
function App() {
  return (
    <div className="App">
      {/* <Box mt="20px">
        {show ? (
          <Button variant="contained" onClick={() => setShow(!show)}>
            Go To Home
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setShow(!show)}>
            + Add Song
          </Button>
        )}
      </Box>
      <Box mt="20px" border={"1px solid white"}>
        {show ? <AddNewSong /> : <Listing />}
      </Box>
      {!show ? <Artist /> : ""} */}

      <ResponsiveAppBar />
      <AllRoutes />
    </div>
  );
}

export default App;
