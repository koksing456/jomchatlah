import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="JomChatLah">
      <div className="shrink-0 mr-4 flex items-center">
        <svg
          className="w-8 h-8"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="21.152%"
              cy="86.063%"
              fx="21.152%"
              fy="86.063%"
              r="79.941%"
              id="footer-logo"
            >
              <stop stopColor="#84CC16" offset="0%" /> {/* Tailwind lime-500 */}
              <stop stopColor="#A3E635" offset="25.871%" />{" "}
              {/* Tailwind lime-300 */}
              <stop stopColor="#4D7C0F" offset="100%" />{" "}
              {/* Tailwind lime-700 */}
            </radialGradient>
          </defs>
          <rect
            width="32"
            height="32"
            rx="16"
            fill="url(#footer-logo)"
            fillRule="nonzero"
          />
        </svg>
        <span className="text-lg md:text-xl font-extrabold leading-tighter tracking-tighter ml-2 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-500">
          JomChatLah
        </span>
      </div>
    </Link>
  );
}
