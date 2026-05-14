import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/HomePage/Banner/Banner";
import Products from "./components/HomePage/Products/Products";
import StateSection from "./components/HomePage/StateSection/StateSection";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import ThreeSteps from "./components/ThreeSteps/ThreeSteps";
import PrisingCard from "./components/TransparentPrising/PrisingCard";
import Footer from "./components/Footer/Footer";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchProduct();
  // const [cart, setCart] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StateSection></StateSection>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Products fetchPromise={fetchPromise}></Products>
      </Suspense>

      <ToastContainer />
      <ThreeSteps></ThreeSteps>
      <PrisingCard></PrisingCard>
      <Footer></Footer>
    </>
  );
}

export default App;
