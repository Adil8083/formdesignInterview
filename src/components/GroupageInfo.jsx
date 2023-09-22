import React from "react";
import Button from "./Button";

function GroupageInfo() {
  return (
    <>
      <div className="flex justify-between items-center mx-10 flex-wrap">
        <p className="font-semibold text-[#ad7e2f]">GROUPAGE INFORMATION</p>
        <Button title="Change Groupage" />
      </div>
      <div className="flex flex-col items-start justify-start  mx-10 mt-3 border border-[#ad7e2f] p-5">
        <p className="uppercase">
          <span className="font-semibold">Group Name : </span>M01/16
        </p>
        <div className="space-y-1 mt-1">
          <p className="uppercase">
            <span className="font-semibold">Container Name : </span>ECMU 9758945
          </p>
          <p className="uppercase">
            <span className="font-semibold">From :</span> MERSEILLE{" "}
            <span className="font-semibold">To :</span> TAMATAVE
          </p>
          <p className="uppercase">
            <span className="font-semibold">Boarding At : </span>
            NYC Airport
          </p>
          <p className="uppercase">
            <span className="font-semibold">Schedule Departure : </span>
            LEE
          </p>
          <p className="uppercase">
            <span className="font-semibold">Status : </span>
            Hold
          </p>
        </div>
      </div>
    </>
  );
}

export default GroupageInfo;
