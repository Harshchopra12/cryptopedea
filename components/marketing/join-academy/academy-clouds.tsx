import Image from "next/image";

const CLOUD_PATH = "/academy";

const CLOUDS = [
  {
    src: "cloud-top-left.svg",
    width: 312,
    height: 125,
    left: "-62.37px",
    top: "224.31px",
  },
  {
    src: "cloud-right-large.svg",
    width: 292,
    height: 84,
    left: "720px",
    top: "565px",
  },
  {
    src: "cloud-top-right-small.svg",
    width: 104,
    height: 48,
    left: "635px",
    top: "625px",
  },
  {
    src: "cloud-bottom-center-large.svg",
    width: 160,
    height: 52,
    left: "520px",
    top: "625px",
  },
  {
    src: "cloud-left-middle.svg",
    width: 104,
    height: 36,
    left: "165px",
    top: "575px",
  },
  {
    src: "cloud-bottom-left.svg",
    width: 196,
    height: 44,
    left: "-68px",
    top: "700px",
  },
] as const;

function CloudTile() {
  return (
    <div className="relative h-full w-1/2 shrink-0">
      {CLOUDS.map((cloud) => (
        <Image
          key={cloud.src}
          src={`${CLOUD_PATH}/${cloud.src}`}
          alt=""
          width={cloud.width}
          height={cloud.height}
          className="absolute"
          style={{
            left: cloud.left,
            top: cloud.top,
          }}
          priority
        />
      ))}
    </div>
  );
}

export default function AcademyClouds() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      <div className="cp-academy-cloud-track">
        <CloudTile />
        <CloudTile />
      </div>
    </div>
  );
}