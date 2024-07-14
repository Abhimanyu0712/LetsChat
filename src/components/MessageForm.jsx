// import React, { useState } from 'react';
// import { fetchWithExponentialBackoff } from '../utils'; // Assuming utils.js is in the parent directory

// const MessageForm = (props) => {
//   const [message, setMessage] = useState('');
//   const { chatId } = props;

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const text = message.trim();

//     if (text.length > 0) {
//       try {
//         await fetchWithExponentialBackoff(
//           `https://api.chatengine.io/chats/${chatId}/messages/`,
//           {
//             method: 'POST',
//             headers: {
//               'Project-ID': '7727204a-0c7a-4a04-b3a6-5f3efb4b8002',
//               'User-Name': 'Abhimanyu',
//               'User-Secret': '1234',
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text })
//           }
//         );
//       } catch (error) {
//         console.error('Error sending message:', error);
//         if (error.response && error.response.status === 429) {
//           alert('You are being rate-limited. Please wait before sending more messages.');
//         }
//       }
//     }

//     setMessage('');
//   };
    
//   return (
//     <form onSubmit={handleSubmit} className="message-form">
//       <input
//         className="message-input"
//         placeholder="Send a message..."
//         // value={value}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit" className="send-button">Send</button>
//     </form>
//   );
// };

// export default MessageForm;

//async wala

import React, { useState } from 'react';
import { sendMessage , isTyping } from 'react-chat-engine';
// import {debounce} from 'lodash';
import {SendOutlined, PictureOutlined} from '@ant-design/icons'

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId , creds} = props;

  const handleSubmit = async (event) => {
  // const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      
      sendMessage(creds,chatId,{text});
    }

    setValue('');
  };
    
  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleUpload = (event) =>{
    sendMessage(creds,chatId,{files: event.target.files, text: ''})
  }
  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor = "upload-button">
        <span className="image-button">
            <PictureOutlined className='picture-icon'/>
        </span>

      </label>
      <input
         type="file"
         multiple={false}
         id="upload-button"
         style={{display: 'none'}}
         onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        <SendOutlined className='send-icon'/>
        </button>
    </form>
  );
};

export default MessageForm;

// import React, { useState } from 'react';
// import { sendMessage, isTyping } from 'react-chat-engine';
// import { PictureOutlined, SendOutlined } from '@ant-design/icons';

// // Debounce function to throttle the isTyping calls
// const debounce = (func, wait) => {
//     let timeout;
//     return function(...args) {
//         const context = this;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(context, args), wait);
//     };
// };

// const MessageForm = (props) => {
//     const [value, setValue] = useState('');
//     const { chatId, creds } = props;

//     // Using debounce for isTyping to reduce the number of requests
//     const debouncedIsTyping = debounce(() => isTyping(props, chatId), 300);

//     const handleChange = (event) => {
//         setValue(event.target.value);
//         debouncedIsTyping();
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const text = value.trim();
//         if (text.length > 0) {
//             sendMessage(creds, chatId, { text });
//         }
//         setValue('');
//     };

//     const handleUpload = (event) => {
//         sendMessage(creds, chatId, { files: event.target.files, text: '' });
//     };

//     return (
//         <form className="message-form" onSubmit={handleSubmit}>
//             <input 
//                 className="message-input"
//                 placeholder="Send a message..."
//                 value={value}
//                 onChange={handleChange}
//                 onSubmit={handleSubmit}
//             />
//             <label htmlFor="upload-button">
//                 <span className="image-button">
//                     <PictureOutlined className="picture-icon" />
//                 </span>
//             </label>
//             <input 
//                 type="file"
//                 multiple={false}
//                 id="upload-button"
//                 style={{ display: 'none' }}
//                 onChange={handleUpload}
//             />
//             <button type="submit" className="send-button">
//                 <SendOutlined className="send-icon" />
//             </button>
//         </form>
//     );
// }

// export default MessageForm;