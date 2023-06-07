import React from "react";
import Header2 from "../../Different Header/Header2";
import "./Treks.css";
import { Contact } from "../../Contact Me/Contact";

function Treks() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="content-container">
        <div className="main_treks">
          <div className="container">
            <p>
              I have climbed many treks till date. Have a look at the treks I
              had completed !
            </p>{" "}
            <hr />
            <table class="table table-hover " sx={{ padding: "50px" }}>
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Trek Name</th>
                  <th scope="col">No of Summits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>RoopKund trek</td>
                  <td>17 +</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Kedarkantha Trek</td>
                  <td>15 +</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Brahmatal Trek</td>
                  <td>11 +</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Valley of Flowers Trek</td>
                  <td>2 +</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Kedartal Trek</td>
                  <td>2 +</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Vasuki Tal Trek</td>
                  <td>2 +</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Goumukh Tapovana Trek</td>
                  <td>1 +</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Dodital Darwa pass</td>
                  <td>2 +</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Dayara Bugyal Trek</td>
                  <td>3 +</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Har ki Dun Trek</td>
                  <td>8 +</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Buran Ghati Trek</td>
                  <td>12 +</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Rupin pass</td>
                  <td>3 +</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Bali Pass</td>
                  <td>2 +</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Pangarchula Trek</td>
                  <td>5 +</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>Pin Bhabha Pass</td>
                  <td>9 +</td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>Hampta Pass Trek</td>
                  <td>5 +</td>
                </tr>
                <tr>
                  <th scope="row">17</th>
                  <td>Nagtibba Trek</td>
                  <td>6 +</td>
                </tr>
                <tr>
                  <th scope="row">18</th>
                  <td>Chadar Trek</td>
                  <td>4 +</td>
                </tr>
                <tr>
                  <th scope="row">19</th>
                  <td>Kalihani Pass</td>
                  <td>1 +</td>
                </tr>
                <tr>
                  <th scope="row">20</th>
                  <td>Bhrigu lake Trek</td>
                  <td>1 +</td>
                </tr>
                <tr>
                  <th scope="row">21</th>
                  <td>Goechala Trek</td>
                  <td>1 +</td>
                </tr>
                <tr>
                  <th scope="row">22</th>
                  <td>Kuari Pass Trek</td>
                  <td>1 +</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="footer--pin">
        <Contact />
      </footer>
    </>
  );
}

export default Treks;
