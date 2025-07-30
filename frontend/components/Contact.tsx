import { useState, useEffect } from 'react'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [flipped, setFlipped] = useState(false)
    const [contactName, setContactName] = useState('')

    useEffect(() => {
    if (flipped) {
      const delay = setTimeout(() => {
        setFlipped(false);
      }, 10000);
      return () => clearTimeout(delay);
    }
  }, [flipped]);

    const postContact = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setFlipped(true)
        setContactName(name)
        setName('')
        setEmail('')
        setMessage('')
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
    }catch (error) {
        console.log(error)
    }

    }
    return (
        <div id = 'contact-page'>
            <div id = 'contact-title'><strong>Contact Us</strong></div>
            <div id = 'contact-box' className = {flipped ? 'flip' : ''}>
            <form id = 'contact-form' onSubmit = {postContact}>
                <input type = 'text' id = 'contact-name' placeholder = 'Name...' required value = {name} onChange = {(e) => setName(e.target.value)}/>
                <input type = 'text' id = 'contact-email' placeholder = 'Email...' required value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                <textarea id = 'contact-message' placeholder = 'Type your message...' required value = {message} onChange = {(e) => setMessage(e.target.value)}/>
                <button type = 'submit' id = 'contact-button'>Submit</button>
            </form>
            <h6 id = 'contact-back'>Hi {contactName}, thanks for contacting us!
We’ve received your message and someone from our team will get back to you shortly. We appreciate your interest and look forward to assisting you.</h6>
            </div>
        </div>
    )
}

export default Contact