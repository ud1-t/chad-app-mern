import { IoSearchSharp } from 'react-icons/io5'

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-md" />
        <button type="submit" className="btn btn-circle bg-primary text-white rounded-md">
            <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput



// STARTER CODE FOR SearchInput COMPONENT

// import { IoSearchSharp } from 'react-icons/io5'

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-md" />
//         <button type="submit" className="btn btn-circle bg-primary text-white rounded-md">
//             <IoSearchSharp className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput