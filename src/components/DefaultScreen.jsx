import { FaLock } from "react-icons/fa";

function DefaultScreen() {
  return (
    <div className="w-full h-full bg-[#222e35] flex flex-col gap-10 justify-center items-center relative">
      <img src="/images/hero.png" alt="" className="w-[38%]" />
      <h3 className="text-4xl font-thin">Download WhatsApp for windows</h3>
      <p className="text-sm text-gray-400 text-center w-[45%] -mt-4">
        Make calls, share your screen and get a faster experience when you
        download the Windows app.
      </p>
      <button className="bg-[#00a884] transition hover:bg-[#06cf9c] text-gray-800 text-sm font-bold px-6 py-[0.6rem] rounded-3xl">
        Get from Microsoft Store
      </button>
      <p className="flex items-center gap-2 text-gray-500 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-6">
        <FaLock size={12} />
        <span className="text-sm">
          Your personal messages are end-to-end encrypted
        </span>
      </p>
    </div>
  );
}

export default DefaultScreen;
