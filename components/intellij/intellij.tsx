import { useEffect, useState } from "react";
import FormattedCode from "../code-formatter";

function IntellijIDE() {
  const [code, setCode] = useState("");

  useEffect(() => {
    if (!code)
      fetch("/api/codes")
        .then((res) => res.json())
        .then(({ fileContents }) => {
          if (fileContents !== code) setCode(fileContents);
        });
  }, [code]);

  return <FormattedCode code={code} language="java"></FormattedCode>;
}

export default IntellijIDE;
