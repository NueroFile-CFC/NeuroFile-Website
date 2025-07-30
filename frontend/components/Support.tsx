import { useState, type KeyboardEvent } from "react"
const Support = () => {
    const [usersMessages, setUsersMessages] = useState<string[]>([])
    // const [airesponse, setAiResponse] = useState<string>('')
    const [message, setMessage] = useState<string>('')


    const postMessages = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setUsersMessages(prev => [...prev, message, 'loading...'])
        setMessage('')
            try {
                const response = await fetch(`${import.meta.env.VITE_RENDER_URL}/api/messages`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message })
                })
                if (!response.ok) {
                    throw new Error ('response failed')
                }
                const data = await response.json()
                console.log(data)
                  setUsersMessages(prev => {
      const updated = [...prev];
      updated[updated.length - 1] = data;
      return updated;
    });

            } catch(error) {
                console.log(error)
            }
    }


    return (
        <div id = 'support-page'>
            <h1 id = 'support-title'>How can we help you ?</h1>
            <div id = 'support-chatroom'>
                <div id = 'support-user'>
                    {usersMessages.map((value, index) => {
                        if(index % 2 === 0) {
                            setTimeout(() => {
                               return value
                            }, 1000)
                        }
                        const loading = value === 'loading...';
                        return (
                        <div id = 'support-user-message'
                         style = {{
                            alignSelf: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            color: index % 2 === 0 ? '#1893D4' : '#FFFFFF',
                            border: index % 2 === 0 ? '1px solid #1893D4' : '1px solid #FFFFFF',
                            backgroundColor: 'black',
                            animation: index % 2 === 0 ? 'fadeInUp 0s ease-in-out' : 'fadeInUp 1s ease-in-out 0s',
                            fontSize: '1vw'
                        }}
                         key = {index}>{index % 2 === 0 ? value : <div className = 'support-talk' style = {{
                             color: loading ? '#14ECFC' : 'white',
                            animation: loading ? 'spin 1s ease-in-out forwards infinite': 'none',
                             alignItems: 'start',
                            fontSize: '1vw'
                            }}>{loading ? '': <img id = 'support-image' src = '/Logo.png'/>}<h5>{value}</h5></div>}</div>
                    )
})}
                    {/* {user.map((text, index) => (
                        <div id = 'support-user-messages' key = {index} style = {{ 
                            justifyContent: index % 2 === 1 ? 'flex-start' : 'flex-end',
                            color:  index % 2 === 1 ? '#FFFFFF' : '#1893D4'
                        }}>
                        <h5 id = 'support-user-box' >{text}</h5>
                        </div>
                    ))} */}
                </div>
                {/* <div id = 'support-response'>
                    {airesponse.map((value, index) => (
                        <h5 id = 'support-user-message' key = {index}>{value}</h5>
                    ))}
                </div> */}
            </div>
            <form id = 'support-form'>
            <textarea 
            id = 'support-text'
             placeholder = 'Having trouble? type it here...'
              onChange = {(e) => setMessage(e.target.value)}
              value = {message}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                postMessages(e)
                }
             }}
              />
                <button type="submit" style = {{display: 'none'}}>Send</button>
            </form>
        </div>
    )
}
export default Support