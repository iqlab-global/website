import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <svg
          width='37'
          height='36'
          viewBox='0 0 37 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M25.8844 10.5493H21.2295V25.4529H25.8844V10.5493Z'
            fill='#003DA5'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0.621094 0V36H36.5586V0H0.621094ZM8.83484 9.78238H5.05871V6.00158H8.83484V9.78238ZM14.1362 25.5058H9.4812V10.6022H14.1362V25.5058ZM30.5674 26.2176H26.7894V30.0003H16.5477V6.00158H30.5674V26.2176Z'
            fill='#003DA5'
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
