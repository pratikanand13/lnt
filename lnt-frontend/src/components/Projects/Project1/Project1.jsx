import React from "react";
import { DesignForm } from "../../Input/DesignForm";
import ImageTransition from "../../ImageTransition/ImageTransition";

export default function Project1() {
  return (
    <div className=" w-full h-[100vh] flex items-center justify-center overflow-auto bg-[url('https://www.lntecc.com/media/m2ybp4mb/blue-bg-new.jpg')]">
      {/* <img
        src=""
        className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
        alt=""
      /> */}
      {/* <Formm /> */}
      <div className="min-h-[60vh] flex justify-center items-center w-[50%]">
        <div className="w-full h-full mt-[-100px] overflow-hidden bg-white  ml-3 mt-1 flex justify-start items-start rounded-lg">
          <ImageTransition />
          
        </div>
      </div>
      <div className=" flex items-center justify-center w-[50%] h-full ">
        <DesignForm />
      </div>
    </div>
  );
}
