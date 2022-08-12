import {useState} from "react";


function Footer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        const data = {
            name,
            email,
            message
        }
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="textarea"
            rows="3"
            onChange={e=> setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Footer;