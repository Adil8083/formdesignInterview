import React from "react";

function Button({ title }) {
  return (
    <div className="bg-[#c4550e] flex justify-center items-center rounded-md text-white text-sm  px-3 py-1 font-medium font-sans w-max h-max cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
      {title}
    </div>
  );
}

export default Button;
