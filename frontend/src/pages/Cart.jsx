import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/reducers/cartSlice";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Correctly initialize useNavigate
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn("Your cart is empty!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      navigate("/checkout"); // Navigate to checkout
    }
  };

  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#f4f4f9",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
          textAlign: "left",
          color: "#333",
        }}
      >
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", color: "#555" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: 3,
                    padding: "15px",
                    borderRadius: "12px",
                    marginBottom: "15px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 100, borderRadius: "8px" }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1, marginLeft: "20px" }}>
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#888", marginTop: "5px" }}
                    >
                      Price: ${Number(item.price).toFixed(2)}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        marginTop: "5px",
                        color: "#444",
                      }}
                    >
                      Quantity: {item.quantity}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <IconButton
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      color="primary"
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      color="primary"
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => dispatch(removeItem(item.id))}
                      color="error"
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </Box>
                </Card>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  boxShadow: 3,
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  position: "sticky",
                  top: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: "15px" }}
                >
                  Order Summary
                </Typography>
                <Divider sx={{ marginBottom: "15px" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "#555", marginBottom: "10px" }}
                >
                  Total Items: {cartItems.length}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Total: ${total.toFixed(2)}
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "20px",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
          <ToastContainer />
        </>
      )}
    </Box>
  );
};

export default Cart;
