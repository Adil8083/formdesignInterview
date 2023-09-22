import React from "react";
import Button from "./Button";

function AddForm() {
  return (
    <div className="border-b-[0.5px] border-black">
      <div className="flex items-center justify-center mb-5">
        <p className="font-bold text-xl text-[#ad7e2f]">TIPAN GROUPAGE FILE</p>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col justify-center w-[49%]">
          <label className="font-semibold pb-1">SHIPPER:</label>
          <input type="text"></input>
          <label className="font-semibold pb-1 pt-4">CNEE/NOTIFY:</label>
          <input type="text"></input>
          <label className="font-semibold pb-1 pt-4">DESCRIPTION:</label>
          <textarea type="text"></textarea>
        </div>
        <div className="flex items-center w-[49%] flex-wrap h-full justify-around">
          <div className="flex flex-col justify-center space-y-3">
            <label className="font-semibold">NOVIER MERCHANDISE: </label>
            <select>
              <option value="none" selected disabled hidden>
                Select
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <label className="font-semibold">NEUF: </label>
            <input type="checkbox" className="w-4 h-4"></input>
            <label className="font-semibold">Number: </label>
            <input type="text" className=""></input>
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <label className="font-semibold">Value: </label>
            <input type="text" className="w-28"></input>
            <label className="font-semibold">Wieght: </label>
            <input type="text" className="w-28"></input>
            <label className="font-semibold">Volume: </label>
            <input type="text" className=""></input>
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <label className="font-semibold">MODE: </label>
            <input type="text" className=""></input>
            <label className="font-semibold">PU($): </label>
            <input type="text" className=""></input>
            <label className="font-semibold">PT($): </label>
            <input type="text" className=""></input>
          </div>
        </div>
      </div>
      <div className="flex  items-center mt-4 space-x-5 mb-2">
        <Button title="CREATE" />
        <Button title="CANCEL ENTRY" />
      </div>
    </div>
  );
}

export default AddForm;
