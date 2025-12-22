function ensureArray<T>(source: readonly T[]): void {
  if (source == null || !Array.isArray(source)) {
    throw new TypeError('Source must be a valid array');
  }
}

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  ensureArray(source);
  const result: R[] = [];
  let index = 0;
  for (const item of source)
  {
    result.push(mapper(item, index));
    index++;
  }
  return result;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  ensureArray(source);
  const result: T[] = [];
  let index = 0;
  for (const item of source)
  {
    if (predicate(item,index))
    {
      result.push(item);
    }
    index++;
  }
  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  ensureArray(source);
  let acc: R = initial;
  let index = 0;
  for (const item of source)
  {
    acc = reducer(acc, item, index);
    index++;
  }
  return acc;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  ensureArray(source);
  const pass: T[] = [];
  const fail: T[] = [];
  for (const item of source)
  {
    if (predicate(item))
    {
      pass.push(item);
    }
    else
    {
      fail.push(item);
    }
  }
  return [pass, fail];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  ensureArray(source);
  const result  = {} as Record<K, T[]>;
  for (const item of source)
  {
    const key = keySelector(item);
    if(!Object.prototype.hasOwnProperty.call(result,key)) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}
