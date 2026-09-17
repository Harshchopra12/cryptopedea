import Image from "next/image";

const CLOUD_PATH = "/academy";

export default function AcademyClouds() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {/* TOP LEFT LARGE CLOUD */}
      <Image
        src={`${CLOUD_PATH}/cloud-top-left.svg`}
        alt=""
        width={369}
        height={108}
        className="absolute"
        style={{
          left: "-62.37px",
          top: "224.31px",
          width: "368.58px",
          height: "107.74px",
        }}
        priority
      />

      {/* GROUPED LARGE CLOUD */}
      <Image
        src={`${CLOUD_PATH}/cloud-right-large.svg`}
        alt=""
        width={292}
        height={84}
        className="absolute"
        style={{
          left: "720px",
          top: "565px",
          width: "292px",
          height: "84px",
        }}
        priority
      />

      {/* GROUPED SMALL CLOUD */}
      <Image
        src={`${CLOUD_PATH}/cloud-top-right-small.svg`}
        alt=""
        width={104}
        height={48}
        className="absolute"
        style={{
          left: "635px",
          top: "625px",
          width: "104px",
          height: "48px",
        }}
        priority
      />

      {/* GROUPED CENTER CLOUD */}
      <Image
        src={`${CLOUD_PATH}/cloud-bottom-center-large.svg`}
        alt=""
        width={160}
        height={52}
        className="absolute"
        style={{
          left: "520px",
          top: "625px",
          width: "160px",
          height: "52px",
        }}
        priority
      />

      {/* LEFT MIDDLE CLOUD */}
      <Image
        src={`${CLOUD_PATH}/cloud-left-middle.svg`}
        alt=""
        width={196}
        height={44}
        className="absolute"
        style={{
          left: "165px",
          top: "575px",
          width: "196px",
          height: "44px",
        }}
        priority
      />

      {/* BOTTOM LEFT CLOUD */}
      <Image
        src={`${CLOUD_PATH}/cloud-bottom-left.svg`}
        alt=""
        width={196}
        height={44}
        className="absolute"
        style={{
          left: "-68px",
          top: "700px",
          width: "196px",
          height: "44px",
        }}
        priority
      />
    </div>
  );
}