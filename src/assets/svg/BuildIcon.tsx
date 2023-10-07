import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M17.63 7.822a1.542 1.542 0 01-2.174 0l-1.277-1.276a1.542 1.542 0 010-2.175l2.89-2.892a.048.048 0 00-.014-.078c-1.866-.8-4.284-.393-5.82 1.132C9.765 3.992 9.682 6.185 10.22 8.1a1.535 1.535 0 01-.435 1.541l-8.006 7.311a2.314 2.314 0 103.268 3.268l7.393-8.025a1.535 1.535 0 011.519-.438c1.9.508 4.062.413 5.512-1.019 1.561-1.537 1.898-4.255 1.142-5.81a.048.048 0 00-.058-.025.048.048 0 00-.02.012L17.63 7.822z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
