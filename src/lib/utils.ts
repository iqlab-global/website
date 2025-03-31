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
