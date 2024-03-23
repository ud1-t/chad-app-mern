import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }


  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-md shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
            <h1 className='text-3xl fontsem text-center text-gray-300'>
                Signup
                <span className='text-info'> ChadApp</span>
            </h1>
                
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2 mt-4'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Giga Chad' className='w-full input input-bordered h-12'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='gigachad' className='w-full input input-bordered h-12'
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-12'
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-12'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>

                <GenderCheckbox onCheckboxChnage = {handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to="/login" className='text-sm hover:underline hover:text-info mt-2 inline-block'>
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 h-11 border border-slate-700' disabled={loading} >
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>

            </form>
        </div>
    </div>
}

export default SignUp



// STARTER CODE FOR SIGNUP COMPONENT

// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-md shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
//             <h1 className='text-3xl fontsem text-center text-gray-300'>
//                 Signup
//                 <span className='text-info'> ChadApp</span>
//             </h1>
                
//             <form>
//                 <div>
//                     <label className='label p-2 mt-4'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type='text' placeholder='Giga Chad' className='w-full input input-bordered h-12' />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type='text' placeholder='gigachad' className='w-full input input-bordered h-12' />
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-12' />
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-12' />
//                 </div>

//                 <GenderCheckbox />

//                 <a href="#" className='text-sm hover:underline hover:text-info mt-2 inline-block'>
//                     Already have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 h-11 border border-slate-700'>Sign Up</button>
//                 </div>

//             </form>
//         </div>
//     </div>
// }

// export default SignUp