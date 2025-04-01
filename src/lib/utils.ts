export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SortByOptions = {
  order?: 'asc' | 'desc';
  ignoreCase?: boolean;
  numeric?: boolean;
};

export function sortBy<T>(
  key: keyof T,
  { order = 'asc', ignoreCase = false, numeric = false }: SortByOptions = {}
) {
  const sortDir = order === 'asc' ? 1 : -1;

  const compare = new Intl.Collator(undefined, {
    numeric,
    sensitivity: ignoreCase ? 'base' : 'case',
  }).compare;

  return (a: T, b: T) => sortDir * compare(String(a[key]), String(b[key]));
}

export function splitStringEvenly(s = ''): string[] {
  if (!s) return [];

  const words = s.split(' ');
  const totalChars = words.reduce((sum, word) => sum + word.length, 0);
  const halfChars = Math.floor(totalChars / 2);

  const part1: string[] = [words.shift()!];
  const part2: string[] = [];
  let count = part1[0].length;

  for (const word of words) {
    if (count + word.length <= halfChars) {
      part1.push(word);
      count += word.length;
    } else {
      part2.push(word);
    }
  }

  return [part1.join(' '), part2.join(' ')];
}
