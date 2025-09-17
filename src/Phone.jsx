import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from './firebase/FirebaseConfig'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

const Phone = () => {

  const [phone , setPhone] = useState("")
  const [user , setUser] = useState(null)
  const [otp , setOtp] = useState("")

  let sendOtp = async() => {

    try {
      const recaptcha = new RecaptchaVerifier(auth , "recaptcha" , {})
      const confirmation = await signInWithPhoneNumber(auth , phone , recaptcha)
      // console.log(confirmation);
      setUser(confirmation)
    } catch (error) {
      console.log(error)
    }
    
  }

  let verifyOtp = async() => {
    try {
     const data = await user.confirm(otp)
     console.log(data);   
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="flex flex-col items-center gap-6">
        <PhoneInput 
          country={'us'} 
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}  
        ></PhoneInput>

        <button onClick={sendOtp} className="p-3 w-30 bg-blue-600 rounded-2xl text-white hover:bg-blue-500 duration-[0.2s] cursor-pointer active:scale-[0.95]">SEND OTP</button>

        <div id="recaptcha"></div>

        <input type='number' value={otp} onChange={(e) => setOtp(e.target.value)} className='border outline-0 rounded-3xl px-4 py-3' placeholder='enter otp' />

        <button onClick={verifyOtp} className="p-3 w-30 bg-green-600 rounded-2xl text-white hover:bg-green-500 duration-[0.2s] cursor-pointer active:scale-[0.95]">VERIFY</button>


      </div>

    </div>
  )
}

export default Phone
