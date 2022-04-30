import { createContext } from "react";
import { useEffect, useState } from "react";
import Exchange from "../components/exchange";
import axios from "axios";
import CoinsList from "../components/coinsList";

export const getServerSideProps = async () => {
  const responsiveLatest = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );
  return {
    props : {
      coinsData : responsiveLatest.data
    }
  }
  
};

export const AppContext = createContext();

export default function Main({coinsData}) {
  const [currency, setCurrency] = useState(null);
  const [value, setValue] = useState([0, 1]);
  const [maxVal, setMaxVal] = useState(0);

  useEffect(() => {
    let val = 0;
    setCurrency({ coins: coinsData });
    coinsData.map((item) => {
      item.current_price > val ? (val = Math.round(item.current_price)) : null;
    });
    setMaxVal(val + 1)
    setValue([0, val + 1]);
  }, []);
  return (
    <AppContext.Provider value={{ currency, setCurrency }}>
      {currency !== null ? (
        <div className="container mx-auto mt-40 sm:text-sm md:text-base lg:text-lg">
          <Exchange />
          <CoinsList value={value} maxVal={maxVal} />
        </div>
      ) : (
        ""
      )}
    </AppContext.Provider>
  );
}
