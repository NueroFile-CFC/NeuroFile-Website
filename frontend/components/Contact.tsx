import { useState } from 'react'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [flipped, setFlipped] = useState(false)

    const postContact = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
        const response = await fetch(`${import.meta.env.VITE_RENDER_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        if(!response.ok) {
            throw new Error ('response failed')
        }
        const data = await response.json()
        console.log(data)
         setFlipped(true)
        setName('')
        setEmail('')
        setMessage('')
    }catch (error) {
        console.log(error)
    }

    }
    return (
        <div id = 'contact-page'>
            <div id = 'contact-box' className = {flipped ? 'flip' : ''}>
            <form id = 'contact-form' onSubmit = {postContact}>
                <input type = 'text' id = 'contact-name' placeholder = 'Name...' value = {name} onChange = {(e) => setName(e.target.value)}/>
                <input type = 'text' id = 'contact-email' placeholder = 'Email...' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                <textarea id = 'contact-message' placeholder = 'Type your message...' value = {message} onChange = {(e) => setMessage(e.target.value)}/>
                <button type = 'submit' id = 'contact-button'>Submit</button>
            </form>
            <h1 id = 'contact-title'>Contact Us</h1>
            </div>
        </div>
    )
}

export default Contact