"use client";

import { sanitiseRawHtml } from "../_utils/sanitise";

// note that need to enable iframe jsapi if we wanna track
// video views

// embeds are not working as intended via the manual way.
const embed = `<iframe width="560" height="315" enablejsapi=1 src="https://www.youtube.com/embed/EngW7tLk6R8?si=VNmsSqAwFWQr9Gri" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
export default function Embed() {
  return (
    <>
      <h1>Showcasing youtube embeds:</h1>
      <div
        className="mb-component-space-lg"
        dangerouslySetInnerHTML={{
          __html: sanitiseRawHtml(embed, {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["enablejsapi"],
          }),
        }}
      />
    </>
  );
}
