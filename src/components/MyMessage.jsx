// const MyMessage = ({message}) =>{
//    // Attachments is an inbuilt property in the message object returned by the ChatEngine API. 
//     if(message?.attachments?.length > 0) //if message is an image. Optional Chaining (?.) message?.attachments ensures that if message is null or undefined, the expression short-circuits and evaluates to undefined instead of throwing an error.    Similarly, message?.attachments?.length ensures that if attachments is null or undefined, the expression short-circuits

//         {
//             return(
//                 <img
//                   src={message.attachments[0].file}
//                   alt="message-attachment"
//                   className="message-image"
//                   style={{float: 'right'}}
//                 />
//             )
//         }
        
//     return(
//         <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
//             {message.text}
//         </div>
//     );
// }
// export default MyMessage;

import React from 'react';

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#075E54' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
