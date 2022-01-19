import React from "react";
import Menu from '../../components/Menu'
import Router,{ useRouter } from "next/router";

export default function movie() {
const router = useRouter();
const {id}= router.query;

const goToHome = () => {
    //Cambiar de ruta a lal url que queremos ir
    Router.push('/')
}

    return (
    <div>
        <Menu/>
        <h2>Estas viendo</h2>
        <h1>{id}</h1>
        <div>
            <button onClick={goToHome} >Ir a inicio</button>
        </div>
    </div>
    )
  }