export default function Topbar({ children }) {
  return (
    <div className="w-full h-[88px] border-b border-base-300 bg-base-100 flex items-center justify-between px-6">
      {/* Left: Text-based Logo with Gradient */}
      <div className="flex flex-col items-start">
        <h1
          className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-300"
        >
          YoLearn.ai
        </h1>
        <p className="text-xs text-base-content opacity-60 -mt-1">
          Your AI Learning Companion
        </p>
      </div>

      {/* Right: Icons + Theme Selector */}
      <div className="flex items-center gap-6 text-base-content text-xl">
        <i className="ri-notification-2-line cursor-pointer hover:text-primary transition-colors" />
        <i className="ri-settings-3-line cursor-pointer hover:text-primary transition-colors" />
        <i className="ri-user-3-line cursor-pointer hover:text-primary transition-colors" />
        {children}
      </div>
    </div>
  );
}
