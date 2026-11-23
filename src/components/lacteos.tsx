import styleIcon from "../styles/IconsMenu.module.css";

function lacteos() {
  return (
    <div className={styleIcon["size"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="25"
        height="20"
      >
        <path
          d="M 40,15 
           L 60,15 
           C 65,15 68,18 68,23 
           L 68,85 
           C 68,90 65,93 60,93 
           L 40,93 
           C 35,93 32,90 32,85 
           L 32,23 
           C 32,18 35,15 40,15 Z"
          fill="#FFFFFF"
          stroke="#CCCCCC"
          strokeWidth="2"
        />

        <rect x="38" y="7" width="24" height="8" rx="3" ry="3" fill="#607D8B" />
        <rect
          x="42"
          y="2"
          width="16"
          height="5"
          rx="1.5"
          ry="1.5"
          fill="#607D8B"
        />

        <rect x="32" y="45" width="36" height="25" fill="#BBDEFB" />

        <path
          d="M 50,52 
           C 54,52 57,55 57,59 
           C 57,63 54,66 50,66 
           C 46,66 43,63 43,59 
           C 43,55 46,52 50,52 Z"
          fill="#FFFFFF"
        />
        <path
          d="M 50,52 L 50,52 C 50,52 48,56 48,59 L 52,59 C 52,56 50,52 50,52 Z"
          fill="#FFFFFF"
        />

        <line
          x1="32"
          y1="28"
          x2="68"
          y2="28"
          stroke="#CCCCCC"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
      </svg>
    </div>
  );
}

export default lacteos;
