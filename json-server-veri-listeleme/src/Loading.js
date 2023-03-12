import React, { Component } from "react";
import { Spinner } from "reactstrap";

class Loading extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          paddingTop: "150px",
        }}
      >
        <Spinner
          color="info"
          style={{
            height: "3rem",
            width: "3rem",
          }}
        />
        <span
          style={{
            position: "relative",
            top: "-5px",
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#865DFF",
          }}
        >
          {" "}
          Loading{" "}
        </span>
      </div>
    );
  }
}

export default Loading;
