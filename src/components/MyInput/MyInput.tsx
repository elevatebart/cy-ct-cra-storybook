import * as React from "react";

export interface MyInputProps {
  value?: string;
}

const MyInput: React.FC<MyInputProps> = ({ value }) => {
  const [val, setVal] = React.useState(value);
  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      {val ? <svg>X</svg> : undefined}
    </div>
  );
};

export default MyInput;
