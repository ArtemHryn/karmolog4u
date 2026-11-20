import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import styles from './ProductInfo.module.scss';

const Description = ({ desc }: { desc: string }) => {
  const markdown = desc.replace(
    /\[color=(#[\da-fA-F]{6})\]([\s\S]*?)\[\/color\]/g,
    (_, color, content) => `[${content}](color:${color})`,
  );

  return (
    <div className={styles.description}>
      <ReactMarkdown
        components={{
          a({ children, href, ...props }) {
            const colorMatch = /^color:(#[\da-f]{6})$/i.exec(href ?? '');
            if (colorMatch) {
              return <span style={{ color: colorMatch[1] }}>{children}</span>;
            }

            return (
              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            );
          },
        }}
        remarkPlugins={[remarkGfm, remarkBreaks]}
        urlTransform={url => (/^color:#[\da-f]{6}$/i.test(url) ? url : defaultUrlTransform(url))}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Description;
