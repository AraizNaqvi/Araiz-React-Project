import React from 'react';
import { useId } from "react";


 function InputBox({
    label, //To Display From or To
    amount, //What amount to be displayed
    onAmountChange, //Notices when amount is changed
    onCurrencyChange, //Notices currency change
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
   
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    value={amount}
                    disabled={amountDisabled}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    
                    {currencyOptions.map((curr) => (
                        <option key={curr} value={curr}>
                            {curr}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
