import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShopListing from "./pages/ShopListing";
import Home from "./pages/Home";
import { useState } from "react";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Authentication from "./pages/Authentication";
import Checkout from "./pages/Checkout";

import { useDispatch, useSelector } from "react-redux";
import { Favorite } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const { open, message, severity } = useSelector((state) => state.user);
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar setOpenAuth={setOpenAuth} currentUser={currentUser} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            {/* Conditional Route for Shop */}
            <Route
              path="/shop"
              element={currentUser ? <ShopListing /> : <Navigate to="/" />}
            />
            {/* Conditional Route for Cart */}
            <Route
              path="/cart"
              element={currentUser ? <Cart /> : <Navigate to="/" />}
            />
            <Route path="/checkout" element={<Checkout />} /> {/* Checkout */}
            {/* Other Routes */}
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/shop/:id" element={<ShopListing />} />
          </Routes>

          {openAuth && (
            <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
