import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
class MyApp extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  goToPrevPage = () => {
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  }

  goToNextPage = () => {
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>
        <div>
          <Document file="sample.pdf" onLoadSuccess={this.onDocumentLoadSuccess} >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default MyApp;
