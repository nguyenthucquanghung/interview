import React from "react";
import {Box, Stack, Typography} from "@mui/material"
import SearchSection from "./components/SearchSection";

export default class Home extends React.Component {

  render() {
    return <Box className="home-container">
      <SearchSection/>
    </Box>
  }
}