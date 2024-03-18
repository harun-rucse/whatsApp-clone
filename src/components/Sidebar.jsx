import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import SidebarItem from "./SidebarItem";

const data = [
  {
    image: "/images/user.jpeg",
    userName: "Juwel F",
    lastMessage: "Hello world nayok",
    time: "4:00 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Jahid F",
    lastMessage: "Nice...",
    time: "4:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Shaon F",
    lastMessage: "Bibahito bachelor",
    time: "5:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Juwel F",
    lastMessage: "Hello world nayok",
    time: "4:00 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Jahid F",
    lastMessage: "Nice...",
    time: "4:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Shaon F",
    lastMessage: "Bibahito bachelor",
    time: "5:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Juwel F",
    lastMessage: "Hello world nayok",
    time: "4:00 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Jahid F",
    lastMessage: "Nice...",
    time: "4:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Shaon F",
    lastMessage: "Bibahito bachelor",
    time: "5:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Juwel F",
    lastMessage: "Hello world nayok",
    time: "4:00 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Jahid F",
    lastMessage: "Nice...",
    time: "4:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Shaon F",
    lastMessage: "Bibahito bachelor",
    time: "5:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Juwel F",
    lastMessage: "Hello world nayok",
    time: "4:00 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Jahid F",
    lastMessage: "Nice...",
    time: "4:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Shaon F",
    lastMessage: "Bibahito bachelor",
    time: "5:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Juwel F",
    lastMessage: "Hello world nayok",
    time: "4:00 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Jahid F",
    lastMessage: "Nice...",
    time: "4:30 PM",
  },
  {
    image: "/images/user.jpeg",
    userName: "Shaon F",
    lastMessage: "Bibahito bachelor",
    time: "5:30 PM",
  },
];

function Sidebar() {
  return (
    <aside className="w-[30%] bg-[#111b21]">
      <div className="bg-[#202c33] flex justify-between items-center px-4 py-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/images/user.jpeg"
            alt=""
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <div>
          <HiOutlineDotsVertical size={20} className="cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center gap-4 bg-[#202c33] rounded-md mx-4 my-2 px-5 py-2">
        <HiOutlineMagnifyingGlass size={16} />
        <input
          type="text"
          placeholder="Search or start new chat"
          className="bg-transparent w-full focus:outline-none text-sm"
        />
      </div>

      <div className="border-t border-gray-700 max-h-[82vh] overflow-y-scroll">
        {data.map((contact, i) => (
          <SidebarItem
            key={i}
            image={contact.image}
            userName={contact.userName}
            lastMessage={contact.lastMessage}
            time={contact.time}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
