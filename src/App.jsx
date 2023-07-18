import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import {formatearDinero, calcular, calcularMesualidad} from "./helpers/index.js"

function App() {
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;


  let [cantidad, setCantidad] = useState(10000);
  let [meses, setMeses] = useState(6);
  let [total, setTotal] = useState(0);
  let [mensualidad, setMensualidad] = useState(calcularMesualidad(10000, 6));
  
  useEffect(() =>{
    setTotal(calcular(cantidad, meses))
  }, [cantidad, meses]);

  useEffect(() =>{
    setMensualidad(calcularMesualidad(total, meses))
  },[total, meses])

  function handleOnChange(e){
    setCantidad(Number(e.target.value));
  };

  function handleOnClickDecremento(){
   if (cantidad > MIN) {
    setCantidad(cantidad - STEP);
   }
  };

  function handleOnClickIncremento(){
    if (cantidad < MAX) {
      setCantidad(cantidad + STEP);
    }
  };

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>
      
      <div className="flex justify-between my-10">
        <Button operador= '-'
                fn={handleOnClickDecremento}/>
        <Button operador= '+'
                fn={handleOnClickIncremento}/>
      </div>

      <input 
      type="range"
      className="w-full h-6 bg-gray-200 accent-lime-400 hover:accent-lime-500"
      onChange={handleOnChange}
      min={MIN}
      max={MAX}
      step={STEP}
      value = {cantidad}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formatearDinero(cantidad)}</p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">Elige un <span className="text-indigo-600">Plazo</span> a oagar</h2>

      <select 
        value={meses} 
        onChange={ e => setMeses(Number(e.target.value))}
        className="mt-8 w-full bg-white border border-gray-500 font-bold rounded-lg text-center text-gray-500">
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      
      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">Resumen <span className="text-indigo-600">de Pagos</span></h2>
        <p className="text-xl text-gray-500 font-bold">Meses: {meses}</p>
        <p className="text-xl text-gray-500 font-bold">Total a pagar: {formatearDinero(total)}€</p>
        <p className="text-xl text-gray-500 font-bold">Mensual: {formatearDinero(mensualidad)}</p>
      </div>
    </div>
  )
}

export default App
