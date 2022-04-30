import { useContext, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AppContext } from "../pages";
import Image from "next/image";
import Slider from "@mui/material/Slider";

const CoinsList = ({value}) => {
  const appContext = useContext(AppContext);
  const { currency, setCurrency } = appContext;

  const [sortP, setSortP] = useState(1);
  const [searchTemp, setSearchTemp] = useState("");

  const sort = (sortType) => {
    setCurrency((prevState) => {
      let newState;
      if (sortType === "now") {
        sortP === 1
          ? (newState = prevState.coins.sort(
              (a, b) => b.current_price - a.current_price
            ))
          : (newState = prevState.coins.sort(
              (a, b) => a.current_price - b.current_price
            ));
      } else if (sortType === "24h") {
        sortP === 1
          ? (newState = prevState.coins.sort(
              (a, b) =>
                b.price_change_percentage_24h - a.price_change_percentage_24h
            ))
          : (newState = prevState.coins.sort(
              (a, b) =>
                a.price_change_percentage_24h - b.price_change_percentage_24h
            ));
      } else if (sortType === "7d") {
        sortP === 1
          ? (newState = prevState.coins.sort(
              (a, b) =>
                b.price_change_percentage_7d_in_currency -
                a.price_change_percentage_7d_in_currency
            ))
          : (newState = prevState.coins.sort(
              (a, b) =>
                a.price_change_percentage_7d_in_currency -
                b.price_change_percentage_7d_in_currency
            ));
      }
      sortP === 1 ? setSortP(0) : setSortP(1);

      return {
        coins: newState,
      };
    });
  };
  const sortName = async () => {
    await setCurrency((prevState) => {
      const newState =
        sortP === 1
          ? prevState.coins.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            )
          : prevState.coins.sort((a, b) =>
              a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            );
      sortP === 1 ? setSortP(0) : setSortP(1);
      return {
        coins: newState,
      };
    });
  };
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex flex-row items-center mt-32">
        <input
          type="text"
          id="search"
          onChange={(e) => setSearchTemp(e.target.value)}
          className="bg-gray-50 border h-12 border-gray-300 w-1/3 lg:w-1/6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            max={maxVal}
          />
          <div className="text-right">${value[1]} </div>
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
                <div className="flex justify-between">
                  <span>name</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => sort("now")}
              >
                <div className="flex justify-between">
                  <span>Price</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => sort("24h")}
              >
                <div className="flex justify-between">
                  <span>24h %</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3  cursor-pointer"
                onClick={() => sort("7d")}
              >
                <div className="flex justify-between">
                  <span>7d %</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
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
                  return (
                    value[0] < item.current_price &&
                    item.current_price < value[1]
                  );
                } else if (
                  item.name.toLowerCase().includes(searchTemp.toLowerCase())
                ) {
                  return (
                    value[0] < item.current_price &&
                    item.current_price < value[1]
                  );
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
                    <div className="w-10 h-10 mx-2">
                      <Image
                        className="rounded-full"
                        src={item.image}
                        layout="responsive"
                        width={64}
                        height={64}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <p>{item.name}</p>
                      <span className="text-base text-gray-400">
                        {item.symbol}
                      </span>
                    </div>
                  </th>

                  <td className="px-6 py-4">
                    $ {Math.round(item.current_price * 100) / 100}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      Math.round(item.price_change_percentage_24h * 100) / 100 <
                      0
                        ? `text-red-600`
                        : "text-green-600"
                    }`}
                  >
                    {Math.round(item.price_change_percentage_24h * 100) / 100}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      Math.round(
                        item.price_change_percentage_7d_in_currency * 100
                      ) /
                        100 <
                      0
                        ? `text-red-600`
                        : "text-green-600"
                    }`}
                  >
                    {Math.round(
                      item.price_change_percentage_7d_in_currency * 100
                    ) / 100}
                  </td>
                  <td className="px-6 py-4">
                    <Sparklines data={item.sparkline_in_7d.price}>
                      <SparklinesLine
                        color={
                          item.price_change_percentage_7d_in_currency < 0
                            ? "red"
                            : "green"
                        }
                      />
                    </Sparklines>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoinsList;
