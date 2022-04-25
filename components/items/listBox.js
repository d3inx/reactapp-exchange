import {  useEffect, useLayoutEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { AppContext } from '../../pages'
import { useContext } from 'react/cjs/react.development'
//import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'



export default function MyListbox(props) {
    const appContext = useContext(AppContext)
    const {currency} = appContext
    const {setExchangeFrom , setExchangeTo , selectedFrom , setSelectedFrom , selectedTo , setSelectedTo } = props
    


    const ExchangeData = e => {
      const coinId = currency.coins.find(item => item.name === e)
      console.log(coinId , e);
      setExchangeTo === undefined ? setExchangeFrom(coinId.id) : setExchangeTo(coinId.id)
      selectedFrom !== undefined
      ? setSelectedFrom(e) 
      : setSelectedTo(e)
    }

  return (
    <div className="w-1/4">
      <Listbox value={selectedFrom !== undefined ? selectedFrom : selectedTo} onChange={e => ExchangeData(e)}>
        <div className="relative mt-1">
          <Listbox.Button className="relative flex w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedFrom !== undefined ? selectedFrom : selectedTo}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
            </span>
          </Listbox.Button>
          
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {currency.coins.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active , selected }) =>
                    `cursor-default select-none relative py-2 px-4 ${
                      selected ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                    }`
                  }
                  value={person.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}
