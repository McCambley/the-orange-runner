import { useEffect } from "react";
import Router from "next/router";

export default function Shop() {
  useEffect(() => {
    Router.push("/");
  });

  return null;
}
