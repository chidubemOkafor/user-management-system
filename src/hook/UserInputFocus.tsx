// hooks/useInputFocus.ts
import { useState } from 'react';

export const UseInputFocus = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false)
  const [confirmPasswordFocus, setConfirmpasswordFocus] =  useState(false)

  const handleFocus = (e: { target: { name: string } }) => {
    if (e.target.name === 'email') {
      setEmailFocus(true);
    } else if (e.target.name === 'password') {
      setPasswordFocus(true);
    } else if (e.target.name === 'username') {
      setUsernameFocus(true)
    } else if (e.target.name === 'confirmpassword') {
      setConfirmpasswordFocus(true)
    }
  };

  const handleBlur = (e: { target: { value: string; name: string } }) => {
    if (e.target.name === 'email') {
      setEmailFocus(e.target.value !== '');
    } else if (e.target.name === 'password') {
      setPasswordFocus(e.target.value !== '');
    } else if (e.target.name === 'username') {
      setUsernameFocus(e.target.value !== '')
    } else if (e.target.name === 'confirmpassword') {
      setConfirmpasswordFocus(e.target.value !== '')
    }
  };

 

  return { emailFocus, passwordFocus,usernameFocus, confirmPasswordFocus, setShowConfirmPassword, showConfirmPassword,  handleFocus, handleBlur, showPassword, setShowPassword };
};
