export default function AcademyConnector() {
    return (
        <svg
            aria-hidden="true"
            width="1180"
            height="547"
            viewBox="0 0 1180 547"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-0
                overflow-visible
            "
        >
            {/* Advance → Beginner */}
            <line
                x1="340"
                y1="278"
                x2="420"
                y2="198"
                stroke="#FBFBFB"
                strokeWidth="4"
                strokeDasharray="10 10"
            />

            {/* Beginner → Expert */}
            <line
                x1="760"
                y1="198"
                x2="840"
                y2="278"
                stroke="#FBFBFB"
                strokeWidth="4"
                strokeDasharray="10 10"
            />
        </svg>
    );
}