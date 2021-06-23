import { useState } from 'react';
import CurrencyInput from "./components/CurrencyInput";
import PlusIcon from './plus.png'

import classes from './App.module.scss';

function App() {
  const [globalInputId, setGlobalInputId] = useState(0)
  const [fromElements, setFromElements] = useState([
    {
      id: globalInputId,
      defaultCurrency: 'USD',
      value:"" ,
      toElements: [
        {
          defaultCurrency: 'UZD',
          value: "",
        }
      ]
    }
  ]);

  const addFromElement = () => {
    setFromElements(oldElements => [
      ...oldElements,
      {
        id: globalInputId + 1,
        defaultCurrency: 'USD',
        value: "",
        toElements: [
          {
            defaultCurrency: 'UZS',
            value: "",
          }
        ]
      }
    ])
    setGlobalInputId(globalInputId+1);
  }

  const addToElement = (id) => {
    setFromElements(oldElements => {
      let changedEl = oldElements.find(oldEl => oldEl.id == id);
      changedEl.toElements.push({
        defaultCurrency: 'UZS',
        value: "",
      })
      return [
        ...oldElements
      ]
    })
  }

  const onValueChange = (id, newValue) => {
    setFromElements(oldElements => {
      let changedEl = oldElements.find(oldEl => oldEl.id == id);
      changedEl.toElements.forEach(item => {
        item.value = newValue
      })
      return [
        ...oldElements
      ]
    })
  }

  const onCurrencyChange = (newValue) => {
    console.log(newValue)
  }


  return (
    <div className="App">
      <h1>Hello world</h1>
      
      {
        fromElements.map((item) => (
          <div className={classes.currencyRow} key={item.id}>
            <CurrencyInput
              id={item.id}
              defaultCurrency={item.defaultCurrency}
              value={item.value}
              onValueChange={onValueChange}
              onCurrencyChange={onCurrencyChange}
              setGlobalInputId={setGlobalInputId}
                globalInputId={globalInputId}
            />
            <h1>=</h1>
            {
              item.toElements.map((toElement, key) => (
                <CurrencyInput
                setGlobalInputId={setGlobalInputId}
                globalInputId={globalInputId}
                   fromElements={fromElements}
                  id={item.id}
                  key={key}
                  defaultCurrency={toElement.defaultCurrency}
                  value={toElement.value}
                  onValueChange={onValueChange}
                  onCurrencyChange={onCurrencyChange}
                />
              ))
            }
            
            <img src={PlusIcon} className={classes.plusTo} width="25px" onClick={() => addToElement(item.id)} alt="" />
          </div>
        ))
      }

      <img className={classes.plusForm} src={PlusIcon} width="25px" onClick={addFromElement} alt="" />
    </div>
  );
}

export default App;
