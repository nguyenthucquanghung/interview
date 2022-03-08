import React from "react";
import {Box, Stack, Typography} from "@mui/material"
import "./index.scss"
export default class Footer extends React.Component {

  render() {
    return <Box className="footer-container">
      <Stack className="footer-stack" direction="row">
        <Box className="footer-right">
          <Typography sx={{color: "white"}}>
          블록체인 플러스 | 대표이사 : ??? | 사업자등록번호 : 111-11-111111
          </Typography>
          <Typography sx={{color: "white"}}>
          서울특별시 강남구 언주로 432 2F | 문의 
          </Typography>
          <Typography className="p-company-name">
          BLOCK CHAIN PLUS COPORATION. All rights reserved.
          </Typography>
        </Box>
        <Box className="footer-left">
          <Stack direction="row" spacing={1}>
          <img src="icons/footer-tele.svg" />
          <img src="icons/footer-tele.svg" />
          <img src="icons/footer-file.svg" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  }
}