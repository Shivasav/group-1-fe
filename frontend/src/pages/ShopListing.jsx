import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/reducers/favoritesSlice";
import { addToCart } from "../redux/reducers/cartSlice";
import ProductCard from "../components/cards/ProductCard";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const Container = styled.div`
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f3f4f6, #ffffff);
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  align-items: center;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  width: 100%;
  max-width: 400px;
  &:focus {
    border-color: #4caf50;
  }
`;

const SortSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #4caf50;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  margin-bottom: 200px;
  max-width: 1400px;
`;

const CardWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const FavoriteIconContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(255, 100, 100, 0.9);
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 0 0 12px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.02);
  }

  &:active {
    background-color: #3e8e41;
    transform: scale(1);
  }
`;

const initialProducts = [
  {
    id: 1,
    name: "Apple iPhone 16 Pro",
    price: 999,
    image: "/images/iphone-16-pro.jpg",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1299,
    image: "/images/dell-xps-15.jpg",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4 Headphones",
    price: 349,
    image: "/images/sony-wh-1000xm4.jpg",
  },
  {
    id: 4,
    name: "Apple Watch Series 10",
    price: 399,
    image: "/images/apple-watch-series-10.jpg",
  },
  {
    id: 5,
    name: "Samsung QLED 4K TV",
    price: 1199,
    image: "/images/samsung-qled-tv.jpg",
  },
  {
    id: 6,
    name: "JBL Flip 5 Bluetooth Speaker",
    price: 119,
    image: "/images/jbl-flip-5.jpg",
  },
  {
    id: 7,
    name: "PlayStation 5",
    price: 499,
    image: "/images/playstation-5.jpg",
  },
  {
    id: 8,
    name: "iPad Pro 11-inch",
    price: 799,
    image: "/images/ipad-pro-11.jpeg",
  },
  {
    id: 9,
    name: "Canon EOS R5 Camera",
    price: 3899,
    image: "/images/canon-eos-r5.jpeg",
  },
];

const ShopListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = (productId) =>
    favorites.some((item) => item.id === productId);

  const handleToggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedAndFilteredProducts = initialProducts
    .filter((product) => product.name.toLowerCase().includes(searchQuery))
    .sort((a, b) => {
      switch (sortOrder) {
        case "low-to-high":
          return a.price - b.price;
        case "high-to-low":
          return b.price - a.price;
        case "a-z":
          return a.name.localeCompare(b.name);
        case "z-a":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <Container>
      <Header>
        <Title>Explore Our Products</Title>
        <Controls>
          <SearchInput
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <SortSelect value={sortOrder} onChange={handleSort}>
            <option value="default">Sort By</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="a-z">Name: A to Z</option>
            <option value="z-a">Name: Z to A</option>
          </SortSelect>
        </Controls>
      </Header>
      <ProductsGrid>
        {sortedAndFilteredProducts.map((product) => (
          <CardWrapper key={product.id}>
            <FavoriteIconContainer
              onClick={() => handleToggleFavorite(product)}
            >
              {isFavorite(product.id) ? (
                <Favorite style={{ color: "red" }} />
              ) : (
                <FavoriteBorder />
              )}
            </FavoriteIconContainer>
            <ProductCard product={product} />
            <AddToCartButton onClick={() => handleAddToCart(product)}>
              Add to Cart
            </AddToCartButton>
          </CardWrapper>
        ))}
      </ProductsGrid>
    </Container>
  );
};

export default ShopListing;
