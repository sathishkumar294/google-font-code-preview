import hljs from "highlight.js/lib/core";
import java from "highlight.js/lib/languages/java";
hljs.registerLanguage("java", java);

function IntellijIDE() {
  const highlightedCode = hljs.highlight("code", {
    language: "java",
  }).value;
  return <div className="code">{highlightedCode}</div>;
}

export default IntellijIDE;
