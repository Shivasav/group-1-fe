// src/pages/Favorites.jsx
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductCard from "../components/cards/ProductCard";

const Container = styled.div`
  padding: 40px;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 40px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites?.items || []); // Safely access `items`

  return (
    <Container>
      <Title>Your Favorites</Title>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet!</p>
      ) : (
        <ProductsGrid>
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      )}
    </Container>
  );
};

export default Favorites;
