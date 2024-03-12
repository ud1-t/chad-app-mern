

const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt='Tailwind CSS chat bubble component' src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"/>
                
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>What's up? GigaNigga</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-4 items-center`}>8:99</div>
    </div>
  )
}

export default Message


// STARTER CODE FOR Message COMPONENT


// const Message = () => {
//     return (
//       <div className="chat chat-end">
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                   <img alt='Tailwind CSS chat bubble component' src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"/>
                  
//               </div>
//           </div>
//           <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's upp?</div>
//           <div className={`chat-footer opacity-50 text-xs flex gap-4 items-center`}>12: 42</div>
//       </div>
//     )
//   }
  
//   export default Message
