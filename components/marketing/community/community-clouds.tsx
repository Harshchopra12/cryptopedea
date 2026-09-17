import Image from "next/image";

const ASSET_PATH = "/community";

export default function CommunityClouds() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-[30]
        overflow-hidden
      "
    >
      {/* =========================================================
          1. LEFT LARGE CLOUD
          Figma: x -60 / y 1282
          Community-local: x -60 / y 109
          Size: 292 × 84
          ========================================================= */}
      <Image
        src={`${ASSET_PATH}/cloud-left-large.svg`}
        alt=""
        width={292}
        height={84}
        className="absolute"
        style={{
          left: "-60px",
          top: "109px",
          width: "292px",
          height: "84px",
        }}
      />

      {/* =========================================================
          2. LEFT SMALL CLOUD
          Figma: x 28 / y 1363
          Community-local: x 28 / y 190
          Size: 104 × 48
          ========================================================= */}
      <Image
        src={`${ASSET_PATH}/cloud-left-small.svg`}
        alt=""
        width={104}
        height={48}
        className="absolute"
        style={{
          left: "28px",
          top: "190px",
          width: "104px",
          height: "48px",
        }}
      />

      {/* =========================================================
          3. RIGHT SMALL CLOUD
          Figma: x 1122 / y 1415
          Community-local: x 1122 / y 242
          Size: 104 × 36
          ========================================================= */}
      <Image
        src={`${ASSET_PATH}/cloud-right-small.svg`}
        alt=""
        width={104}
        height={36}
        className="absolute"
        style={{
          left: "1122px",
          top: "242px",
          width: "104px",
          height: "36px",
        }}
      />

      {/* =========================================================
          4. CENTER CLOUD
          Figma: x 673 / y 1545
          Community-local: x 673 / y 372
          Size: 160 × 52
          ========================================================= */}
      <Image
        src={`${ASSET_PATH}/cloud-center.svg`}
        alt=""
        width={160}
        height={52}
        className="absolute"
        style={{
          left: "673px",
          top: "372px",
          width: "160px",
          height: "52px",
        }}
      />

      {/* =========================================================
          5. RIGHT LARGE CLOUD
          Figma: x 1312 / y 1577
          Community-local: x 1312 / y 404
          Size: 196 × 44
          ========================================================= */}
      <Image
        src={`${ASSET_PATH}/cloud-right-large.svg`}
        alt=""
        width={196}
        height={44}
        className="absolute"
        style={{
          left: "1312px",
          top: "404px",
          width: "196px",
          height: "44px",
        }}
      />
    </div>
  );
}