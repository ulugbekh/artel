import { useRef } from 'react';

import classes from './CurrencyInput.module.scss';
import closeBtn from '../../red.png'

const CurreencyInput = ({defaultCurrency, value, onValueChange, onCurrencyChange,fromElements,setGlobalInputId, globalInputId, setFromElements, id}) => {
  const currencyRef = useRef(null);
  const valueRef = useRef(null);

  
  console.log(setGlobalInputId);
  return (
    <div className={classes.currencyInput}>
      <select
        name=""
        id=""
        defaultValue={defaultCurrency}
        onChange={() => onCurrencyChange(currencyRef.current.value)}
        ref={currencyRef}
      >
        <option value="USD">USD</option>
        <option value="UZS">UZS</option>
        <option value="RUB">RUB</option>
      </select>
      
      <input
        type="text"
        placeholder="Text"
        defaultValue={value}
        onKeyUp={() => onValueChange(id, valueRef.current.value)}
        ref={valueRef}
      />
      <a  className="closeBtn-link"><img className="closeBtn-icon"   width="25px" src={closeBtn} alt="" /></a>
    </div>
  )
}

export default CurreencyInput;