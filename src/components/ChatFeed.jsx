// // // import React from 'react';
// // // import MessageForm from "./MessageForm";
// // // import MyMessage from "./MyMessage";
// // // import TheirMessage from "./TheirMessage";
// // // // import { fetchWithExponentialBackoff } from '../utils'; // Assuming utils.js is in the parent directory

// // // const ChatFeed = (props) => {
// // //   const { chats, activeChat, userName, messages } = props;

// // //   const chat = chats && chats[activeChat];

// // // //   const renderReadReceipts = (message , isMyMessage) => {
// // // //     return chat.people.map((person,index) => person.last_read === message.id && (
// // // //         <div
// // // //           key={`read_${index}`}
// // // //           className="read-receipt"
// // // //           style={{
// // // //               float: isMyMessage ? 'right' : 'left',
// // // //               backgroundImage: `url(${person?.person?.avatar})`
// // // //           }}
// // // //         />
// // // //     ))
// // // //   }

  
  
  
// // //   const renderMessages = () => {
// // //     const keys = Object.keys(messages);

// // //     return keys.map((key, index) => {
// // //       const message = messages[key];
// // //       const lastMessageKey = index === 0 ? null : keys[index - 1];
// // //       const isMyMessage = userName === message.sender.username;

// // //       return (
// // //         <div key={`msg_${index}`} style={{ width: '100%' }}>
// // //           <div className="message-block">
// // //             {
// // //               isMyMessage
// // //               ? <MyMessage message={message} />
// // //               : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
// // //             }
// // //           </div>
// // //           <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
// // //              {renderReadReceipts(message,isMyMessage)}
// // //           </div>
// // //         </div>
// // //       );
// // //     });
// // //   };

// // //   if (!chat) return 'Loading...';

// // //   return (
// // //     <div className="chat-feed">
// // //       <div className="chat-title-container">
// // //         <div className="chat-title">{chat.title}</div>
// // //         <div className="chat-subtitle">{chat.people.map((person) => ` ${person.person.username}`)}</div>
// // //       </div>
// // //       {renderMessages()}
// // //       <div style={{ height: '100px' }} />
// // //       <div className="message-form-container">
// // //         <MessageForm {...props} chatId={activeChat} />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ChatFeed;
// // import React from 'react';
// // import MessageForm from "./MessageForm";
// // import MyMessage from "./MyMessage";
// // import TheirMessage from "./TheirMessage";

// // const ChatFeed = (props) => {
// //   const { chats, activeChat, userName, messages } = props;

// //   const chat = chats && chats[activeChat];

// //   const renderReadReceipts = (message, isMyMessage) => {
// //     return chat.people.map((person, index) => {
// //       console.log(`Checking person: ${person.person.username}, last read message ID: ${person.last_read}`);
// //       if (person.last_read === message.id) {
// //         console.log(`Person ${person.person.username} has read the message`);
// //         return (
// //           <div
// //             key={`read_${index}`}
// //             className="read-receipt"
// //             style={{
// //               float: isMyMessage ? 'right' : 'left',
// //               backgroundImage: `url(${person.person.avatar})`,
// //               marginLeft: isMyMessage ? '0px' : '5px',
// //               marginRight: isMyMessage ? '5px' : '0px'
// //             }}
// //           />
// //         );
// //       }
// //       return null;
// //     }).filter(Boolean); // Ensure only non-null elements are kept
// //   };

// //   const renderMessages = () => {
// //     const keys = Object.keys(messages);

// //     return keys.map((key, index) => {
// //       const message = messages[key];
// //       const lastMessageKey = index === 0 ? null : keys[index - 1];
// //       const isMyMessage = userName === message.sender.username;

// //       return (
// //         <div key={`msg_${index}`} style={{ width: '100%' }}>
// //           <div className="message-block">
// //             {
// //               isMyMessage
// //                 ? <MyMessage message={message} />
// //                 : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
// //             }
// //           </div>
// //           <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
// //             {renderReadReceipts(message, isMyMessage)}
// //           </div>
// //         </div>
// //       );
// //     });
// //   };

// //   if (!chat) return 'Loading...';

// //   return (
// //     <div className="chat-feed">
// //       <div className="chat-title-container">
// //         <div className="chat-title">{chat.title}</div>
// //         <div className="chat-subtitle">{chat.people.map((person) => ` ${person.person.username}`)}</div>
// //       </div>
// //       {renderMessages()}
// //       <div style={{ height: '100px' }} />
// //       <div className="message-form-container">
// //         <MessageForm {...props} chatId={activeChat} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatFeed;

// import React from 'react';
// import MessageForm from "./MessageForm";
// import MyMessage from "./MyMessage";
// import TheirMessage from "./TheirMessage";

// const ChatFeed = (props) => {
//   const { chats, activeChat, userName, messages } = props;

