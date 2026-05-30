import { useState } from "react";

export default function PageTransition({ children }) {
  const [visible] = useState(true);

  return (
    <div
      className={`
        opacity-0 translate-y-3
        animate-[fadeInUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]
      `}
    >
      {children}
    </div>
  );
}