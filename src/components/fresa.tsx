import styleIcon from "../styles/IconsMenu.module.css";

function Fresa() {
  return (
    <div className={styleIcon["size"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="25"
        height="20"
      >
        <path
          d="M 50,18 C 48,10 54,6 52,2"
          fill="none"
          stroke="#2E7D32"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <path
          d="M 50,18 Q 38,12 28,18 Q 38,22 50,22 Q 62,22 72,18 Q 62,12 50,18 Z"
          fill="#4CAF50"
        />
        <path
          d="M 50,18 Q 42,22 40,30 Q 48,25 50,22 Q 52,25 60,30 Q 58,22 50,18 Z"
          fill="#388E3C"
        />

        <path
          d="M 26,26 C 18,40 22,65 40,88 C 46,95 54,95 60,88 C 78,65 82,40 74,26 C 66,20 34,20 26,26 Z"
          fill="#E53935"
        />

        <path
          d="M 28,30 C 22,42 25,62 38,80 C 33,65 32,45 35,32 C 33,30 30,30 28,30 Z"
          fill="#FF5252"
          opacity="0.6"
        />

        <g fill="#FFD54F">
          <ellipse
            cx="40"
            cy="35"
            rx="1.5"
            ry="2.5"
            transform="rotate(-10 40 35)"
          />
          <ellipse cx="50" cy="34" rx="1.5" ry="2.5" />
          <ellipse
            cx="60"
            cy="35"
            rx="1.5"
            ry="2.5"
            transform="rotate(10 60 35)"
          />
          <ellipse
            cx="34"
            cy="46"
            rx="1.5"
            ry="2.5"
            transform="rotate(-15 34 46)"
          />
          <ellipse
            cx="45"
            cy="47"
            rx="1.5"
            ry="2.5"
            transform="rotate(-5 45 47)"
          />
          <ellipse
            cx="55"
            cy="47"
            rx="1.5"
            ry="2.5"
            transform="rotate(5 55 47)"
          />
          <ellipse
            cx="66"
            cy="46"
            rx="1.5"
            ry="2.5"
            transform="rotate(15 66 46)"
          />
          <ellipse
            cx="38"
            cy="59"
            rx="1.5"
            ry="2.5"
            transform="rotate(-12 38 59)"
          />
          <ellipse cx="50" cy="60" rx="1.5" ry="2.5" />
          <ellipse
            cx="62"
            cy="59"
            rx="1.5"
            ry="2.5"
            transform="rotate(12 62 59)"
          />
          <ellipse
            cx="44"
            cy="72"
            rx="1.2"
            ry="2"
            transform="rotate(-8 44 72)"
          />
          <ellipse
            cx="56"
            cy="72"
            rx="1.2"
            ry="2"
            transform="rotate(8 56 72)"
          />
          <ellipse cx="50" cy="82" rx="1" ry="1.8" />
        </g>
      </svg>
    </div>
  );
}

export default Fresa;
