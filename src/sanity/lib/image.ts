import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { dataset, projectId } from '@/sanity/env';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export function getImageUrlBuilder(source?: SanityImageSource) {
  return source ? builder.image(source) : undefined;
}

export function getHotspotImageUrl(source?: SanityImageSource) {
  return getImageUrlBuilder(source)?.fit('crop').auto('format').url() ?? '';
}
