export interface PortableTextBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: Array<{ text: string; _type?: string }>;
  markDefs?: unknown[];
}

export interface SanityAsset {
  _ref: string;
  _type: 'reference';
}

export interface ImageBlock {
  _type: 'image';
  _key: string;
  asset: SanityAsset;
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface ImageGroupBlock {
  _type: 'imageGroup';
  _key: string;
  images: ImageBlock[];
}

export interface SectionBlock {
  _type: 'section';
  _key: string;
  heading: PortableTextBlock;
  content: (PortableTextBlock | ImageBlock | ImageGroupBlock)[];
}

export interface SidebarItem {
  label: string;
  hash: string;
}

export type ContentBlock = PortableTextBlock | ImageBlock | ImageGroupBlock | SectionBlock;
