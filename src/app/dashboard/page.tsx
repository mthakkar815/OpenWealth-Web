"use client"; // Mark this as a client component
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

// Components
import CryptoAssetCard from "@components/CryptoAssetCard";
import PortfolioSummary from "@components/PortfolioSummary";
import LanguageSwitcher from "@components/LanguageSwitcher";

// Models
import { Coin } from "@models/Coin";
import { Asset } from "@models/Asset";

// Axios & 3rd Party
import { getMyPortfolioData } from "@api/ApiService";

// Store & Reducers
import { RootState } from "@store/store";
import { addAsset } from "@store/portfolioSlice";
import { handleError } from "@api/handleError";
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

// Main Page component
const DashboardPage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const router = useRouter();

  const assets: Asset[] = useSelector(
    (state: RootState) => state.portfolioReducer.assets
  );
  const appLanguage: string = useSelector(
    (state: RootState) => state.languageReducer.appLanguage
  );

  // Function to fetch crypto assets
  useEffect(() => {
    const fetchCryptoAssets = async () => {
      try {
        const response = await getMyPortfolioData("bitcoin,ethereum");
        if (response?.status && response?.data) {
          const data: Coin[] = response?.data.data;

          const assets: Asset[] = data.map((coin: Coin) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            price: coin.current_price,
            change: coin.price_change_percentage_24h,
            holdings: 1,
          }));

          assets.forEach((item: Asset) => {
            dispatch(addAsset(item));
          });
        } else {
          handleError(response.error);
        }
      } catch (error) {
        handleError(error);
      }
    };

    fetchCryptoAssets();

    i18n.changeLanguage(appLanguage);
  }, [dispatch, appLanguage, i18n]);

   // Navigate to the dashboard page when the button is clicked
   const navigateToDashboard = () => {
    router.push("/home");
  };

  return (
    <main>
      {/* Main section with portfolio and assets */}
      <section
        style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
        aria-labelledby="portfolioSummary"
        role="region"
      >
        <StyledButton onClick={navigateToDashboard}>Go to Home</StyledButton>
        <LanguageSwitcher />
        <PortfolioSummary />

        {/* Make the list of assets accessible */}
        <div role="list" aria-labelledby="portfolioSummary">
          {assets?.map((asset: Asset) => (
            <div key={asset.id} role="listitem">
              <CryptoAssetCard
                name={asset.name}
                symbol={asset.symbol}
                price={asset.price}
                change={asset.change}
                holdings={asset.holdings}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;