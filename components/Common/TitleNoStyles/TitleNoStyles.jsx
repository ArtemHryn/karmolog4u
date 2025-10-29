import { unbounded } from '@app/[locale]/layout';

/**
 * Компонент заголовку без стилів
 *
 * @param {{
 *   children: React.ReactNode,
 *   styled?: string,
 *   variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
 *   data?: string
 * }} props
 */

const TitleNoStyles = ({ children, styled, variant = 'h1', data }) => {
  const Tag = variant;
  return (
    <Tag className={`${styled} ${unbounded.className} `} data-language={data}>
      {children}
    </Tag>
  );
};

export default TitleNoStyles;
