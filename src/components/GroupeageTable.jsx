import React from "react";
import Button from "./Button";

function GroupeageTable() {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-center">
        <p className="font-bold text-xl text-[#ad7e2f]">
          GROUPAGE DETAILS SIZED
        </p>
      </div>
      <div className="flex mb-5 bg-white mt-4 mr-5">
        <table className="">
          <tr>
            <th className="w-32 border border-black">Nature</th>
            <th className="w-[30dvw] border border-black">Description</th>
            <th className="w-[8dvw] border border-black">No</th>
            <th className="w-[8dvw] border border-black">Value</th>
            <th className="w-[8dvw] border border-black">Weight</th>
            <th className="w-[8dvw] border border-black">Vol</th>
            <th className="w-[10dvw] border border-black">Billing</th>
            <th className="w-[10dvw] border border-black">Credit</th>
            <th className="w-[10dvw] border border-black">Count Total</th>
          </tr>
          <tr>
            <td className="w-32 border border-black text-center">Package</td>
            <td className="w-[36dvw] text-center border border-black">
              Used household appliences and second hand clothing
            </td>
            <td className="w-[8dvw]  text-center border border-black">3.00</td>
            <td className="w-[8dvw]  text-center border border-black">
              190.00
            </td>
            <td className="w-[8dvw]  text-center border border-black">
              150.00
            </td>
            <td className="w-[8dvw]  text-center border border-black">1.00</td>
            <td className="w-[10dvw] text-center border border-black">
              Volume
            </td>
            <td className="w-[8dvw] text-center border border-black">180.00</td>
            <td className="w-[8dvw] text-center border border-black">180.00</td>
          </tr>
        </table>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p className="font-bold text-xl text-[#ad7e2f]">
          EXCEPTIONAL DISCOUNT FEES
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mr-5">
        <input
          className="text-center border w-[24dvw] border-black"
          placeholder="Type"
        ></input>
        <input
          className="text-center border-y w-[24dvw] border-black"
          placeholder="Ammount"
        ></input>
        <input
          type="number"
          placeholder="Commantier"
          className="text-center border w-[24dvw] border-black"
        ></input>
      </div>
      <div className="flex  items-center mt-7 space-x-5">
        <Button title="Addition Fee" />
        <Button title="Add Discount" />
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="font-bold text-xl text-[#ad7e2f]">
          EXCEPTIONAL DISCOUNT FEES
        </p>
      </div>
      <div className="flex mb-5 bg-white mt-5 mr-5">
        <table className="">
          <tr>
            <th className="w-[17dvw] border border-black">Payment Choice</th>
            <th className="w-[13dvw] border border-black">Comment</th>
            <th className="w-[10dvw] border border-black">Account</th>
            <th className="w-[12dvw] border border-black">Date</th>
            <th className="w-[10dvw] border border-black">Ammount</th>
            <th className="w-[8dvw] border border-black">By</th>
          </tr>
          <tr>
            <td className="w-[17dvw] border border-black text-center">
              Species
            </td>
            <td className="w-[13dvw] text-center border border-black"></td>
            <td className="w-[10dvw]  text-center border border-black">
              LCL Z
            </td>
            <td className="w-[12dvw]  text-center border border-black">
              01/01/2022
            </td>
            <td className="w-[10dvw]  text-center border border-black">
              150.00$
            </td>
            <td className="w-[8dvw]  text-center border border-black">CED</td>
          </tr>
        </table>
      </div>
      <div className="flex justify-between items-center mt-3 mr-5">
        <div className="flex justify-center items-center space-x-5">
          <Button title="Addition Of Reciepts" />
          <Button title="Create" />
        </div>
        <div className="flex justify-center items-center space-x-5">
          <Button title="Save" />
          <Button title="Exit Folder" />
        </div>
      </div>
    </div>
  );
}

export default GroupeageTable;
