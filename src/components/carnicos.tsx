import styleIcon from "../styles/IconsMenu.module.css";

function Carnicos() {
  return (
    <div className={styleIcon["size"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="25"
        height="20"
      >
        <ellipse cx="52" cy="85" rx="30" ry="6" fill="#000000" opacity="0.15" />

        <path
          d="M 32,38 
           C 28,30 20,20 23,16 
           C 25,13 29,14 32,18 
           C 35,22 39,26 42,32 Z"
          fill="#F5F5DC"
          stroke="#D7CCC8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <circle
          cx="24"
          cy="16"
          r="3.5"
          fill="#EEEEEE"
          stroke="#D7CCC8"
          strokeWidth="1"
        />
        <circle
          cx="28"
          cy="14"
          r="3"
          fill="#EEEEEE"
          stroke="#D7CCC8"
          strokeWidth="1"
        />

        <path
          d="M 32,38 
           C 28,48 28,62 38,76 
           C 48,88 68,88 80,78 
           C 88,70 88,52 82,42 
           C 74,30 58,28 42,32 
           C 36,33 34,35 32,38 Z"
          fill="#FFF8E1"
          stroke="#FFE082"
          strokeWidth="1.5"
        />

        <path
          d="M 35,40 
           C 31,48 31,60 40,73 
           C 49,84 66,84 76,75 
           C 83,68 83,52 78,44 
           C 71,33 57,31 43,35 
           C 38,36 36,38 35,40 Z"
          fill="#B71C1C"
        />

        <path
          d="M 40,73 
           C 49,84 66,84 76,75 
           C 83,68 83,52 78,44 
           C 75,55 60,70 40,73 Z"
          fill="#880E4F"
          opacity="0.4"
        />

        <g
          stroke="#3E2723"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        >
          <line x1="42" y1="42" x2="65" y2="38" />
          <line x1="40" y1="52" x2="73" y2="46" />
          <line x1="42" y1="62" x2="77" y2="55" />
          <line x1="48" y1="72" x2="72" y2="66" />
        </g>

        <path
          d="M 46,46 Q 50,48 48,52"
          fill="none"
          stroke="#FFCDD2"
          strokeWidth="1"
          opacity="0.6"
          strokeLinecap="round"
        />
        <path
          d="M 60,56 Q 64,60 62,64"
          fill="none"
          stroke="#FFCDD2"
          strokeWidth="1"
          opacity="0.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default Carnicos;
