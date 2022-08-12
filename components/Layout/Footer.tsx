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
        <form onSubmit={handleSubmit} className="pb-20">
          <div className="form-group mb-6">
            <input
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              type="text"
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>  
          <div className="form-group mb-6">
            <input 
              type="email" 
              id="email"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        <div className="form-group mb-6">
          <textarea
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="message"
            rows="3"
            placeholder="Message"
            onChange={e=> setMessage(e.target.value)}
            required        >
          </textarea>
        </div>
        <button 
          type="submit" 
          className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send
          </button>
        </form>
    </div>
  )
}

export default Footer;