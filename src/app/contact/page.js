'use client'
import React, { useState } from 'react';

//All need to be redone

function Contact() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 const handleOnChange = (event) => {
   const { id, value } = event.target;
   switch (id) {
     case 'name':
       setName(value);
       break;
     case 'email':
       setEmail(value);
       break;
     case 'message':
       setMessage(value);
       break;
     default:
       break;
   }
 };

 const handleOnSubmit = (event) => {
   event.preventDefault();
   console.log({ name, email, message });
 };

 return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2">
     <form
       onSubmit={handleOnSubmit}
       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
     >
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
           Name
         </label>
         <input
           id="name"
           name="name"
           value={name}
           onChange={handleOnChange}
           className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         />
       </div>

       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
           Email
         </label>
         <input
           id="email"
           name="email"
           value={email}
           onChange={handleOnChange}
           className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         />
       </div>

       <div className="mb-6">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
           Message
         </label>
         <textarea
           id="message"
           name="message"
           value={message}
           onChange={handleOnChange}
           className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         />
       </div>

       <div className="flex items-center justify-between">
         <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           type="submit"
         >
           Submit
         </button>
       </div>
     </form>
   </div>
 );
}

export default Contact;
