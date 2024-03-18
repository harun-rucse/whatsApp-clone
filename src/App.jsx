import AppLayout from "./components/AppLayout";
import DefaultScreen from "./components/DefaultScreen";
import MessageScreen from "./components/MessageScreen";
import { useApp } from "./context/AppContext";

export default function App() {
  const { selectedContact } = useApp();

  return (
    <div className="w-screen h-[95vh]">
      <AppLayout>
        {selectedContact ? <MessageScreen /> : <DefaultScreen />}
      </AppLayout>
    </div>
  );
}
