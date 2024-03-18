import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiMiniMicrophone } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { CgSmileMouthOpen } from "react-icons/cg";
import Message from "./Message";
import { useEffect, useRef } from "react";
import { useApp } from "../context/AppContext";

function MessageScreen() {
  const inputRef = useRef(null);
  const { selectedContact } = useApp();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div>
      <div className="bg-[#222e35] flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={selectedContact?.image}
              alt=""
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <h4 className="font-semibold">{selectedContact?.userName}</h4>
        </div>

        <div>
          <HiOutlineDotsVertical size={20} className="cursor-pointer" />
        </div>
      </div>

      <div className="message-screen h-[88vh] bg-[#0b141a] relative">
        <div className="max-h-[81vh] overflow-y-scroll">
          <div className="z-40 px-12 py-4 space-y-2 flex flex-col">
            <Message self={false} text>
              Hello world
            </Message>
            <Message self={false} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={false} text>
              Hello world
            </Message>
            <Message self={false} text>
              Hello sjjjjjjjjjjjjjjjjjjdf sdjkfhjksdhfjksdhfjk
              sdhkfjksdhfjksdhfjksd hsdjkfhjksdhfjksdhfjksdhfkjsdhfkjsdhfjksd
              sdjkhfjksdhfjksdhfjksdjkfh world shdfjksdhfjk dshfjksdhfjksd
              dskjhfjksdhfjkds sdhfjksdhfjksd sdhfjsdhfjkds
              sdhfjsdhfjkhjsgdfhgsd dshkfsdj sdkjhfjsdbkjfsd sdfkjsdhkjfh
              sdhfkjdshfjksd sdhfjkhsdkjfh sdhfjksdhfjkd sdhfjhsdjkf
              hsdjfhkjsdhf hsdkjfhjksdhfjksd kjsdhfjksdhfj
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={false} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
            <Message self={true} text>
              Hello world
            </Message>
          </div>
        </div>
        <div className="absolute w-full left-0 bottom-0 bg-[#202c33] flex gap-4 items-center justify-between px-8 py-2">
          <FaPlus size={22} color="#8696a0" className="cursor-pointer" />
          <div className="flex-1 flex items-center bg-[#2a3942] px-4 py-2 rounded-md space-x-2">
            <CgSmileMouthOpen
              size={26}
              color="#8696a0"
              className="cursor-pointer"
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message"
              className="bg-transparent focus:outline-none w-full text-gray-300"
            />
          </div>
          <HiMiniMicrophone
            size={22}
            color="#8696a0"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default MessageScreen;
