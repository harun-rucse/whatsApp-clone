import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgSmileMouthOpen } from "react-icons/cg";

function Message({ children, self, text }) {
  return (
    <div
      className={`${
        self ? "self-end flex-row-reverse" : "self-start"
      } flex items-center gap-2 group`}
    >
      <div
        className={`${
          self
            ? "bg-[#005c4b] single-message__right"
            : "bg-[#202c32] single-message__left"
        } max-w-[40rem] rounded-md text-sm relative`}
      >
        {text && (
          <div className="flex">
            <span className="p-2 max-w-[35rem]">{children}</span>
            <span className="p-1 pr-2 self-end text-gray-400 text-[10px] font-bold">
              9:28 PM
            </span>
          </div>
        )}

        <span className="hidden transition group-hover:block absolute top-0 right-2 cursor-pointer">
          <MdOutlineKeyboardArrowDown
            size={24}
            color={self ? "#5b968b" : "#777f83"}
          />
        </span>
      </div>
      <span className="hidden transition group-hover:block cursor-pointer">
        <CgSmileMouthOpen size={24} color="#777f83" />
      </span>
    </div>
  );
}

export default Message;
