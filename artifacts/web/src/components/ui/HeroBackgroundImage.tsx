interface HeroBackgroundImageProps {
  src: string;
  className?: string;
  objectPosition?: string;
  fetchPriority?: "high" | "low" | "auto";
}

export function HeroBackgroundImage({
  src,
  className = "absolute inset-0 w-full h-full object-cover object-center",
  objectPosition,
  fetchPriority = "high",
}: HeroBackgroundImageProps) {
  const base = src.replace(/\.(jpg|jpeg|png)$/i, "");
  const desktopWebp = `${base}.webp`;
  const mobileWebp = `${base}-mobile.webp`;
  const mobileJpg = `${base}-mobile.jpg`;
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
