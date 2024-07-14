import { useState } from "react"
import axios from 'axios';
const LoginForm = () => {
    const [username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const [error,seterror] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "7727204a-0c7a-4a04-b3a6-5f3efb4b8002",
            'User-Name' : username,
            'User-Secret': password
        };

       try{
        await  axios.get('https://api.chatengine.io/chats',{headers: authObject});

         localStorage.setItem('username',username); //local storage mei store krlia
         localStorage.setItem('password',password);

         window.location.reload(); //method in JavaScript is used to reload the current web page

       }catch(error){
           seterror('Data you added is incorrect');
       }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Lets Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                    value={username} 
                    onChange={(e)=> setusername(e.target.value)}
                    className="input" 
                    placeholder="username"
                     required />  {/* required means it cant be empty */}

                    <input type="password" 
                    value={password} 
                    onChange={(e)=> setpassword(e.target.value)}
                    className="input" 
                    placeholder="password"
                     required />  {/* required means it cant be empty */}

                <div align = "center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;