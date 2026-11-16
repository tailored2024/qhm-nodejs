/** Keeps the stored ordering for previous/next links. */
export function findAdjacent<T>(records: T[], matches: (record: T) => boolean) {
  const index = records.findIndex(matches);
  if (index === -1) return undefined;

  return {
    record: records[index],
    adjacent: {
      prev: index > 0 ? records[index - 1] : undefined,
      next: index < records.length - 1 ? records[index + 1] : undefined,
    },
  };
}
