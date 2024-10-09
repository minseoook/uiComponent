import ReactMarkdown from "react-markdown";
import styled from "./markdownRenderer.module.css";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return <ReactMarkdown className={styled.markdown}>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
