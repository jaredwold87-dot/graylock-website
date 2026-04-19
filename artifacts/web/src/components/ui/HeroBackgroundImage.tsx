interface HeroBackgroundImageProps {
  src: string;
  mobileSrc?: string;
  className?: string;
  objectPosition?: string;
  fetchPriority?: "high" | "low" | "auto";
}

function stripExt(path: string) {
  return path.replace(/\.(jpg|jpeg|png|webp)$/i, "");
}

export function HeroBackgroundImage({
  src,
  mobileSrc,
  className = "absolute inset-0 w-full h-full object-cover object-center",
  objectPosition,
  fetchPriority = "high",
}: HeroBackgroundImageProps) {
  const desktopBase = stripExt(src);
  const desktopWebp = `${desktopBase}.webp`;

  const mobileBase = stripExt(mobileSrc ?? src);
  const mobileWebp = `${mobileBase}-mobile.webp`;
  const mobileJpg = `${mobileBase}-mobile.jpg`;

  const style = objectPosition ? { objectPosition } : undefined;

  return (
    <picture>
      <source type="image/webp" media="(max-width: 767px)" srcSet={mobileWebp} />
      <source type="image/jpeg" media="(max-width: 767px)" srcSet={mobileJpg} />
      <source type="image/webp" srcSet={desktopWebp} />
      <img
        src={src}
        alt=""
        aria-hidden="true"
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        style={style}
      />
    </picture>
  );
}
