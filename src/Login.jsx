import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";
import { TwitterAuthProvider } from "firebase/auth";

// react-icons
import { MdFacebook } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
// react-icons

const Login = () => {

  const GoogleProvider = new GoogleAuthProvider()
  const FaceBookProvider = new FacebookAuthProvider()
  const TwitterProvider = new TwitterAuthProvider();

  let handleGoogle = () => {
    signInWithPopup(auth , GoogleProvider)
    .then((response) => {
      console.log(response);
    } )
    .catch((err) => {
      alert(err.message)
    })
  }

  let handleFacebook = () => {
    signInWithPopup(auth , FaceBookProvider)
    .then((response) => {
      console.log(response);
    } )
    .catch((err) => {
      alert(err.message)
    })
  }

  let handleTwitter = () => {
    signInWithPopup(auth , TwitterProvider)
    .then((response) => {
      console.log(response);
    } )
    .catch((err) => {
      alert(err.message)
    })
  }

  let handleGithub = () => {

  }

  let handlePhone = () => {

  }

  return (
    <div className="h-screen flex justify-center items-center">

        <div className="box flex flex-col gap-3 w-64 mx-auto p-4 bg-white rounded-xl ">

            <button onClick={handleGoogle} className="flex items-center  justify-between px-5 hover:bg-[#ebebeb] rounded-lg py-2 bg-gray-100 duration-[0.2s] cursor-pointer">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            <span>Sign in with Google</span>
            </button>

            <button onClick={handleFacebook} className="flex items-center justify-between px-5 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 duration-[0.2s] cursor-pointer">
            <MdFacebook className="w-6 h-6" />
            <span>Sign in with Facebook</span>
            </button>

            <button onClick={handleTwitter} className="flex items-center  justify-between px-5 bg-sky-500 text-white rounded-lg py-2 hover:bg-sky-600 duration-[0.2s] cursor-pointer">
            <RiTwitterXLine className="w-5 h-5"/>
            <span>Sign in with Twitter</span>
            </button>

            <button onClick={handleGithub} className="flex items-center  justify-between px-5 bg-gray-900 text-white rounded-lg py-2 hover:bg-gray-800 duration-[0.2s] cursor-pointer">
            <FaGithub className="w-5 h-5" />
            <span>Sign in with Github</span>
            </button>

            <button onClick={handlePhone} className="flex items-center  justify-between px-5 bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 duration-[0.2s] cursor-pointer">
            <MdPhone className="w-5 h-5"/>
            <span>Sign in with Phone</span>
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
            By continuing, you accept our{" "}
            <a href="#" className="text-blue-600 underline">Terms</a> &{" "}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
            </p>

        </div>

    </div>
  )
}

export default Login
