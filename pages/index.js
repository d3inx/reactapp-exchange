import { createContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Exchange from "../components/exchange";
import axios from "axios";


export const AppContext = createContext()

export default function SimpleMap() {
  const [currency, setCurrency] = useState();
  const [sortP, setSortP] = useState(1);
  const [searchTemp, setSearchTemp] = useState("");
  const [value, setValue] =  useState([0,1]);
  const [maxVal , setMaxVal] = useState(0);
  
    useEffect(() => {
    const fetchData = async () => {
      let responsiveLatest = await axios.get("https://cors-anywhere.herokuapp.com/pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",{
        headers: {
          'X-CMC_PRO_API_KEY': 'f1c47569-4aa6-4382-89bc-db86624786ad',
        }
      });
      const val = 0
      console.log(responsiveLatest);
      console.log(responsiveLatest);
      setCurrency({ coins: Object.values(responsiveLatest.data.data)});
      responsiveLatest.data.data.map(item => {
        item.quote.USD.price > val ? val = Math.round(item.quote.USD.price) : null
      })
      setMaxVal(val);
      setValue([0,val])
    };
    fetchData();
  }, []);
  const sortPrice = () => {
    setCurrency((prevState) => {
      const newState =
        sortP === 1
          ? prevState.coins.sort(
              (a, b) => b.quote.USD.price - a.quote.USD.price
            )
          : prevState.coins.sort(
              (a, b) => a.quote.USD.price - b.quote.USD.price
            );
      sortP === 1 ? setSortP(0) : setSortP(1);
      console.log(newState);
      return {
        coins: newState,
      };
    });
  };
  const sort24h = () => {
    setCurrency((prevState) => {
      const newState =
        sortP === 1
          ? prevState.coins.sort(
              (a, b) =>
                b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h
            )
          : prevState.coins.sort(
              (a, b) =>
                a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h
            );
      sortP === 1 ? setSortP(0) : setSortP(1);
      console.log(newState);
      return {
        coins: newState,
      };
    });
  };
  const sort7d = () => {
    setCurrency((prevState) => {
      const newState =
        sortP === 1
          ? prevState.coins.sort(
              (a, b) =>
                b.quote.USD.percent_change_7d - a.quote.USD.percent_change_7d
            )
          : prevState.coins.sort(
              (a, b) =>
                a.quote.USD.percent_change_7d - b.quote.USD.percent_change_7d
            );
      sortP === 1 ? setSortP(0) : setSortP(1);
      console.log(newState);
      return {
        coins: newState,
      };
    });
  };
  const sortName = (e) => {
    const compare = (a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        console.log("khar");
        return -1;
      }
      if (nameA > nameB) {
        console.log("gav");
        return 1;
      }
      console.log("boz");
      return 0;
    };
    setCurrency((prevState) => {
      const newState =
        sortP === 1
          ? prevState.coins.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            )
          : prevState.coins.sort((a, b) =>
              a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            );
      sortP === 1 ? setSortP(0) : setSortP(1);
      console.log(newState);
      return {
        coins: newState,
      };
    });
  };
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <AppContext.Provider value={{currency }}>
      {currency !== undefined ? (
        <div className="container mx-auto mt-40">
          <Exchange />
          <div className='flex flex-row mt-32'>
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
                width: "fit-content",
              }}
            >
              <Slider
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
                min={0}
                max={maxVal}
              />
              Your range of Price is between {value[0]} /- and {value[1]} /-
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={sortName}
                  >
                    name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={sortPrice}
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={sort24h}
                  >
                    24h %
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  cursor-pointer"
                    onClick={sort7d}
                  >
                    7d %
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last 7 days chart
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg font-bold tabular-nums">
                {currency.coins
                  .filter((item) => {
                    if (searchTemp === "") {
                      return value[0] < item.quote.USD.price && item.quote.USD.price < value[1];
                    } else if (
                      item.name.toLowerCase().includes(searchTemp.toLowerCase())
                    ) {
                      return value[0] < item.quote.USD.price && item.quote.USD.price < value[1];
                    }
                  })
                  .map((item, itemIdx) => (
                    <tr
                      className="border-b odd:bg-white even:bg-gray-50 "
                      key={itemIdx}
                    >
                      <th
                        scope="row"
                        className="flex flex-row items-center px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                      >
                        <img
                          className="h-8 w-8 mx-2 rounded-full ring-2 ring-white"
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
                        />
                        <div className="flex flex-col">
                          <p>{item.name}</p>
                          <span className="text-base text-gray-400">
                            {item.symbol}
                          </span>
                        </div>
                      </th>

                      <td className="px-6 py-4">
                        $ {Math.round(item.quote.USD.price * 100) / 100}
                      </td>
                      <td
                        className={`px-6 py-4 ${
                          Math.round(item.quote.USD.percent_change_24h * 100) /
                            100 <
                          0
                            ? `text-red-600`
                            : "text-green-600"
                        }`}
                      >
                        {Math.round(item.quote.USD.percent_change_24h * 100) /
                          100}
                      </td>
                      <td
                        className={`px-6 py-4 ${
                          Math.round(item.quote.USD.percent_change_7d * 100) /
                            100 <
                          0
                            ? `text-red-600`
                            : "text-green-600"
                        }`}
                      >
                        {Math.round(item.quote.USD.percent_change_7d * 100) /
                          100}
                      </td>
                      <td className="px-6 py-4">
                        <img
                          className={` ${
                            Math.round(item.quote.USD.percent_change_7d * 100) /
                              100 <
                            0
                              ? `hue-rotate-[300deg] contrast-[170%] saturate-[210%] brightness-75`
                              : "hue-rotate-[85deg]"
                          }`}
                          src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${item.id}.svg`}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </AppContext.Provider>
  );
}
