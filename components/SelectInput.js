import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { Form, Label, Select, Option } from "../styles/styledFormElements";

export default function SelectInput({ setIsOpen }) {
  const [collectionData, setCollectionData] = useState([]);

  const select = useRef();
  const router = useRouter();

  useEffect(() => {
    console.log("Getting collections...");
    return fetch(`/api/collections`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((res) => {
        console.log(res.data);
        setCollectionData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleChange(evt) {
    console.log(`Looking for '${evt.target.value}' collection...`);
    router.push(`/collections/${evt.target.value}`);
    select.current.selectedIndex = null;
    setIsOpen(false);
  }

  return (
    <Form action="">
      <Label htmlFor="collection-select">Favorites</Label>
      <Select ref={select} onChange={handleChange} name="collections" id="collection-select">
        <Option value="">Collections...</Option>
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
