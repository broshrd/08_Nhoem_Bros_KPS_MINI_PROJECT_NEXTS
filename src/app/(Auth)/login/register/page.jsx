const registerPage = () => {
    return (
        <div className="registerpage p-[70px] w-full">
            <div className="logo w-full">
                <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <div className="formandimg w-full flex justify-center mt-[70px]">
                <div className="table w-1/2">
                    <div className="table1 w-full flex m-4">
                        <div className="from1 w-1/2 m-5 ml-2">
                            <label className="m-4 text-[#606C5D]" htmlFor="">First Name:</label>
                            <input type="text" placeholder="Enter your name..." className="input input-bordered w-full max-w-xs mt-3 mb-6 bg-stone-200" />
                            <label className=" mt-2 text-[#606C5D]" htmlFor="">Email</label>
                            <input type="text" placeholder="info@gmail.com" className="input input-bordered w-full max-w-xs mt-3 mb-6  bg-stone-200" />
                            <label className=" mt-2 text-[#606C5D]" htmlFor="">Password</label>
                            <input type="text" placeholder="xxxxxxxxxxx" className="input input-bordered w-full max-w-xs mt-3 mb-6  bg-stone-200" />

                        </div>
                        <div className="form2 w-1/2 m-5 mr-2">
                            <label className="text-[#606C5D]" htmlFor="">Last Name:</label>
                            <input type="text" placeholder="Enter your name..." className="input input-bordered w-full max-w-xs mt-3 mb-6  bg-stone-200" />
                            <label className="text-[#606C5D]" htmlFor="">Mobile No</label>
                            <input type="text" placeholder="+91 -9873737000" className="input input-bordered w-full max-w-xs mt-3 mb-6  bg-stone-200" />
                            <label className="text-[#606C5D]" htmlFor="">Comfirm password</label>
                            <input type="text" placeholder="xxxxxxxxxxx" className="input input-bordered w-full max-w-xs mt-3 mb-6  bg-stone-200" />

                        </div>
                    </div>
                    <div className="button m-4 ">
                        <button className=" px-9 btn bg-blue-500 text-white ">Sign up</button>
                    </div>
                </div>
                <div className="img h-70px w-1/2 flex justify-center">
                    <img src="assets/icons/sign-up.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default registerPage;