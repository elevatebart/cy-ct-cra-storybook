import * as React from "react";

export interface MyInputProps {
  value?: string;
}

const MyInput: React.FC<MyInputProps> = ({ value }) => {
  const [val, setVal] = React.useState(value);
  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <svg
        style={{
          verticalAlign: "middle",
          margin: "2px 5px",
          position: "absolute",
          display: val ? "inline-block" : "none",
        }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        onClick={() => setVal("")}
      >
        <path
          fill="#444"
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.2 10.8l-1.4 1.4L8 9.4l-2.8 2.8-1.4-1.4L6.6 8 3.8 5.2l1.4-1.4L8 6.6l2.8-2.8 1.4 1.4L9.4 8l2.8 2.8z"
        />
      </svg>
    </div>
  );
};

export default MyInput;
