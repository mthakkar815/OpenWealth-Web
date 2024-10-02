"use client";

import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Styled Components
const Card = styled.article`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  outline: none;

  &:focus {
    outline: 2px solid #007bff; /* Highlight when focused */
  }
`;

const Info = styled.div`
  h3 {
    margin: 0;
  }
`;

const Price = styled.div<{ $change: number }>`
  text-align: right;
  color: ${({ $change }) => ($change > 0 ? "green" : "red")};
`;

// Types
type CryptoAssetCardProps = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  holdings: number;
};

// Main
const CryptoAssetCard = ({
  name,
  symbol,
  price,
  change,
  holdings,
}: CryptoAssetCardProps) => {
  const { t } = useTranslation();

  return (
    <Card tabIndex={0} aria-labelledby={`${name}-title`} role="article">
      <Info>
        <h3 id={`${name}-title`}>
          {name} ({symbol.toUpperCase()})
        </h3>
        <p>
          {t("holdings")}: {holdings} {symbol.toUpperCase()}
        </p>
      </Info>
      <Price $change={change} aria-live="polite">
        <p aria-label={t("price")}>
          ${price.toFixed(2)}
        </p>
        <p aria-label={`${t("change")}: ${change.toFixed(2)}%`}>
          {t("change")}: {change.toFixed(2)}%
        </p>
        <p aria-label={`${t("total_value")}: ${(holdings * price).toFixed(2)}`}>
          {t("total_value")}: ${(holdings * price).toFixed(2)}
        </p>
      </Price>
    </Card>
  );
};

export default CryptoAssetCard;