import { createSlug } from '@/utils/createSlug';
import {
  PortableTextBlock,
  ImageBlock,
  ImageGroupBlock,
  SectionBlock,
  SidebarItem,
  ContentBlock,
} from './types';

export function extractSidebarItems(body: ContentBlock[]): SidebarItem[] {
  return body
    .filter(
      (block): block is PortableTextBlock =>
        block._type === 'block' && (block.style === 'h2' || block.style === 'h3')
    )
    .map((block) => ({
      label: block.children?.[0]?.text || '',
      hash: createSlug(block.children?.[0]?.text || ''),
    }));
}

export function groupConsecutiveImages(body: ContentBlock[]): ContentBlock[] {
  const groupedContent: ContentBlock[] = [];
  let imageGroup: ImageBlock[] = [];

  body.forEach((block, index) => {
    if (block._type === 'image') {
      imageGroup.push(block as ImageBlock);
      const nextBlock = body[index + 1];
      if (!nextBlock || nextBlock._type !== 'image') {
        if (imageGroup.length > 1) {
          groupedContent.push({
            _type: 'imageGroup',
            _key: `group-${imageGroup[0]._key}`,
            images: imageGroup,
          });
        } else {
          groupedContent.push(imageGroup[0]);
        }
        imageGroup = [];
      }
    } else {
      groupedContent.push(block);
    }
  });

  return groupedContent;
}

export function groupContentBySections(content: ContentBlock[]): ContentBlock[] {
  const sections: ContentBlock[] = [];
  let currentSection: SectionBlock | null = null;

  content.forEach((block) => {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      const portableBlock = block as PortableTextBlock;
      currentSection = {
        _type: 'section',
        _key: createSlug(portableBlock.children?.[0]?.text || ''),
        heading: portableBlock,
        content: [],
      };
    } else if (currentSection) {
      currentSection.content.push(block as PortableTextBlock | ImageBlock | ImageGroupBlock);
    } else {
      sections.push(block);
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}
