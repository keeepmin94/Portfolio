import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/aslan.png";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

import { FaGithub } from "react-icons/fa";
import { SiNotion, SiVelog, SiGmail } from "react-icons/si";
import { FaSquarePhone } from "react-icons/fa6";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (params, e) => {
    navigator.clipboard.writeText(params);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"5%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          안녕하세요 <span className={Style.hand}>🤚</span>
        </h1>

        <h2>
          {info.position}{" "}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.lastName}
            {info.firstName}
          </span>
          입니다.
        </h2>

        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"1rem"}
          ml={"5%"}
          mt={"3%"}
        >
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "1.5rem", md: "1.5rem" }}
          >
            <FaGithub />
          </Box>
          <Box
            justifyContent="center"
            fontSize={{
              xs: "0.5rem",
              md: "1rem",
              "&:hover": {
                fontSize: "1.1rem",
                cursor: "pointer",
              },
            }}
            role="link"
            onClick={() => openInNewTab("https://github.com/keeepmin94")}
          >
            깃허브 바로가기
          </Box>
        </Box>
        {/* --- */}
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"1rem"}
          ml={"5%"}
          mt={"3%"}
        >
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "1.5rem", md: "1.5rem" }}
          >
            <SiNotion />
          </Box>
          <Box
            justifyContent="center"
            fontSize={{
              xs: "0.5rem",
              md: "1rem",
              "&:hover": {
                fontSize: "1.1rem",
                cursor: "pointer",
              },
            }}
            role="link"
            onClick={() =>
              openInNewTab(
                "https://generated-cheddar-8e9.notion.site/TIL-27f74c46c9e24f1da10d39bfde50a67a?pvs=4"
              )
            }
          >
            노션 바로가기
          </Box>
        </Box>
        {/* --- 메일 ---*/}
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"1rem"}
          ml={"5%"}
          mt={"3%"}
        >
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "1.5rem", md: "1.5rem" }}
          >
            <SiGmail />
          </Box>
          <Box
            justifyContent="center"
            fontSize={{
              xs: "0.5rem",
              md: "1rem",
              "&:hover": {
                fontSize: "1.1rem",
                cursor: "pointer",
              },
            }}
            onClick={(e) => {
              handleClick("wjdwkjh94@gmail.com", e);
            }}
          >
            wjdwkjh94@gmail.com
          </Box>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              복사를 완료했습니다.
            </Alert>
          </Snackbar>
        </Box>
        {/* --- 전화번호 --- */}
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"1rem"}
          ml={"5%"}
          mt={"3%"}
        >
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "1.5rem", md: "1.5rem" }}
          >
            <FaSquarePhone />
          </Box>
          <Box
            justifyContent="center"
            fontSize={{
              xs: "0.5rem",
              md: "1rem",
              "&:hover": {
                fontSize: "1.1rem",
                cursor: "pointer",
              },
            }}
            onClick={(e) => {
              handleClick("01053441712", e);
            }}
          >
            82+ 10-5344-1712
          </Box>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              복사를 완료했습니다.
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}
