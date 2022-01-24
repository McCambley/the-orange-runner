// This component is no longer used. It's being kept in case it's brought back later.
// To use, uncomment the SelectInput located in Navigation.js

import { useRouter } from "next/router";
import { useRef, useEffect, useState, useDebugValue } from "react";
import { Form, Label, Select, Option } from "../styles/styledFormElements";

export default function SelectInput({ setIsOpen }) {
  const [collectionData, setCollectionData] = useState([]);

  const select = useRef();
  const router = useRouter();

  useEffect(() => {
    return fetch(`/api/collections`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((res) => {
        setCollectionData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleChange(evt) {
    scrollToTop();
    router.push(`/collections/${evt.target.value}`);
    select.current.selectedIndex = null;
    setIsOpen(false);
  }

  function scrollToTop() {
    document.querySelector("main").scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }

  return (
    <Form action="">
      <Label htmlFor="collection-select">Collections</Label>
      <Select ref={select} onChange={handleChange} name="collections" id="collection-select">
        <Option value=" ">Read a series...</Option>
        {collectionData.map((collection) => {
          return (
            <Option key={collection.slug} value={collection.slug}>
              {collection.title}
            </Option>
          );
        })}
      </Select>
    </Form>
  );
}