//   const chat = chats && chats[activeChat];
//   const renderReadReceipts = (message, isMyMessage) => {
//     const readReceipts = chat.people
//       .filter(person => person.last_read === message.id)
//       .map((person, index) => (
//         <div
//           key={`read_${index}`}
//           className="read-receipt"
//           style={{
//             float: isMyMessage ? 'right' : 'left',
//             backgroundImage: `url(${person.person.avatar})`,
//             marginLeft: isMyMessage ? '0px' : '5px',
//             marginRight: isMyMessage ? '5px' : '0px'
//           }}
//         />
//       ));
//     return readReceipts;
//   };
  
//   // const renderReadReceipts = (message, isMyMessage) => {
//   //   console.log("Rendering read receipts for message:", message);
//   //   return chat.people.map((person, index) => {
//   //     console.log("Checking person:", person);
//   //     if (person.last_read === message.id) {
//   //       console.log(`Person ${person.person.username} has read the message`);
//   //       return (
//   //         <div
//   //           key={`read_${index}`}
//   //           className="read-receipt"
//   //           style={{
//   //             float: isMyMessage ? 'right' : 'left',
//   //             backgroundImage: `url(${person.person.avatar})`,
//   //             marginLeft: isMyMessage ? '0px' : '5px',
//   //             marginRight: isMyMessage ? '5px' : '0px'
//   //           }}
//   //         />
//   //       );
//   //     }
//   //     return null;
//   //   }).filter(Boolean);
//   // };

//   const renderMessages = () => {
//     const keys = Object.keys(messages);

//     return keys.map((key, index) => {
//       const message = messages[key];
//       const lastMessageKey = index === 0 ? null : keys[index - 1];
//       const isMyMessage = userName === message.sender.username;

//       return (
//         <div key={`msg_${index}`} style={{ width: '100%' }}>
//           <div className="message-block">
//             {
//               isMyMessage
//                 ? <MyMessage message={message} />
//                 : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
//             }
//           </div>
//           <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
//             {renderReadReceipts(message, isMyMessage)}
//           </div>
//         </div>
//       );
//     });
//   };

//   if (!chat) return 'Loading...';

//   return (
//     <div className="chat-feed">
//       <div className="chat-title-container">
//         <div className="chat-title">{chat.title}</div>
//         <div className="chat-subtitle">{chat.people.map((person) => ` ${person.person.username}`)}</div>
//       </div>
//       {renderMessages()}
//       <div style={{ height: '100px' }} />
//       <div className="message-form-container">
//         <MessageForm {...props} chatId={activeChat} />
//       </div>
//     </div>
//   );
// };

// export default ChatFeed;

// source code wala
// import MyMessage from './MyMessage';
// import TheirMessage from './TheirMessage';
// import MessageForm from './MessageForm';

// const ChatFeed = (props) => {
//   const { chats, activeChat, userName, messages } = props;

//   const chat = chats && chats[activeChat];

//   const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
//     <div
//       key={`read_${index}`}
//       className="read-receipt"
//       style={{
//         float: isMyMessage ? 'right' : 'left',
//         backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
//       }}
//     />
//   ));

//   const renderMessages = () => {
//     const keys = Object.keys(messages);

//     return keys.map((key, index) => {
//       const message = messages[key];
//       const lastMessageKey = index === 0 ? null : keys[index - 1];
//       const isMyMessage = userName === message.sender.username;

//       return (
//         <div key={`msg_${index}`} style={{ width: '100%' }}>
//           <div className="message-block">
//             {isMyMessage
//               ? <MyMessage message={message} />
//               : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
//           </div>
//           <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
//             {renderReadReceipts(message, isMyMessage)}
//           </div>
//         </div>
//       );
//     });
//   };

//   if (!chat) return <div />;

//   return (
//     <div className="chat-feed">
//       <div className="chat-title-container">
//         <div className="chat-title">{chat?.title}</div>
//         <div className="chat-subtitle">
//           {chat.people.map((person) => ` ${person.person.username}`)}
//         </div>
//       </div>
//       {renderMessages()}
//       <div style={{ height: '100px' }} />
//       <div className="message-form-container">
//         <MessageForm {...props} chatId={activeChat} />
//       </div>
//     </div>
//   );
// };

// export default ChatFeed;


import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => {
      if (person.last_read === message.id) {
        return (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? 'right' : 'left',
              backgroundImage: `url(${person.person.avatar})`,
              marginLeft: isMyMessage ? '0px' : '5px',
              marginRight: isMyMessage ? '5px' : '0px'
            }}
          />
        );
      }
      return null;
    }).filter(Boolean);
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {
              isMyMessage
                ? <MyMessage message={message} />
                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return 'Loading...';

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">{chat.people.map((person) => ` ${person.person.username}`)}</div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
