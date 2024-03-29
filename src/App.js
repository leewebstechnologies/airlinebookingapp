import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <div
          style={{
            minHeight: "10vh",
            width: "100%",
            backgroundColor: "rgb(25 118 210 / 55%)",
          }}
        ></div>
        <Navbar />
      </header>
      <main>
        <div className="main-body">
          <h1>Welcome to Interswitch Air Booking Site</h1>
          <br />
          <AppRoutes />
        </div>
      </main>
      <footer>
        <div
          style={{
            minHeight: "10vh",
            width: "100%",
            backgroundColor: "rgb(25 118 210 / 55%)",
          }}
        ></div>
      </footer>
    </div>
  );
}

export default App;
