import { Suspense } from "react";
import "./App.css";
import Banner from "./components/HomePage/Banner/Banner";
import Products from "./components/HomePage/Products/Products";
import StateSection from "./components/HomePage/StateSection/StateSection";
import Navbar from "./components/Navbar/Navbar";
const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchProduct();
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
    </>
  );
}

export default App;
