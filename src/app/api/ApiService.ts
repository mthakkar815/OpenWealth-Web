// Constants
import { Coin } from "@models/Coin";
import apiClient from "./API";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getMyPortfolioData = async (payload: string) => {
  try {
    const response = await apiClient.get<Coin[]>(
      `${BASE_URL}/coins/markets?vs_currency=usd&ids=${payload}`
    );
    return { status: true, data: response };
  } catch (error) {
    return { status: false, error: error };
  }
};