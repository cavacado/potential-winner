"use client";
interface DataLayerProps {
  fingerprint: number;
}
declare global {
  interface Window {
    dataLayer?: Object[]
  }
}
export default function BaseDataLayer({ fingerprint }: DataLayerProps) {
  return (
    <>
      <span>fingerprint: {fingerprint}</span>
      <br />
      {window && window.dataLayer && (
        <pre>{JSON.stringify(window.dataLayer, null, 4)}</pre>
      )}
    </>
  );
}
