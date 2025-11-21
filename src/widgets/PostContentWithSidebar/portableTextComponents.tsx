import { PortableTextComponents } from '@portabletext/react';
import { getHotspotImageUrl } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { ImageBlock } from './types';
import s from './style.module.scss';

export const createPortableTextComponents = (): PortableTextComponents => {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
    },
    list: {
      bullet: ({ children }) => <ul>{children}</ul>,
      number: ({ children }) => <ol>{children}</ol>,
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, value }) => <a href={value?.href}>{children}</a>,
    },
    types: {
      image: ({ value }) => (
        <img src={getHotspotImageUrl(value.asset)} alt={value.alt ?? ''} />
      ),
      imageGroup: ({ value }) => (
        <div className={s.imageGroup}>
          {value.images.map((img: ImageBlock) => (
            <img
              key={img._key}
              src={getHotspotImageUrl(img.asset)}
              alt={img.alt ?? ''}
            />
          ))}
        </div>
      ),
      section: ({ value }) => {
        const headingStyle = value.heading.style;
        const validHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
        const HeadingTag = validHeadings.includes(headingStyle)
          ? (headingStyle as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')
          : 'h2';

        const headingComponents: PortableTextComponents = {
          ...components,
          block: {
            normal: ({ children }) => <>{children}</>,
            h1: ({ children }) => <>{children}</>,
            h2: ({ children }) => <>{children}</>,
            h3: ({ children }) => <>{children}</>,
            h4: ({ children }) => <>{children}</>,
          },
        };

        return (
          <div className={s.contentSection} id={value._key}>
            <HeadingTag>
              <PortableText value={[value.heading]} components={headingComponents} />
            </HeadingTag>
            <div>
              <PortableText value={value.content} components={components} />
            </div>
          </div>
        );
      },
    },
  };

  return components;
};
