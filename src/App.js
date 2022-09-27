import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">Badge Labels</MDBBtn>
      </Link>
      <Link to="/input">
        <MDBBtn className="m-3">Floating Labels for Inputs</MDBBtn>
      </Link>
      <Link to="/range">
        <MDBBtn className="m-3">Range slider with labels</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
