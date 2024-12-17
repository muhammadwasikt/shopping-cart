import { auth, IoCloseCircleOutline, sendPasswordResetEmail, toast, ToastContainer, useForm, useNavigate } from "../../utils/imports"


const ForgotPassword = () => {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email } = data;
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent successfully");
                reset()
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            });
    }
    return (
        <div>
            <dialog id="forgot_password" className="modal">
                <div className="modal-box p-10">
                    <h1 className="text-center w-full text-3xl font-bold mb-8">FORGOT PASSWORD</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        {errors.email && <div className="text-red-500 text-sm p-2">This field is required</div>}
                        <div className="mb-3 mt-6 flex justify-end">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                    <form method="dialog" className="absolute top-3 right-4">
                        <button>
                            <IoCloseCircleOutline className="text-xl " />
                        </button>
                    </form>
                </div>
            </dialog>
            <ToastContainer />
        </div>
    )
}

export default ForgotPassword
