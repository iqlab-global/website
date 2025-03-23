import { PortableText, PortableTextComponents } from '@portabletext/react';

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => <a href={value.href}>{children}</a>,
  },
  types: {
    image: ({ value }) => <img src={value.asset.url} alt={value.alt ?? ''} />,
  },
};

type BlockContentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
};

export function BlockContent({ content }: BlockContentProps) {
  return <PortableText value={content} components={components} />;
}
