import { Form, Label, Select, Option } from "../styles/styledSelectInput";

export default function SelectInput() {
  return (
    <Form action="">
      <Label htmlFor="collection-select">Collections</Label>
      <Select name="collections" id="collection-select">
        <Option value="">Collections</Option>
        <Option value="">Favorites</Option>
        <Option value="">Training</Option>
        <Option value="">New York Marathon</Option>
        <Option value="">Greek Mythology</Option>
      </Select>
    </Form>
  );
}
