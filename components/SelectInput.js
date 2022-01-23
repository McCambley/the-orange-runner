import { useRouter } from "next/router";
import { useRef } from "react";
import { Form, Label, Select, Option } from "../styles/styledFormElements";

export default function SelectInput() {
  const select = useRef();
  const router = useRouter();

  function handleChange(evt) {
    console.log(`Looking for '${evt.target.value}' collection...`);
    router.push(`/collections/${evt.target.value}`);
    select.current.selectedIndex = null;
  }

  return (
    <Form action="">
      <Label htmlFor="collection-select">Collections</Label>
      <Select ref={select} onChange={handleChange} name="collections" id="collection-select">
        <Option value="">Collections</Option>
        <Option value="favorites">Favorites</Option>
        <Option value="training">Training</Option>
        <Option value="marathons">Marathons</Option>
        <Option value="greek-mythology">Greek Mythology</Option>
      </Select>
    </Form>
  );
}
