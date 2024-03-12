import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-md shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
            <h1 className='text-3xl fontsem text-center text-gray-300'>
                Signup
                <span className='text-info'> ChadApp</span>
            </h1>
                
            <form>
                <div>
                    <label className='label p-2 mt-4'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Giga Chad' className='w-full input input-bordered h-12' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='gigachad' className='w-full input input-bordered h-12' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-12' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-12' />
                </div>

                <GenderCheckbox />

                <a href="#" className='text-sm hover:underline hover:text-info mt-2 inline-block'>
                    Already have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2 h-11 border border-slate-700'>Sign Up</button>
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