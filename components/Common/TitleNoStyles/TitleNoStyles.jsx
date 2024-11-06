import { unbounded } from "@app/[locale]/layout";

const TitleNoStyles = ({ children, styled, variant = 'h1', data }) => {
  const Tag = variant;
  return (
    <Tag className={`${styled} ${unbounded.className} `} data-language={data}>
      {children}
    </Tag>
  );
};

export default TitleNoStyles;
