import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className="w-full max-w-[105rem] mx-auto h-full flex justify-center">
      <Sidebar />

      <main className="w-[70%] bg-[#222e35]">{children}</main>
    </div>
  );
}

export default AppLayout;
