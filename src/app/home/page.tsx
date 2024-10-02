"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// Styled button
const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const HomePage = () => {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.back();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Another Page</h1>
      <StyledButton onClick={navigateToDashboard}>Go Back</StyledButton>
    </div>
  );
};

export default HomePage;
