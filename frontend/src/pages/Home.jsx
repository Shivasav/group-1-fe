import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderImage from "../utils/Images/Header.png";

import category1 from "../utils/Images/category1.png";
import phones from "../utils/Images/phones.png";
import ps5 from "../utils/Images/ps5.png";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const Img = styled.img`
  width: 90%;
  height: 700px;
  object-fit: cover;
  max-width: 1200px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`;

const Home = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Img
          src={HeaderImage}
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />
        <h1 style={{ margin: "20px 0", fontSize: "2.5rem", color: "#333" }}>
          Welcome to our Store
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Find the best products here!
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#3f51b5",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </Section>

      {/* Shop by Categories Section */}
      <Section
        style={{
          padding: "40px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Title>Shop by Categories</Title>
        <CardWrapper
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {/* Example category cards */}
          <div
            style={{ padding: "20px", flex: "1 1 30%", textAlign: "center" }}
          >
            <img
              src={category1}
              alt="Laptops"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>Laptops</p>
          </div>
          <div
            style={{ padding: "20px", flex: "1 1 30%", textAlign: "center" }}
          >
            <img
              src={phones}
              alt="Smartphones"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>Smartphones</p>
          </div>
        </CardWrapper>
      </Section>

      {/* Bestseller Section */}
      <Section
        style={{
          padding: "40px",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <Title center>Our Bestsellers</Title>
        <CardWrapper
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {/* Example product cards */}
          <div
            style={{ padding: "20px", flex: "1 1 30%", textAlign: "center" }}
          >
            <img
              src={category1}
              alt="Product 1"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>Latest Laptops</p>
          </div>
          <div
            style={{ padding: "20px", flex: "1 1 30%", textAlign: "center" }}
          >
            <img
              src={phones}
              alt="Product 2"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>Latest Smartphones </p>
          </div>
          <div
            style={{ padding: "20px", flex: "1 1 30%", textAlign: "center" }}
          >
            <img
              src={ps5}
              alt="Product 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>Playstation 5</p>
          </div>
        </CardWrapper>
      </Section>

      {/* Testimonials Section */}
      <Section
        style={{
          padding: "40px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Title>What Our Customers Say</Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {/* Example testimonials */}
          <div style={{ flex: "1 1 30%", padding: "20px" }}>
            <p>"Great products and fast delivery!"</p>
            <p>-Kashish Benani</p>
          </div>
          <div style={{ flex: "1 1 30%", padding: "20px" }}>
            <p>"Excellent customer service!"</p>
            <p>- George</p>
          </div>
          <div style={{ flex: "1 1 30%", padding: "20px" }}>
            <p>"I love shopping here for all my needs!"</p>
            <p>- Mike Johnson</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Section
        style={{
          backgroundColor: "#3f51b5",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <p>&copy; 2024 Ecommerce Paradise. All rights reserved.</p>
      </Section>
    </Container>
  );
};

export default Home;
