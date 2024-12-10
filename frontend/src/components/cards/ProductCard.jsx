// src/components/cards/ProductCard.jsx
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import { removeFromFavorites } from "../../redux/reducers/favoritesSlice";
import { useLocation } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #007bff;
  margin: 5px 0;
`;

const Actions = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;

const ActionButton = styled.button`
  background-color: ${({ bg }) => bg || "#007bff"};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#0056b3"};
  }
`;

const ProductCard = ({ product, isFavorite }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(product));
  };

  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
      <Actions>
        {isFavorite && (
          <ActionButton
            bg="#dc3545"
            hoverBg="#a71d2a"
            onClick={handleRemoveFromFavorites}
          >
            Remove from Favorites
          </ActionButton>
        )}
      </Actions>
    </Card>
  );
};

export default ProductCard;
