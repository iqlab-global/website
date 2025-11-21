'use client';

import { Container } from '@/components/Container';
import { PortableText } from '@portabletext/react';
import { useHash } from '@/hooks/useHash';
import { useTopmostVisibleSection } from '@/hooks/useTopmostVisibleSection';
import { extractSidebarItems, groupConsecutiveImages, groupContentBySections } from './utils';
import { createPortableTextComponents } from './portableTextComponents';
import { Sidebar } from './Sidebar';
import { ContentBlock } from './types';
import s from './style.module.scss';

interface Props {
  body?: ContentBlock[];
}

export const PostContentWithSidebar = ({ body }: Props) => {
  const sidebarItems = body ? extractSidebarItems(body) : [];
  const groupedContent = body ? groupConsecutiveImages(body) : [];
  const sections = groupContentBySections(groupedContent);
  const components = createPortableTextComponents();

  const hashes = sidebarItems.map(({ hash }) => hash);
  const highlightedItem = useTopmostVisibleSection(hashes);
  const currentHash = useHash() || sidebarItems[0]?.hash;
  const activeHash = highlightedItem || currentHash;

  if (!body) return null;

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <Sidebar items={sidebarItems} activeHash={activeHash} />
          <article className={s.content}>
            <PortableText value={sections} components={components} />
          </article>
        </div>
      </Container>
    </section>
  );
};
