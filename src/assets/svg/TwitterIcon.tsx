import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="32"
      fill="none"
      viewBox="0 0 30 32"
    >
      <path
        fill="#F3F3F3"
        d="M14.696 0C6.61 0 .054 7.164.054 16S6.61 32 14.696 32c8.087 0 14.643-7.164 14.643-16S22.783 0 14.696 0zm7.037 12.06c.01.169.01.344.01.515 0 5.243-3.654 11.282-10.331 11.282-2.06 0-3.968-.653-5.576-1.778.294.035.575.05.876.05 1.7 0 3.261-.629 4.507-1.693-1.595-.036-2.935-1.179-3.393-2.75.559.089 1.062.089 1.638-.072a3.59 3.59 0 01-2.09-1.38 4.197 4.197 0 01-.816-2.513v-.05c.48.297 1.046.479 1.637.504a3.866 3.866 0 01-1.187-1.429 4.265 4.265 0 01-.43-1.871c0-.74.176-1.414.493-2a10.535 10.535 0 003.339 2.943 9.628 9.628 0 004.146 1.203c-.513-2.696 1.33-4.878 3.546-4.878 1.046 0 1.988.478 2.651 1.25a6.812 6.812 0 002.304-.954c-.271.918-.84 1.693-1.595 2.182a6.707 6.707 0 002.092-.617 8.035 8.035 0 01-1.82 2.057z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);