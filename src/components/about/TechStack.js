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
import { Box, Grid, Tooltip } from "@mui/material";
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
        <Tooltip title="TypeScript" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiTypescript />
          </Box>
        </Tooltip>
        <Tooltip title="JavaScript" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiJavascript />{" "}
          </Box>
        </Tooltip>
        <Tooltip title="C#" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <TbBrandCSharp />
          </Box>
        </Tooltip>
        <Tooltip title="Node.js" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <DiNodejs />
          </Box>
        </Tooltip>
        <Tooltip title="Nest.js" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiNestjs />
          </Box>
        </Tooltip>
        <Tooltip title="Express" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiExpress />
          </Box>
        </Tooltip>
        <Tooltip title="Mysql" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiMysql />
          </Box>
        </Tooltip>
        <Tooltip title="Postgresql" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiPostgresql />
          </Box>
        </Tooltip>
        <Tooltip title="Amazon AWS" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiAmazonaws />
          </Box>
        </Tooltip>
        <Tooltip title="Amazon EC2" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiAmazonec2 />
          </Box>
        </Tooltip>
        <Tooltip title="Amazon RDS" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiAmazonrds />
          </Box>
        </Tooltip>
        <Tooltip title="Docker" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiDocker />
          </Box>
        </Tooltip>
        <Tooltip title="Swagger" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <SiSwagger />
          </Box>
        </Tooltip>
        <Tooltip title="React" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <DiReact />
          </Box>
        </Tooltip>
        <Tooltip title="Git" placement="bottom">
          <Box xs={4} md={2} className={styles.techicons}>
            <DiGit />
          </Box>
        </Tooltip>
      </Grid>
    </Box>
  );
}

export default TechStack;
