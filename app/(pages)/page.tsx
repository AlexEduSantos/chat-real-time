import { RealtimeChat } from "@/_components/realtime-chat";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 p-2">
      <div className="backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 relative overflow-hidden w-[80%] max-h-[90%]">
        <RealtimeChat roomName="my-chat-room" username="john_doe" />
      </div>
    </div>
  );
}
