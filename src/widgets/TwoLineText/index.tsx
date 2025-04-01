import { splitStringEvenly } from '@/lib/utils';

type Props = {
  string?: string;
};
export function TwoLineText({ string }: Props) {
  return splitStringEvenly(string).map((splitString, index) => (
    <span key={index}>
      {splitString}
      <br />
    </span>
  ));
}
