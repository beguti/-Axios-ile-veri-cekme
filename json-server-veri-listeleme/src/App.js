import React, { Component } from "react";
import { Container } from "reactstrap";
import Listeleme from "./Listeleme";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Listeleme />
        </Container>
      </div>
    );
  }
}

export default App;
