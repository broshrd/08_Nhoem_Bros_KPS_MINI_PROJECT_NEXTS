"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const login = () => {
 const router = useRouter();
    //define handle login
    async function handlelogin(userinfo) {
        //define structure object
        const newUserInfo = {
            email: userinfo.get('email'),
            password: userinfo.get('password')
        }
        //calling next auth
        const res = await signIn('credentials', {
            redirect: false,
            ...newUserInfo,
        });
        // console.log("res values", res);
        if (res.ok) {
            router.push('/todo-list')
        }
        else {
            router.push('/login')
        }
    }
    return (
        <div className="top w-full px-32 py-8">
            <div className="logo w-full">
                <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <div className="contain w-full flex mt-10">
                <div class="form w-1/2 flex flex-col justify-evenly">
                    <div class="from1 flex flex-col justify-center ">
                        <section class="bg-gray-50 dark:bg-gray-900">
                            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

                                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Login
                                        </h1>
                                        <form class="space-y-4 md:space-y-6" action={handlelogin}>
                                            <div>
                                                <input type="text" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <input type="text" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <button className="btn btn-activ w-full ">Login</button>
                                            </div>
                                            <div>
                                                <label htmlFor="">don't have an account?</label>
                                                <label className="text-blue-700 ml-2" htmlFor="">Rigester</label>
                                            </div>
                                            <div className="button">
                                                <button className="btn btn-activ w-full flex">
                                                    <div className="logo">
                                                        <img className=" h-7" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                                                    </div>
                                                    <div className="text font-medium"> Google</div>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="text justify-center mt-6">
                        @2024 My office. All Right Reserved
                    </div>
                </div>
                <div className="image w-1/2 flex justify-center ">
                    <img className="h-[70vh]" src="/assets/icons/login.svg" alt="" />
                </div>
            </div>

        </div>
    );
}

export default login;

