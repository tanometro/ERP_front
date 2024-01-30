'use session';

import React, {useState, useEffect} from 'react';
import PrimaryButton from './PrimaryButton';
import { signIn, signOut, useSession } from "next-auth/react";
import { Modal, initTE} from "tw-elements";
import dynamic from "next/dynamic";
initTE({ Modal });

const DynamicModal = dynamic(() => import("../Modals/AuthModal"), {
  ssr: false,
});

const AuthButton = () => {
  const {data: session, status} = useSession();
  const [showPopup, setShowPopup] = useState(false);
console.log(session);


  const toggleMenu = () => {
    setShowPopup(!showPopup);
  };

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (session) {
    return (
      <>
        Bienvenido {session.user?.user.username} <br />
        <PrimaryButton
        onClickFunction={() => signOut()} title='Salir'
        />
      </>
    );
  }
  return (
    <>
    No identificado <br />
    {/* <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-toggle="modal"
      data-te-target="#rightTopModal"
      data-te-ripple-init
      data-te-ripple-color="light">
      Log in
    </button> */}
    <button
        onClick={() => signIn()}
        className="btn btn-primary"
      >
        Sign in
      </button>
    <DynamicModal/>
  </>
  )
}

export default AuthButton;