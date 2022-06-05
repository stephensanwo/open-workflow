import React, { useRef, useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import styled from "styled-components";

export interface CodeProps {
  codeData: any;
  handleCodeChange: any;
  placeholder?: string;
  style?: any;
}

const CodeContainter = styled.div`
  display: flex;
  margin-top: 20px;
  border: 1px solid #525252;
`;
const LineNumbers = styled.div`
  background-color: #333333;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
`;

const LineNumber = styled.p`
  font-size: 14px;
  line-height: 20px;
  padding: 0;
  margin: 0;
  color: #5e5e5e;
`;

const Code: React.FC<CodeProps> = ({
  codeData,
  handleCodeChange,
  style,
  placeholder,
}) => {
  let numStart = 1;
  const ref: any = useRef("");
  const [num, setNum] = useState([numStart]);

  useEffect(() => {
    console.log("height", ref.current.offsetHeight);
    // 15 = top padding
    let currentHeight: number = ref.current.offsetHeight;
    let eachNum = Math.round((currentHeight - 15) / 20);
    let arr = Array.from({ length: eachNum }, (_, i) => i + 1);
    setNum(arr);
  }, [ref.current.offsetHeight]);

  return (
    <CodeContainter>
      <LineNumbers ref={ref}>
        {num.map((item, index) => (
          <LineNumber key={index}>{item}</LineNumber>
        ))}
      </LineNumbers>
      <CodeEditor
        value={codeData}
        language="py"
        placeholder={placeholder}
        onChange={(event) => handleCodeChange(event)}
        padding={15}
        style={style}
        data-color-mode="dark"
      />
    </CodeContainter>
  );
};
export default Code;
