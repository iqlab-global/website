import Image, { StaticImageData } from 'next/image';

interface AppImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  isExternal?: boolean;
}

const AppImage = ({
  src,
  alt,
  width = 300,
  height = 100,
  className,
  isExternal = false,
}: AppImageProps) => {
  return (
    <div className={className || className}>
      {isExternal ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        <Image src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default AppImage;
