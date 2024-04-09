import DOMPurify, { Config } from "isomorphic-dompurify";
export const sanitiseRawHtml = (
  rawHTML: string,
  config: Config // https://github.com/cure53/DOMPurify/blob/main/README.md#control-our-allow-lists-and-block-lists,
) => {
  return DOMPurify.sanitize(rawHTML, config) as string | TrustedHTML; // force react's __html to accept this typecast
};
