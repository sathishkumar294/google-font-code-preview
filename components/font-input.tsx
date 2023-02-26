import { Input } from "@nextui-org/react";

function FontInput() {
  return (
    <Input
      clearable
      bordered
      placeholder="Enter link to Google font"
      initialValue=""
      fullWidth
    ></Input>
  );
}

export default FontInput;
