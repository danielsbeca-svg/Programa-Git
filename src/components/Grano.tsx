function Grano() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="25px"
        height="20px"
      >
        <defs>
          <linearGradient
            id="cornKernelGrad"
            x1="20%"
            y1="0%"
            x2="80%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#FFE033" />
            <stop offset="45%" stop-color="#FFB703" />
            <stop offset="90%" stop-color="#FB8500" />
            <stop offset="100%" stop-color="#D45D00" />
          </linearGradient>

          <linearGradient id="cornBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF3B0" />
            <stop offset="100%" stop-color="#E2C044" />
          </linearGradient>

          <linearGradient
            id="highlightGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
          </linearGradient>

          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="5"
              flood-color="#000000"
              flood-opacity="0.15"
            />
          </filter>
        </defs>

        <ellipse
          cx="100"
          cy="182"
          rx="35"
          ry="8"
          fill="#000000"
          opacity="0.12"
        />

        <g filter="url(#dropShadow)">
          <path
            d="M 65 55 
             C 65 25, 80 12, 100 12 
             C 120 12, 135 25, 135 55 
             C 135 95, 128 140, 115 168 
             C 110 178, 106 180, 100 180 
             C 94 180, 90 178, 85 168 
             C 72 140, 65 95, 65 55 Z"
            fill="url(#cornKernelGrad)"
          />

          <path
            d="M 67 52 
             C 66 32, 80 15, 100 15 
             C 120 15, 134 32, 133 52 
             C 120 40, 80 40, 67 52 Z"
            fill="url(#highlightGrad)"
          />

          <path
            d="M 86 166 
             C 90 176, 94 180, 100 180 
             C 106 180, 110 176, 114 166 
             C 108 163, 92 163, 86 166 Z"
            fill="url(#cornBaseGrad)"
          />

          <path
            d="M 74 50 
             C 72 75, 76 110, 84 135 
             C 81 120, 77 75, 79 50 
             C 81 40, 75 42, 74 50 Z"
            fill="#FFFFFF"
            opacity="0.4"
          />
        </g>
      </svg>
    </div>
  );
}

export default Grano;
