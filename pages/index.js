import { createContext } from "react";
import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Exchange from "../components/exchange";
import axios from "axios";
import CoinsList from "../components/coinsList";
import Loading from "../components/items/loading";

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
  const [searchTemp, setSearchTemp] = useState("");
  const [value, setValue] = useState([0, 1]);

  useEffect(() => {
    let val = 0;
    setCurrency({ coins: coinsData });
    coinsData.map((item) => {
      item.current_price > val ? (val = Math.round(item.current_price)) : null;
    });
    setValue([0, val + 1]);
  }, []);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppContext.Provider value={{ currency, setCurrency }}>
      {currency !== null ? (
        <div className="container mx-auto mt-40">
          <Exchange />
          <div className="flex flex-row mt-32">
            <input
              type="text"
              id="search"
              onChange={(e) => setSearchTemp(e.target.value)}
              className="bg-gray-50 border h-12 border-gray-300 w-1/6 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search ..."
            />
            <div
              style={{
                margin: "auto",
                display: "block",
              }}
              className="w-1/4 text-white font-bold"
            >
              <div>${value[0]}</div>
              <Slider
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
                min={0}
                max={value[1]}
              />
              <div className="text-right">${value[1]} </div>
            </div>
          </div>
          <CoinsList searchTemp={searchTemp} value={value} />
        </div>
      ) : (
        ""
      )}
    </AppContext.Provider>
  );
}
