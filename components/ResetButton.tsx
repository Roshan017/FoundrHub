"use client";

import React from "react";
import { RotateCcw } from "lucide-react";

import Link from "next/link";

const ResetButton = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
      //console.log("Form Reset");
    }
  };

  return (
    <button className="search-btn" type="button" onClick={reset}>
      <Link href={"/"}>
        <RotateCcw className="text-white cursor-pointer" />
      </Link>
    </button>
  );
};

export default ResetButton;
