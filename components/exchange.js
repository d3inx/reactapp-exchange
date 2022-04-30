import { useContext, useState } from "react";
import { AppContext } from "../pages/index";
import MyListbox from "./items/listBox";
import Image from 'next/image'

const Exchange = () => {
    const appContext = useContext(AppContext)
    const {currency} = appContext

    const [exchangeFromm , setExchangeFromm] = useState({
      coinId : "bitcoin",
      selectedCoin : currency.coins[0].name,
      coinImage : currency.coins[0].image,
      inputValue : 0,
      result : {value : 0 , name : 'btc'}
    })
    const [exchangeToo , setExchangeToo] = useState({
      coinId : "ethereum",
      selectedCoin : currency.coins[1].name,
      coinImage : currency.coins[1].image,
      result : {value : 0 , name : 'eth'}
    })


    const inputExchange = (e) => {
      const fromItem = currency.coins.find(item => item.id === exchangeFromm.coinId)
      const toItem = currency.coins.find(item => item.id === exchangeToo.coinId)
      let result = (fromItem.current_price * e.target.value) / (toItem.current_price * 1)
      setExchangeFromm(prevState => ({
        ...prevState,
        inputValue : e.target.value,
        result : { value :  e.target.value == '' ? 0 : e.target.value , name : fromItem.symbol }
      })
        
      )
      setExchangeToo(prevState => ({
        ...prevState,
        result : {value :  result , name : toItem.symbol }
      }))
    }
    const changeHandler = () => {
      const fromItem = currency.coins.find(item => item.id === exchangeFromm.coinId)
      const toItem = currency.coins.find(item => item.id === exchangeToo.coinId)
      let result = (toItem.current_price * exchangeFromm.result.value) / (fromItem.current_price * 1)
      setExchangeFromm(prevState => ({
        ...prevState,
          inputValue : exchangeFromm.inputValue,
          coinImage : exchangeToo.coinImage,
          coinId : exchangeToo.coinId,
          selectedCoin : exchangeToo.selectedCoin,
          result : { value :  exchangeFromm.result.value , name : exchangeToo.result.name }
      }))
      setExchangeToo(prevState => ({
        ...prevState,
          coinImage : exchangeFromm.coinImage,
          coinId : exchangeFromm.coinId,
          selectedCoin : exchangeFromm.selectedCoin,
          result : {value :  result , name : exchangeFromm.result.name }
      }))
    }
  return (
    <div className="">
      <div className="text-5xl text-white font-bold mb-8">Exchange</div>
      <div className="exchange-cards px-4 flex flex-col md:flex-row  justify-around items-center">
        <div className="w-full md:w-1/3 bg-white p-4 rounded-3xl  flex flex-col items-center">
          <div className="flex flex-row w-full items-center justify-between">
            <MyListbox exchangeFromm={exchangeFromm} exchangeToo={exchangeToo} setExchangeFromm={setExchangeFromm} setExchangeToo={setExchangeToo} fromListBox={'from'}/>
            <div className="w-12 h-12 lg:w-16 lg:h-16">
              <Image
                className=" rounded-full"
                src={exchangeFromm.coinImage}
                layout='responsive'
                width={64}
                height={64}
                alt=""
              />
            </div>
          </div>
          <input type="number" className="w-2/3 h-12 mt-4 font-bold text-2xl outline-none bg-slate-200" onChange={e => inputExchange(e)} />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={changeHandler} className="rotate-90 my-4 md:rotate-0 h-12 w-12 cursor-pointer text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <div className="w-full md:w-1/3 bg-white p-4 rounded-3xl  flex flex-col items-center">
          <div className="flex flex-row w-full items-center justify-between">
          <MyListbox exchangeFromm={exchangeFromm} exchangeToo={exchangeToo} setExchangeFromm={setExchangeFromm} setExchangeToo={setExchangeToo}/>
          <div className="w-12 h-12 lg:w-16 lg:h-16">
              <Image
                className=" rounded-full"
                src={exchangeToo.coinImage}
                layout='responsive'
                width={64}
                height={64}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="exchange-result flex justify-center tabular-nums break-all">
            <div className=" w-full md:w-1/2 bg-white rounded-3xl mt-8 p-12 flex flex-col md:flex-row justify-center items-center">
                <div className='w-full md:w-1/3 font-bold text-2xl self-center text-center'>{exchangeFromm.result.value !== undefined ? `${exchangeFromm.result.value} ${exchangeFromm.result.name}` : '---'}</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 md:rotate-0 h-12 w-12 m-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className='w-full md:w-1/3 font-bold text-2xl self-center text-center'>{exchangeToo.result.value !== undefined ? `${Math.round(exchangeToo.result.value * 100) / 100} ${exchangeToo.result.name}` : '---'}</div>
            </div>
      </div>
    </div>
  );
};

export default Exchange;
