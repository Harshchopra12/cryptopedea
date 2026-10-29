import Image from "next/image";

const ASSET_PATH = "/community";

const CLOUDS = [
  {
    src: "cloud-left-large.svg.svg",
    width: 296,
    height: 92,
    left: "-60px",
    top: "109px",
  },
  {
    src: "cloud-left-small.svg.svg",
    width: 160,
    height: 52,
    left: "28px",
    top: "190px",
  },
  {
    src: "cloud-right-small.svg",
    width: 196,
    height: 44,
    left: "1122px",
    top: "242px",
  },
  {
    src: "cloud-center.svg",
    width: 160,
    height: 52,
    left: "673px",
    top: "372px",
  },
  {
    src: "cloud-right-large.svg",
    width: 292,
    height: 84,
    left: "1312px",
    top: "404px",
  },
] as const;

function CloudTile() {
  return (
    <div className="relative h-full w-1/2 shrink-0">
      {CLOUDS.map((cloud) => (
        <Image
          key={cloud.src}
          src={`${ASSET_PATH}/${cloud.src}`}
          alt=""
          width={cloud.width}
          height={cloud.height}
          className="absolute"
          style={{ left: cloud.left, top: cloud.top }}
        />
      ))}
    </div>
  );
}

export default function CommunityClouds() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      <div className="cp-community-cloud-track">
        <CloudTile />
        <CloudTile />
      </div>
    </div>
  );
}
