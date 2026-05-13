import "./App.css";
import Banner from "./components/HomePage/Banner/Banner";
import StateSection from "./components/HomePage/StateSection/StateSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StateSection></StateSection>
    </>
  );
}

export default App;
