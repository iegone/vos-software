import React from 'react'
import { MdErrorOutline } from "react-icons/md";


function Error404() {
  return (
    <div className="text-black h-full w-full flex items-center justify-center bg-slate-200">
      <div className="h-80 text-center flex flex-col items-center justify-center">
        <h2 className=" text-9xl">404</h2>
        <p className=" text-2xl">page not found</p>
      </div>
    </div>
  );
}

export default Error404