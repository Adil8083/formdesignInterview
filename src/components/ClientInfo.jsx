import React from "react";
import Button from "./Button";

function ClientInfo() {
  return (
    <>
      <div className="flex justify-between items-center mx-10 flex-wrap">
        <p className="font-semibold text-[#ad7e2f]">CLIENT INFORMATION</p>
        <Button title="Change Client" />
      </div>
      <div className="flex flex-col items-start justify-start  mx-10 mt-3 border border-[#ad7e2f] p-5">
        <p className="font-semibold uppercase border-b-[1px] border-black">
          Christopher Shore
        </p>
        <div className="space-y-1 mt-2">
          <p className="uppercase">
            <span className="font-semibold">TEL :</span> 0658974125
          </p>
          <p className="uppercase">
            <span className="font-semibold">Credit Days Left :</span> 0
          </p>
          <p className="uppercase">
            <span className="font-semibold">Last Statement Sent On : </span>
            2022-02-26 09:40:30
          </p>
          <p className="uppercase">
            <span className="font-semibold">Comments : </span>
            P/C Miss RANDIARMA VOAH TIAHA MISQA
          </p>
          <p className="uppercase text-[#ad7e2f]  text-lg">
            <span className="font-semibold text-red-700">Terifs : </span>
            Normal
          </p>
        </div>
      </div>
    </>
  );
}

export default ClientInfo;
