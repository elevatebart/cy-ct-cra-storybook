import * as React from "react";

export interface MyInputProps {
  value?: string;
}

const MyInput: React.FC<MyInputProps> = ({ value }) => (
  <div>
    <input value={value} />
  </div>
);

export default MyInput;
