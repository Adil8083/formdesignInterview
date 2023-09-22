import React from "react";
import Button from "../components/Button";

function FileInfo() {
  return (
    <>
      <div className="flex justify-between items-center mx-10 flex-wrap">
        <p className="font-semibold text-[#ad7e2f]">FILE INFORMATION</p>
        <Button title="Change Date" />
      </div>
      <div className="flex flex-col items-start justify-start  mx-10 mt-3 border border-[#ad7e2f] p-5">
        <p className="uppercase">
          <span className="font-semibold">File No :</span> 6956
        </p>
        <p className="text-[13px] text-zinc-600">
          Created on : 2022-02-26 09:40:30
        </p>
        <div className="space-y-1 mt-2">
          <p className="uppercase">
            <span className="font-semibold">Invoice No :</span> 5687
          </p>
          <p className="uppercase">
            <span className="font-semibold">Invoice Ammount :</span> $4569
          </p>
          <p className="uppercase">
            <span className="font-semibold">Balance (defered included) : </span>
            $0.00
          </p>
        </div>
      </div>
    </>
  );
}

export default FileInfo;
