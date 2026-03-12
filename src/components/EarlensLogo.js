import Image from "next/image";

export function EarlensLogo({ height = 34 }) {
  return (
    <Image
      src="/images/earlens-logo.png"
      alt="Earlens"
      height={height}
      width={height * 3.5}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
