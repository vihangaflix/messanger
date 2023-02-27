import { Message } from "../typing";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { getServerSession } from "next-auth/next";
import { Providers } from "./providers";

async function page() {
  const data = await fetch(`http://localhost:3000/api/getMessages`).then(
    (res) => res.json()
  );

  const messages: Message[] = data.messages;
  const session = await getServerSession();

  console.log(session);
  
  
  
  return (
    <Providers session={session}>
    <main>
      <MessageList initialMessages = {messages}/>
      <ChatInput session={session}/>
    </main>
    </Providers>
  );
}

export default page;
