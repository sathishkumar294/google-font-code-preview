import hljs from "highlight.js";
import java from "highlight.js/lib/languages/java";
hljs.registerLanguage("java", java);
import "highlight.js/styles/nord.css";

function FormattedCode({ code, language }: { code: string; language: string }) {
  const highlightHTML = hljs.highlight(code, { language }).value;

  return (
    <pre>
      <code
        dangerouslySetInnerHTML={{ __html: highlightHTML }}
        className="java hljs"
      ></code>
    </pre>
  );
}

export default FormattedCode;
