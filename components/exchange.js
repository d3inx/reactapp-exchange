import { useContext, useState } from "react";
import { AppContext } from "../pages/index";
import MyListbox from "./items/listBox";

const Exchange = () => {
    const appContext = useContext(AppContext)
    const {currency} = appContext 
    const [exchangeFrom , setExchangeFrom] = useState(1)
    const [exchangeTo , setExchangeTo] = useState(1027)
    const [selectedFrom, setSelectedFrom] = useState(currency.coins[0].name)
    const [selectedTo, setSelectedTo] = useState(currency.coins[1].name)
    const [From , setFrom] = useState({value : 0 , name : 'Bitcoin'})
    const [To , setTo] = useState({value : 0 , name : 'Ethereum'})


    const inputExchange = (e) => {
      const fromItem = currency.coins.find(item => item.id === exchangeFrom)
      const toItem = currency.coins.find(item => item.id === exchangeTo)
      let result = (fromItem.quote.USD.price * e.target.value) / (toItem.quote.USD.price * 1)

      setFrom({value :  e.target.value , name : fromItem.symbol })
      setTo({value :  result , name : toItem.symbol })
      console.log(fromItem,toItem);
    }
    const changeHandler = () => {
      const fromItem = currency.coins.find(item => item.id === exchangeFrom)
      const toItem = currency.coins.find(item => item.id === exchangeTo)
      let result = (toItem.quote.USD.price * From.value) / (fromItem.quote.USD.price * 1)
      setFrom(prevState => {
        console.log(prevState);
        return({
          value : prevState.value,
          name : To.name
        })
      })
      setTo(prevState => {
        console.log(result);
        return({
          value : result,
          name : From.name
        })
      })
      setExchangeFrom(exchangeTo);
      setExchangeTo(exchangeFrom);
      setSelectedFrom(selectedTo)
      setSelectedTo(selectedFrom)
    }
  return (
    <div className="">
      <div className="">Exchange</div>
      <div className="exchange-cards flex justify-around items-center">
        <div className="w-1/3 bg-white p-4 rounded-3xl  flex flex-col items-center">
          <div className="flex flex-row w-full items-center justify-between">
            <MyListbox setExchangeFrom={setExchangeFrom} selectedFrom={selectedFrom} setSelectedFrom={setSelectedFrom}/>
            <img
              className="w-20 h-20 rounded-full"
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${exchangeFrom}.png`}
              alt=""
            />
          </div>
          <input type="number" className="w-2/3 h-12 font-bold text-2xl outline-none bg-slate-200" onChange={e => inputExchange(e)} />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={changeHandler} className="h-12 w-12 cursor-pointer text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <div className="w-1/3 bg-white p-4 rounded-3xl  flex flex-col items-center">
          <div className="flex flex-row w-full items-center justify-between">
          <MyListbox setExchangeTo={setExchangeTo} selectedTo={selectedTo} setSelectedTo={setSelectedTo}/>
            <img
              className="w-20 h-20 rounded-full"
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${exchangeTo}.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="exchange-result flex justify-center">
            <div className=" w-1/2 bg-white rounded-3xl mt-8 p-12 flex justify-center">
                <div className='font-bold text-2xl self-center'>{From.value !== undefined ? `${From.value} ${From.name}` : '---'}</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className='font-bold text-2xl self-center'>{To.value !== undefined ? `${To.value} ${To.name}` : '---'}</div>
            </div>
      </div>
    </div>
  );
};

export default Exchange;
