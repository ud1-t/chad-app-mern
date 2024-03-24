import { useSocketContext } from '../../context/SocketContext'
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation, lastIdx, emoji}) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  const {onlineUsers} =useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-primary rounded p-2 py-1 cursor-pointer
          ${isSelected ? "bg-primary" : ""}
        `}
          onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${ isOnline ? "online" : ""} `}>
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-medium text-gray-300">{conversation.fullName}</p>
                    <span className="text-xl">{emoji}</span>
                </div>
            </div>
        </div>

        {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  )
}

export default Conversation



  // STARTER CODE FOR SearchInput COMPONENT

//   const Conversation = () => {
//     return (
//       <>
//           <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//               <div className="avatar online">
//                   <div className="w-12 rounded-full">
//                       <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdudewipes.com%2Fblogs%2Fdude-blog%2Fgiga-chad-meme&psig=AOvVaw1DbFepCM1o6agQu1J6jSRE&ust=1710349401607000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiE-5Wa74QDFQAAAAAdAAAAABAE" alt="user avatar" />
//                   </div>
//               </div>
  
//               <div className="flex flex-col flex-1">
//                   <div className="flex gap-3 justify-between">
//                       <p className="font-bold text-gray-200">Giga Chad</p>
//                       <span className="text-xl">☠️</span>
//                   </div>
//               </div>
//           </div>
  
//           <div className="divider my-0 py-0 h-1" />
//       </>
//     )
//   }
  
//   export default Conversation
