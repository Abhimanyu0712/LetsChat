// import {ChatEngine} from 'react-chat-engine';
// import  ChatFeed  from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import './App.css';

// const App = () =>{

//     if(!localStorage.getItem('username')) //agr locak storage mei username pass nhi hoga toh ye login form dikayga dobara
//         return <LoginForm/>
//     return (
//         <ChatEngine
//            height="100vh"
//            projectID="7727204a-0c7a-4a04-b3a6-5f3efb4b8002" //generated from chatengine API
//            userName={localStorage.getItem('username')}
//            userSecret={localStorage.getItem('password')}
           
//         //    userName="Vishal"
//         //    userSecret="1357" //password
//         //    userName="Pratham"
//         //    userSecret="5678" //password
//            renderChatFeed={(chatAppProps)=><ChatFeed { ...chatAppProps}/>} //...chatAppProps is known as the spread operator in JavaScript. It is used to spread the properties of an object into another object or to pass them as individual props to a component.
//         />
//     );
// }
// export default App;
// import React from 'react';
// import { ChatEngine } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import './App.css';

// const App = () => {
//   if (!localStorage.getItem('username')) return <LoginForm />

//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     localStorage.removeItem('password');
//     window.location.reload();
//   };

//   const renderOptionsSettings = (creds, chat) => {
//     return (
//       <div className="options-section">
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//     );
//   };

//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="7727204a-0c7a-4a04-b3a6-5f3efb4b8002"
//       userName={localStorage.getItem('username')}
//       userSecret={localStorage.getItem('password')}
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//       renderOptionsSettings={renderOptionsSettings}
//       onFailAuth={(error) => {
//         console.error('Authentication failed', error);
//         localStorage.removeItem('username');
//         localStorage.removeItem('password');
//         window.location.reload();
//       }}
//       onFailSocket={(error) => {
//         console.error('WebSocket connection failed', error);
//         // Implement retry logic or inform the user about the connection issue
//       }}
//     />
//   );
// }

// export default App;


import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();
  };

  const renderOptionsSettings = (creds, chat) => {
    console.log('renderOptionsSettings called', creds, chat); // Debug log
    return (
      <div className="options-section">
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    );
  };

  return (
    <ChatEngine
      height="100vh"
      projectID="7727204a-0c7a-4a04-b3a6-5f3efb4b8002"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderOptionsSettings={renderOptionsSettings}
      onFailAuth={(error) => {
        console.error('Authentication failed', error);
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.reload();
      }}
      onFailSocket={(error) => {
        console.error('WebSocket connection failed', error);
        // Implement retry logic or inform the user about the connection issue
      }}
    />
  );
}

export default App;
