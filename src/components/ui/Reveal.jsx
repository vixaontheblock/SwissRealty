import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Reveal({ children }) {
  const visible = useScrollReveal();

  return (
    <div
      className={`
        transition-all duration-700 ease-[var(--ease-ios)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  );
}