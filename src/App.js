import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from './components/ChatFeed'
const  App = () => {
  return (
     <ChatEngine
      height="100vh"
      projectID="8d29e284-8f67-45ae-a395-c83b47e933ae"     
      userName="milan"       
      userSecret="Milan123@"     
      renderChatFeed ={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
     />
  );
} 

export default App;
