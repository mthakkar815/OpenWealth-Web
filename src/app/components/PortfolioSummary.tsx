"use client";

import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Redux
import { useSelector } from "react-redux";
import { Asset } from "@models/Asset";
import { RootState } from "@store/store";

// Styled Components
const Summary = styled.section`
  background: #0070f3;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    outline: 2px solid #ffffff; /* Highlight when focused */
  }
`;

const SummaryContent = styled.div`
  h2 {
    margin: 0;
    font-size: 2rem;
  }
  p {
    margin: 10px 0 0 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

// Main
const PortfolioSummary = () => {
  const { t } = useTranslation();
  const assets: Asset[] = useSelector(
    (state: RootState) => state.portfolioReducer.assets
  );

  // Calculate total portfolio value
  const totalValue = assets.reduce((acc, asset) => {
    return acc + asset.price * asset.holdings; // Multiply price by holdings
  }, 0);

  return (
    <Summary tabIndex={0} role="region" aria-labelledby="portfolioSummaryTitle">
      <SummaryContent>
        <h2 id="portfolioSummaryTitle">{t("portfolio_value")}</h2>
        <p aria-live="polite" aria-label={`${t("total_value")}: $${totalValue.toFixed(2)}`}>
          ${totalValue.toFixed(2)}
        </p>
      </SummaryContent>
    </Summary>
  );
};

export default PortfolioSummary;