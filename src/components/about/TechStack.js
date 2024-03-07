import React from "react";
import { DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiJavascript,
  SiSolidity,
  SiPostgresql,
  SiNestjs,
  SiTypescript,
  SiDocker,
  SiAmazonaws,
  SiAmazonec2,
  SiAmazonrds,
  SiMysql,
  SiLinux,
  SiWeb3Dotjs,
  SiSwagger,
  SiExpress,
} from "react-icons/si";
import { Box, Grid } from "@mui/material";
import { TbBrandCSharp } from "react-icons/tb";
import styles from "./TechStack.module.scss";

function TechStack() {
  return (
    <Box
      style={{ justifyContent: "center", paddingBottom: "10px" }}
      width={"65%"}
    >
      <h1 style={{ paddingBottom: "20px" }}>My Skills</h1>
      <Grid
        style={{ justifyContent: "center", paddingBottom: "50px" }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 10, md: 6, lg: 4 }}
      >
        <Box xs={4} md={2} className={styles.techicons}>
          <SiTypescript />
        </Box>{" "}
        <Box xs={4} md={2} className={styles.techicons}>
          <SiJavascript />{" "}
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <TbBrandCSharp />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <DiNodejs />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiNestjs />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiExpress />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiMysql />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiPostgresql />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiAmazonaws />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiAmazonec2 />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiAmazonrds />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiDocker />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <SiSwagger />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <DiReact />
        </Box>
        <Box xs={4} md={2} className={styles.techicons}>
          <DiGit />
        </Box>
      </Grid>
    </Box>
  );
}

export default TechStack;
