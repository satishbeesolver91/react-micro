import he from "he";
import { marked } from "marked";

const FormattedContent = ({ text }) => {
  if (!text) return null;

  // 1. Decode escaped characters like \" and \u2013
  let decoded = he.decode(text);

  // 2. Replace literal "\n" with real newlines
  decoded = decoded.replace(/\\n/g, "\n");

  // 3. Convert double quotes "" to actual single quotes or quotes
  decoded = decoded.replace(/""/g, '"');
  // 4. Remove only the outer quotes
  decoded = decoded.replace(/^"([\s\S]*)"$/, "$1");
  // 5. Convert markdown (- bullets) + newlines to HTML
  const html = marked(decoded, { breaks: true });

  return (
    <div
      className="formatted-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
export default FormattedContent;
 