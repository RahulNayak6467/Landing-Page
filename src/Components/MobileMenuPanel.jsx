import { useEffect } from "react";
import { X, CircleAlert, Joystick, Trophy, Users, Send } from "lucide-react";

const items = [
  { label: "About", href: "#about", Icon: CircleAlert },
  { label: "Projects", href: "#projects", Icon: Joystick },
  { label: "Events", href: "#events", Icon: Trophy },
  { label: "Teams", href: "#teams", Icon: Users },
  { label: "Contact", href: "#CTA", Icon: Send },
];

export default function MobileMenuPanel({ open, onClose }) {
  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  if (!open) return null;
  return (
    <div
      className={[
        "fixed inset-0 z-[99] transition backdrop-blur-lg ",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className={[
          "absolute inset-0 bg-black/70 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* Panel */}
      <aside
        className={[
          "absolute right-0 top-0 h-full w-[80vw] max-w-[360px]",
          "bg-black border-r border-fuchsia-500/20",
          "px-5 pt-6",
          "transition-transform transition-all duration-300 will-change-transform",
          open
            ? "translate-x-0  shadow-[20px_50px_100px_20px_rgba(168,85,247,0.80)]"
            : "-translate-x-full ",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onClose()}
              className="rounded-xl -ml-2 cursor-pointer p-2 border border-fuchsia-500/20 bg-zinc-950/60 text-white/80 hover:bg-zinc-900/50 transition"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        {/* Links */}
        <nav className="mt-10">
          <ul className="flex flex-col gap-6">
            {items.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={onClose}
                  className="flex items-center gap-4"
                >
                  <Icon size={20} className="text-white/70" />
                  <span className="gradientText font-semibold text-xl ">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
