import React from "react";
// import ReactDOM from "react-dom";

const Modal = ({ onClose, onRegister }:any) => {
    const handleCloseClick = (e:any) => {
        e.preventDefault();
        onClose();
    };
    const handleRegisterClick = (e:any) => {
        e.preventDefault();
        onRegister();
    };

    const modalContent = (
        <div className="relative inset-0 w-full min-h-screen md:fixed flex justify-center items-center z-50">
            <div className=" w-3/6 min-w-[400px] h-fit xl:w-1/3 bg-white rounded-xl py-3 px-6 grid items-center justify-center drop-shadow-xl">
                    <div className="flex justify-end">
                        <a href="#" onClick={handleCloseClick} className=" text-2xl font-extrabold border-blue-600">
                            x
                        </a>
                    </div>
                    <div className="grid justify-items-center">
                    <div className="flex justify-center">
                        <h1 className="text-xl font-bold">Login</h1>
                    </div>
                    <div className="mt-12">
                        <form>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="mike@gmail.com"/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password"/>
                            </div>
                            <div className="mt-10">
                                <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800" onClick={handleRegisterClick}>Sign up</a>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );

    // return ReactDOM.createPortal(
    //     modalContent,
    //     document.getElementById("modal-root")
    // );
    return modalContent;
};

export default Modal