import React, { useCallback, useState } from 'react';
import { Container, ContainerPDF } from './styles';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfViewerProps {
  src: string;
}

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const anterior = "<";
const siguiente = ">";
const initialHeightPage = 300;

const PdfViewer: React.FC<PdfViewerProps> = ({ src }) => {
  const [scale, setScale] = useState(1)
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);


  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPage(numPages);
  }, [])

  const onPageLoadSuccess = useCallback(() => {
    if (isMounted) return;
    const doc = document.querySelector(".react-pdf__Page__svg");
    if (!doc) return;
    const initialWidthPage = doc.clientWidth;
    const factorWidth = (window.innerWidth / 2 - 20) / initialWidthPage
    const factorHeight = (window.innerHeight - 20) / initialHeightPage
    if (window.innerWidth > initialWidthPage * factorWidth && window.innerHeight > initialHeightPage * factorWidth) {
      setScale(factorWidth);
    } else {
      setScale(factorHeight)
    }

    // setScale(factor);
    setIsMounted(true);
  }, [isMounted])


  const onLoadError = useCallback((err:any) => {
    console.error(err);
  }, [])

  const handleNext = useCallback(() => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }, [numPages, pageNumber])

  const handlePrev = useCallback(() => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }, [pageNumber])

  const handleZoomIn = useCallback(() => {
    if (scale < 3) {
      setScale(scale + 0.2)
    }
  }, [scale])

  const handleZoomOut = useCallback(() => {
    if (scale > 1) {
      setScale(scale - 0.2)
    }
  }, [scale])


  return (
    <Container>
      <ContainerPDF>
        <Document
          options={options}
          file={src}
          error="Failed to load PDF file"
          loading="Loading PDF..."
          noData="No PDF file specified."
          onLoadError={onLoadError}
          onLoadSuccess={onLoadSuccess}
        // onSourceSuccess={onSourceSuccess}
        >
          <Page
            key={`page_${pageNumber}`}
            pageNumber={pageNumber}
            scale={scale}
            onLoadSuccess={onPageLoadSuccess}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            renderMode="svg"
            height={initialHeightPage}
          />
        </Document>
      </ContainerPDF>

      <div className="page-controls">
        <button onClick={handlePrev} disabled={pageNumber === 1}>{anterior}</button>
        <span>{pageNumber} de {numPages} </span>
        <button onClick={handleNext} disabled={pageNumber >= numPages}>{siguiente}</button>
      </div>
      <div className="page-zoom">
        <button onClick={handleZoomIn} className="zoom-in">+</button>
        <br></br>
        <button onClick={handleZoomOut} className="zoom-out">-</button>
      </div>
    </Container>
  );
}

export default PdfViewer;
