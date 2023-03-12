import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios"; // axios'u yükledikten sonra kullanmak için import ediyoruz
import Loading from "./Loading";

class Listeleme extends Component {
  state = { kisiler: [], load: true };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((veriler) => {
        this.setState({
          kisiler: veriler.data,
        });
      })
      .finally(() => {
        this.setState({ load: false });
      });
  }

  loading() {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  render() {
    let kisiler = this.state.kisiler;
    let load = this.state.load;
    return (
      <div>
        {load === true ? (
          this.loading()
        ) : (
          <div>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "50px",
                fontWeight: "bold",
                marginTop: "50px",
                color: "#865DFF",
              }}
            >
              Kullanıcı Bilgileri
            </h1>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>İsim ve Soyisim</th>
                  <th>Kullanıcı Adı</th>
                  <th>Telefon Numarası</th>
                  <th>E-Posta</th>
                </tr>
              </thead>
              <tbody>
                {kisiler.map((kisi) => {
                  return (
                    <tr key={kisi.id}>
                      <th scope="row">{kisi.id}</th>
                      <td>{kisi.name}</td>
                      <td>{kisi.username}</td>
                      <td>{kisi.phone}</td>
                      <td>{kisi.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

export default Listeleme;
