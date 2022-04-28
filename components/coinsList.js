import { useContext, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AppContext } from "../pages";

const CoinsList = (props) => {
  const appContext = useContext(AppContext  );
  const { currency, setCurrency } = appContext;
  const { searchTemp, value } = props;

  const [sortP, setSortP] = useState(1);

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
      console.log(newState);

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
      console.log(newState);
      return {
        coins: newState,
      };
    });
  };

  return (
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
              onClick={() => sort("now")}
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 cursor-pointer"
              onClick={() => sort("24h")}
            >
              24h %
            </th>
            <th
              scope="col"
              className="px-6 py-3  cursor-pointer"
              onClick={() => sort("7d")}
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
                return (
                  value[0] < item.current_price && item.current_price < value[1]
                );
              } else if (
                item.name.toLowerCase().includes(searchTemp.toLowerCase())
              ) {
                return (
                  value[0] < item.current_price && item.current_price < value[1]
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
                  <img
                    className="h-8 w-8 mx-2 rounded-full ring-2 ring-white"
                    src={item.image}
                  />
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
                    Math.round(item.price_change_percentage_24h * 100) / 100 < 0
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
  );
};

export default CoinsList;
