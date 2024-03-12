import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
        {noChatSelected ? <NoChatSelected /> : (
          <>
          {/* Header */}
              <div className="bg-black-800 px-4 py-2 mb-2 backdrop-filter backdrop-blur-md bg-opacity-0">
                  <span className="label-text">To:</span>
                  <span className="text-white font-md"> Jija Chad</span>
              </div>
  
              <Messages />
              <MessageInput />
          </>
        )}
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 Jija Chad 🗿</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}


// STARTER CODE FOR MessageContainer COMPONENT

// import Messages from './Messages.jsx'

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//         {/* Header */}
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className="label-text">To:</span>
//                 <span className="text-gray-900 font-bold"> Jija Chad</span>
//             </div>

//             <Messages />
//             {/* <MessageInput /> */}
//         </>
//     </div>
//   )
// }

// export default MessageContainer