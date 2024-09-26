import { useContext } from "react";
import { AppContext } from "../context.jsx";


/** 
* A simple login page that doesn't require a user or password
*
* @return login component
*/
const Login = function (props) {
  const { setIsLoggedIn } = useContext(AppContext)


  return (
    /* Image from unsplash 
        URL = https://unsplash.com/photos/red-and-black-racing-car-on-race-track-l87JKfXFcm4
    */

    /* icons from iconfinder
        URL = https://www.iconfinder.com/social-media-icons
    */

    <div className="bg-center w-screen h-screen bg-cover bg-[url('/f1-2.jpg')] overflow-hidden">
      <div className="flex justify-start min-h-screen items-center">
        <div className="bg-white min-w-[30%] border-2   border-b-zinc-800 h-screen flex justify-center items-center">
          <div className="px-4">
            <h2 className="text-4xl font-bold mb-16">Login to Your Account</h2>
            <form className="text-left">
              <div className="mb-10">
                <label className="block text-xl font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Email" />
                <a href="" className="text-blue-600 hover:underline">Forgot Email?</a>
              </div>
              <div className="mb-10">
                <label className="block text-xl font-semibold text-gray-700 mb-1">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Password" />
                <a href="" className="text-blue-600 hover:underline">Forgot Password?</a>
              </div>
              <div className="flex justify-between">
                <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105" onClick={() => { setIsLoggedIn(true) }}>Login</button>
                <div className="w-4"></div>
                <button type="button" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-1/2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">Register</button>
              </div>
            </form>
            <div className="mt-10">
              <div className="flex items-center mb-4">
                <div className="w-full border-t border-gray-300"></div>
                <div className="mx-4 text-gray-500">OR</div>
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="text-center mb-6">Sign in via social media</div>
              <div className="flex justify-center space-x-10">
                <img src="/facebook_logo_icon.png" alt="Facebook" className="w-8 h-8 cursor-pointer" />
                <img src="/instagram_logo_icon.png" alt="Facebook" className="w-8 h-8 cursor-pointer" />
                <img src="/linkedin_logo_icon.png" alt="Facebook" className="w-8 h-8 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
