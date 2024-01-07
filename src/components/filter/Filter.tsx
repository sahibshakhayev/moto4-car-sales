
import React, { FunctionComponent, useState } from "react";
import Select from "react-select";

import styles from "./filter.module.css";
import { string } from "prop-types";

interface FilterProps {
  onApply: (filter: any) => void;
}


const Filter:FunctionComponent<FilterProps> = ({onApply}: FilterProps) => {
 

  const [status, setStatus] = useState("all");
  const [brand, setBrand] = useState(""); 
  const [model, setModel] = useState(""); 
  const [minPrice, setMinPrice] = useState(""); 
  const [maxPrice, setMaxPrice] = useState(""); 
  const [currency, setCurrency] = useState([]); 
  const [minYear, setMinYear] = useState(""); 
  const [maxYear, setMaxYear] = useState(""); 
  const [minVolume, setMinVolume] = useState(""); 
  const [maxVolume, setMaxVolume] = useState(""); 
  const [condition, setCondition] = useState([]); 

  
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    
    switch (name) {
      case "status":
        setStatus(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "model":
        setModel(value);
        break;
      case "minPrice":
        setMinPrice(value);
        break;
      case "maxPrice":
        setMaxPrice(value);
        break;
      case "currency":
        setCurrency(value);
        break;
      case "minYear":
        setMinYear(value);
        break;
      case "maxYear":
        setMaxYear(value);
        break;
      case "minVolume":
        setMinVolume(value);
        break;
      case "maxVolume":
        setMaxVolume(value);
        break;
      case "condition":
        setCondition(value);
        break;
      default:
        break;
    }
  };

  
  const handleSubmit = () => {
  
    const filter = {
      status,
      brand,
      model,
      minPrice,
      maxPrice,
      currency,
      minYear,
      maxYear,
      minVolume,
      maxVolume,
      condition,
    };
    onApply(filter);
  };

  const optionsBrands = [
    {id:0, value: 'porcshe', label: 'Porcshe' },
    {id:1, value: 'honda', label: 'Honda' },
    {id:2, value: 'toyota', label: 'Toyota' },
    {id:3, value: 'abarth', label: 'Abarth' },
    {id:4, value: 'mercedes', label: 'Mercedes' },
    {id:5, value: 'mustang', label: 'Mustang' },
    {id:6, value: 'changan', label: 'Changan' },
    {id:7, value: 'bmw', label: 'BMW' },
    {id:0, value: 'dodge', label: 'Dodge' }
  ]

  const optionsModels = [
    
  ]

  const optionsYears = [
    {id:0, value: '2013', label: '2013' },
    {id:1, value: '2014', label: '2014' },
    {id:2, value: '2015', label: '2015' },
    {id:3, value: '2016', label: '2016' },
    {id:4, value: '2017', label: '2017' },
    {id:5, value: '2018', label: '2018' },
    {id:6, value: '2019', label: '2019' },
    {id:7, value: '2020', label: '2020' },
    {id:8, value: '2021', label: '2021' },
    {id:9, value: '2022', label: '2022' },
  ]


  return (
    <div className={styles.filtercontainer}>
    <div className={styles.filter}>
    <div className={styles.switchfield}>
    <input type="radio" id="all-radio" name="status" value="all" onChange={handleChange}  defaultChecked />
    <label htmlFor="all-radio">Hamısı</label>
    <input type="radio" id="new-radio" name="status" value="new" onChange={handleChange} />
    <label htmlFor="new-radio">Yeni</label>
    <input type="radio" id="driven-radio" name="status" value="driven" onChange={handleChange} />
    <label htmlFor="driven-radio">Sürülmüş</label>
  </div>
        <div className={styles.selector}>
          <label htmlFor="brand" className={styles.label}>
            Marka
          </label>
          <Select options={optionsBrands} name="brand" placeholder={"Seçin"} onChange={(value, action) => handleChange({target: {name:action.name, value:value.value}})}
          styles={{
            indicatorsContainer: (state) => ({
              display: 'none',
            }),
            control: (state) => ({
              width:'252px'
            })
            
          }}
          classNames={{
            control: (state) => 
              state.isFocused ? styles.selectfocused + ' ' + styles.select : styles.select,
            option : (state) => 
            state.isFocused ? styles.optionfocused  + '  ' + styles.option : state.isSelected ? styles.optionselected  + '  ' + styles.option  : styles.option,



        }}
          />
          </div>
        <div className={styles.selector}>
          <label htmlFor="model" className={styles.label}>
            Model
          </label>
          <Select options={optionsModels} name="model" placeholder={"Seçin"} onChange={(value, action) => handleChange({target: {name:action.name, value:value.value}})}
          styles={{
            indicatorsContainer: (state) => ({
              display: 'none',
            }),
            control: (state) => ({
              width:'252px'
            })
            
          }}
          classNames={{
            control: (state) => 
              state.isFocused ? styles.selectfocused + ' ' + styles.select : styles.select,
            option : (state) => 
            state.isFocused ? styles.optionfocused  + '  ' + styles.option : state.isSelected ? styles.optionselected  + '  ' + styles.option  : styles.option,



        }}
          />
          
        </div>
        <div className={styles.range}>
          <label htmlFor="Price" className={styles.label}>
            Qiymət aralığı
          </label>
          <div className="inputs">
          <input
            id="minPrice"
            name="minPrice"
            type="number"
            value={minPrice}
            onChange={handleChange}
            className={styles.number}
            placeholder="Min"
          />
          <input
            id="maxPrice"
            name="maxPrice"
            type="number"
            value={maxPrice}
            onChange={handleChange}
            className={styles.number}
            placeholder="Max"
          />
        </div>
        </div>
        <div className={styles.checks}>
          <label htmlFor="currency" className={styles.label}>
            Pul vahidi
          </label>
          <div>
          <label className={styles.checkContainer}>AZN
          <input id="currency" name="currency" value={"azn"} type="checkbox" defaultChecked={currency.includes("AZN")}/>
          <span className={styles.checkmark}></span>
          </label>
          <label className={styles.checkContainer}>USD
          <input id="currency" name="currency" value={"usd"} type="checkbox" defaultChecked={currency.includes("USD")} />
          <span className={styles.checkmark}></span>
          </label>
          <label className={styles.checkContainer}>EURO
          <input id="currency" name="currency" value={"eur"} type="checkbox" defaultChecked={currency.includes("EURO")} />
          <span className={styles.checkmark}></span>
          </label>
          </div>
        </div>
        <div className={styles.range}>
          <label htmlFor="Year" className={styles.label}>
            İl aralığı
          </label>
          <div className={styles.inputs}>
          <Select options={optionsYears} name="minYear" placeholder={"Seçin"} onChange={(value, action) => handleChange({target: {name:action.name, value:value.value}})}
          styles={{
            indicatorsContainer: (state) => ({
              display: 'none',
            }),
            
          }}
          classNames={{
            control: (state) => 
              state.isFocused ? styles.selectfocused + ' ' + styles.select : styles.select,
            option : (state) => 
            state.isFocused ? styles.optionfocused  + '  ' + styles.option : state.isSelected ? styles.optionselected  + '  ' + styles.option  : styles.option,



        }}
          />

<Select options={optionsYears} name="maxYear" placeholder={"Seçin"} onChange={(value, action) => handleChange({target: {name:action.name, value:value.value}})}
          styles={{
            indicatorsContainer: (state) => ({
              display: 'none',
            }),

            
          }}
          classNames={{
            control: (state) => 
              state.isFocused ? styles.selectfocused + ' ' + styles.select : styles.select,
            option : (state) => 
            state.isFocused ? styles.optionfocused  + '  ' + styles.option : state.isSelected ? styles.optionselected  + '  ' + styles.option  : styles.option,



        }}
          />

        </div>
        </div>
        <div className={styles.range}>
          <label htmlFor="Volume" className={styles.label}>
            Həcm aralığı (Litr)
          </label>
          <div className="inputs">
          <input
            id="minVolume"
            name="minVolume"
            type="number"
            value={minVolume}
            onChange={handleChange}
            className={styles.number}
            placeholder="Min"
          />
          <input
            id="maxVolume"
            name="maxVolume"
            type="number"
            value={maxVolume}
            onChange={handleChange}
            className={styles.number}
            placeholder="Max"
          />
        </div>
        </div>

      <div className={styles.checks}>
          <label htmlFor="condition" className={styles.label}>
            Maşın vəziyyət
          </label>
          <div>
          <label className={styles.checkContainer}>Vuruğu var
          <input id="condition" name="condition" value={"Vuruğu var"} type="checkbox" defaultChecked={currency.includes("Vuruğu var")}/>
          <span className={styles.checkmark}></span>
          </label>
          <label className={styles.checkContainer}>Rənglənib
          <input id="condition" name="condition" value={"Rənglənib"} type="checkbox" defaultChecked={currency.includes("Rənglənib")} />
          <span className={styles.checkmark}></span>
          </label>
          <label className={styles.checkContainer}>Qəzalı
          <input id="condition" name="condition" value={"Qəzalı"} type="checkbox" defaultChecked={currency.includes("Qəzalı")} />
          <span className={styles.checkmark}></span>
          </label>
          </div>
        </div>
      
      <div className={styles.button}>
        <button onClick={handleSubmit} className={styles.apply}>
          Göstər
        </button>
      </div>
      </div>
    </div>
  );
};

export default Filter;
