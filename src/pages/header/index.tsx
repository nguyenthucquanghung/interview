import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material"
import "./index.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default class Header extends React.Component {

  render() {
    return <Box className="header-container">
      <Stack direction="row">
        <Box className="header-right">
          <img src="icons/logo.svg" />
        </Box>
        <Box className="header-left">
          <Stack spacing={"12px"} direction="row">
            <Button variant="text" className="btn-text" > N-Fi </Button>
            <Button variant="text" className="btn-text" > My NFT </Button>
            <Button variant="outlined" className="btn-outlined" startIcon={<ArrowBackIcon/>}> Go to klayhub </Button>
            <Button className="btn-login"> 연결 </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  }
}