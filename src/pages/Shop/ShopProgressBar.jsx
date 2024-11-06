import React, { useState } from 'react';

const progressBars = [
  'Name your shop',
  'Stock your shop',
  "How you'll get paid",
  'Shop security',
];

const ShopProgressBar = ({ toggle }) => {
  const [bars, setBars] = useState(0);

  return (
    <div className="justify-between mb-3 progress-bar">
      {progressBars.map((bar, idx) => (
        <span
          className={`bar ${
            idx + 1 === toggle
              ? 'active-bar'
              : idx + 1 < toggle
              ? 'checked'
              : ''
          }`}
          key={idx}
        >
          {bar}
        </span>
      ))}
    </div>
  );
};

export default ShopProgressBar;
