import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FaRegCheckCircle } from "react-icons/fa";
export const VerificationModal = ({ isOpen, setIsOpen , type, id, name, register, handleSubmit, handleOtp}) => {

  return (
    <AlertDialog open={isOpen} 
     className="relative">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-sm text-gray-800">
            Device Verification 1/2
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 text-sm font-semibold">
            Please enter a{" "}
            <span className="font-bold text-gray-900">Verification code</span>{" "}
            for EROSADS from your{" "}
            <span className="font-bold text-gray-900">
              Google Authenticator{" "}
            </span>
            app:
          </AlertDialogDescription>

          <div >
            <form onSubmit={handleSubmit(handleOtp)} className="flex flex-col">
            <label htmlFor={name} className="font-bold text-[10px] text-yellow-500 pl-5">
              Enter your code here*
            </label>
            <input
              type={type}
              id={id}
              name={name}
              className="w-[70%] h-7 text-xs bg-gray-200 rounded-sm px-5 text-black outline-none"
              placeholder="_ _ _  _ _ _"
              {...register(name)}
            />
          
            <AlertDialogFooter className="absolute -bottom-10 right-0">
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="rounded-sm w-[120px] h-[35px] border border-gray-200 bg-transparent text-gray-200 font-bold text-sm"
          >
            CANCEL
          </AlertDialogCancel>
          <AlertDialogAction type="submit" className="rounded-sm w-[120px] h-[35px] border border-yellow-600 bg-transparent text-yellow-600 font-bold text-sm">
            VERIFY
          </AlertDialogAction>
        </AlertDialogFooter>
            </form>
            
          </div>

          <AlertDialogDescription className="text-gray-800 text-xs font-semibold">
            Having trouble receiving the code, You can contact the
            <span className="text-yellow-500 underline pl-1">Support</span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const SuccessModal = ({
  isVerify,
  setIsVerify,
  autoCloseTime,
  timeLeft,
  setTimeLeft,
}) => {
  if (isVerify) {
    setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setIsVerify(false);
        setTimeLeft(autoCloseTime);
      }
    }, 1000);
  }

  if (!isVerify && timeLeft !== autoCloseTime) {
    setTimeLeft(autoCloseTime);
  }
  return (
    <AlertDialog open={isVerify} onOpenChange={(open) => {
      setIsVerify(open);
      if (!open) setTimeLeft(autoCloseTime);
    }}>
      <AlertDialogContent className="py-10">
        <AlertDialogHeader className="flex justify-center items-center ">
        
          <AlertDialogTitle className=" text-2xl font-semibold text-green-600">
            <FaRegCheckCircle />
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm font-semibold text-green-600">
            Verification Successful
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
