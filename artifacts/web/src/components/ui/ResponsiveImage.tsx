import { ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ResponsiveImage({ src, alt, ...imgProps }: ResponsiveImageProps) {
  const base = src.replace(/\?.*$/, "").replace(/\.(jpg|jpeg|png)$/i, "");
  const desktopWebp = `${base}.webp`;
  const mobileWebp = `${base}-mobile.webp`;
  const mobileJpg = `${base}-mobile.jpg`;

  return (
    <picture>
      <source type="image/webp" media="(max-width: 767px)" srcSet={mobileWebp} />
      <source type="image/jpeg" media="(max-width: 767px)" srcSet={mobileJpg} />
      <source type="image/webp" srcSet={desktopWebp} />
      <img src={src} alt={alt} {...imgProps} />
    </picture>
  );
}
