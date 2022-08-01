import { useEffect } from "react";
import Router from "next/router";

export default function Shop() {
  useEffect(() => {
    Router.push("https://theorangerunner.myshopify.com/");
  });

  return null;
}
