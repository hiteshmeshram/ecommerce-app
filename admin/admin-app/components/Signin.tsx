export const Signin = ()=>{
    return (
    <div className="flex justify-center pt-[5%]">
        <div className="w-1/5  bg-white border border-black shadow-lg rounded-md">
            <div className="flex justify-center text-3xl font-bold pt-5 pb-4">sign in to your account</div>
            <div className="w-full px-4">
                <div className="mb-2">
                    <div className="text-xl font-semibold my-2">Email</div>
                    <input className="w-full border border-gray-400 py-2 rounded-md px-2" type='email' placeholder="Email"></input>
                </div>
                <div>
                <div className="text-xl font-semibold">Password</div>
                    <input className="w-full border border-gray-400 py-2 rounded-md px-2"  type='password' placeholder="Password"></input>
                </div>
            
                <button className="text-xl font-bold bg-black text-white w-full rounded-md py-2 my-4">Signup</button>

            </div>
            <div className="text-center mb-4">
                --------or continue with--------
            </div>
            <div className="flex justify-center  mb-4">
                <button className=" text-black shadow-lg border border-black py-2 mx-2 px-4 rounded-md">GOOGLE</button>
                <button className="text-black shadow-lg border border-black py-2 mx-2 px-4 rounded-md">GITHUB</button>
            </div>
    </div>
    </div>
    )
}