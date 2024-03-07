import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Box, Grid, Button } from "@mui/material";
// import Particle from "../Particle";
import jiminpdf from "./jimin.pdf";
import jimin_resume from "./BackendResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingY={"2%"}
    >
      <Button
        variant="outlined"
        href={jimin_resume}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
      <Box height={"10px"} />
      <Document file={jimin_resume}>
        <Page pageNumber={1} />
      </Document>
    </Box>
  );
}

export default ResumeNew;
