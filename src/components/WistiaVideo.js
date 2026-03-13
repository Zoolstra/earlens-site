"use client";
import { useEffect } from "react";

export function WistiaVideo({ id, height = 200 }) {
  useEffect(() => {
    if (window._wistiaLoaded) return;
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);
    window._wistiaLoaded = true;
  }, []);

  return (
    <>
      <script src={`https://fast.wistia.com/embed/medias/${id}.jsonp`} async />
      <div
        className={`wistia_embed wistia_async_${id} videoFoam=true`}
        style={{ width: "100%", height, position: "relative" }}
      />
    </>
  );
}
