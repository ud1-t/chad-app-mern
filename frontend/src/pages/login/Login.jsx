import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from '../../hooks/useLogin.js'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-md shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
            <h1 className='text-3xl fontsem text-center text-gray-300'>
                Login
                <span className='text-info'> ChadApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2 mt-4'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-12'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter password' className='w-full input input-bordered h-12'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Link to="/signup" className='text-sm hover:underline hover:text-info mt-2 inline-block'>
                    Don't have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-4 h-11 border border-slate-700' disabled={loading}>
                        {loading ? <span className="loading laoding-spinner" /> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default Login




// STARTER CODE FOR LOGIN COMPONENT

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-md shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
//             <h1 className='text-3xl fontsem text-center text-gray-300'>
//                 Login
//                 <span className='text-info'> ChadApp</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type='text' placeholder='Enter username' className='w-full input input-bordered h-12' />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter password' className='w-full input input-bordered h-12' />
//                 </div>

//                 <a href="#" className='text-sm hover:underline hover:text-info mt-2 inline-block'>
//                     Don't have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-4 h-11'>Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login