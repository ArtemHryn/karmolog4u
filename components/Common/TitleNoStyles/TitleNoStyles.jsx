import { unbounded } from "@app/layout";

const TitleNoStyles = ({ children, styled, variant = 'h1' }) => {
  const Tag = variant;
  return <Tag className={`${styled} ${unbounded.className} `}>{children}</Tag>;
};

export default TitleNoStyles;
