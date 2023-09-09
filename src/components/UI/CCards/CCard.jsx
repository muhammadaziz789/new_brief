export function CCard({ classes, width = "500", children }) {
  return (
    <div
      className={`bg-white border border-borderDarker p-5 rounded-[10px] w-full ${classes}`}
      style={{ width: width }}
    >
      {children}
    </div>
  );
}
