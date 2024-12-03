import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout, Home, Login, Product, Register } from "./pages";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Specify weight
import Payment from "./pages/payment";
import OrderPlaced from "./pages/orderPlaced";
import Address from "./pages/address";
import Profile from "./pages/profile";

import { Toaster } from "react-hot-toast";
import AuthGuard from "./AuthGuard";

function App() {
  return (
    <>
     <Toaster />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<AuthGuard><Home /></AuthGuard>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<AuthGuard><Product /></AuthGuard>} />
          <Route path="/checkout" element={<AuthGuard><Checkout /></AuthGuard>}/>
          <Route path="/payment" element={<AuthGuard><Payment /></AuthGuard>} />
          <Route path="/orderPlaced" element={<AuthGuard><OrderPlaced /></AuthGuard>} />
          <Route path="/address" element={<AuthGuard><Address /></AuthGuard>} />
          <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
