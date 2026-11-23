import styleIcon from "../styles/IconsMenu.module.css";

function verdura() {
  return (
    <div className={styleIcon["size"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="25"
        height="20"
      >
        <path
          d="M 40,60 
           C 40,75 35,85 35,90 
           L 65,90 
           C 65,85 60,75 60,60 
           C 60,55 40,55 40,60 Z"
          fill="#8BC34A"
          stroke="#689F38"
          strokeWidth="1.5"
        />

        <g fill="#4CAF50" stroke="#388E3C" strokeWidth="1.5">
          <circle cx="50" cy="35" r="20" />

          <circle cx="35" cy="45" r="15" />
          <circle cx="65" cy="45" r="15" />
          <circle cx="30" cy="28" r="12" />
          <circle cx="70" cy="28" r="12" />
          <circle cx="50" cy="18" r="12" />
        </g>

        <g fill="#388E3C" opacity="0.3">
          <circle cx="45" cy="30" r="2" />
          <circle cx="55" cy="38" r="2.5" />
          <circle cx="35" cy="42" r="2" />
          <circle cx="65" cy="48" r="2" />
          <circle cx="50" cy="22" r="1.5" />
          <circle cx="32" cy="30" r="1.8" />
        </g>
      </svg>
    </div>
  );
}

export default verdura;
