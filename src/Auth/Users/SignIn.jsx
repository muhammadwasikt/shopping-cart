import { auth, IoCloseCircleOutline, IoEyeOff, IoEye, setUser, signInWithEmailAndPassword, SignUp, toast, ToastContainer, useDispatch, useForm, useNavigate, useState, Link, ForgotPassword } from "../../utils/imports"


const SignIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isPassword, setIsPassword] = useState(false)
    const [loader, setLoader] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success('Your Account Successfully Login')
                setLoader(false)
                navigate('/home')
                dispatch(setUser(user.uid))
                reset()
                document.getElementById('my_modal_2').hideModal()
            })
            .catch((error) => {
                const errorCode = error.code;
                setLoader(false)
                toast.error(errorCode)
            })
    }

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <div className="w-full flex justify-center items-center p-2">
                    <div className="max-w-[450px] w-full flex flex-col items-center gap-5 p-4">
                        <h1 className="text-3xl font-extrabold">SIGN IN</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full justify-center">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })} />
                            </label>
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type={isPassword ? "text" : "password"} className="grow w-full" placeholder="Password" {...register("password", { required: true })} maxLength='8' />
                                <p onClick={() => setIsPassword(!isPassword)}>
                                    {isPassword ? <IoEye /> : <IoEyeOff />}
                                </p>
                            </label>
                            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                            <button type="submit" className="btn w-full text-lg mt-8">
                                {loader ? 'Loading....' : 'Sign In'}
                            </button>

                        </form>
                                <form method="dialog" className="top-[212px] right-12 absolute">
                                    <button className="text-sm text-blue-600 cursor-pointer" onClick={() => document.getElementById('forgot_password').showModal()}>Forgot Password</button>
                                </form>
                        <div className="flex justify-center gap-3 mt-5 ">
                            <span className="flex gap-1">Don't have an account?
                                <form method="dialog">
                                    <button onClick={() => document.getElementById('sign_up').showModal()}>
                                        Sign Up
                                    </button>
                                </form>
                            </span>
                        </div>
                    </div>
                    <form method="dialog" className="absolute top-3 right-4">
                        <button>
                            <IoCloseCircleOutline className="text-xl " />
                        </button>
                    </form>
                </div>
            </div>
            <SignUp />
            <ToastContainer />
            <ForgotPassword />
        </dialog>
    )
}

export default SignIn
