export function ContactInfo() {
  return (
    <>
      <p>
        Cell: <a href='tel:+1-646-251-2270'>+1 (646) 251-2270</a>
      </p>
      <p>
        Email: <a href='mailto:info@iqlab.us'>info@iqlab.us</a>
      </p>
    </>
  );
}

type Props = {
  className: string;
};

export function AddressInfo({ className }: Props) {
  return (
    <>
      <div className={className}>
        <p>IQ Lab LLC</p>
        <p>337 Alpine Meadows Avenue</p>
      </div>
      <div className={className}>
        <p>PO BOX 51</p>
        <p>Girdwood, AK 99587-0051</p>
      </div>
    </>
  );
}
