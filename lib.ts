export const getIdsFromUrls = (urls: string[]): string => {
  const ids = urls.map((url) => {
    const s = url.split("/");
    return s[s.length - 1];
  });

  return ids.join(",");
};
