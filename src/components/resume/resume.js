import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Box, Grid } from "@mui/material";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "./Soumyajit_Behera-BIT_MESRA.pdf";
import jiminpdf from "./jimin.pdf";
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
      alignItems={"center"}
      justifyContent={"center"}
      paddingY={"2%"}
    >
      <Document file={jiminpdf}>
        <Page pageNumber={1} />
      </Document>
    </Box>
  );
}

export default ResumeNew;
