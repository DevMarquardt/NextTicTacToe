import React, { useState } from "react"

export default function Layout() {
    const [divSelecionada, setDivSelecionada] = useState(null);
    const [jogada, setJogada] = useState(0);

    function clica() {
        if (jogada % 2 === 0) {
            return (
                <div>
                    <p>X</p>
                </div>
            )
        }
        else if (jogada % 2 === 1) {
            return (
                <div>
                    <p>O</p>
                </div>
            )
        }

    }

    function verificarClick(numeroDiv){
        if(jogada % 2 === 0 && divSelecionada === null){
            setDivSelecionada(numeroDiv)
            setJogada(jogada + 1)
        }
    }

    return (
        <>

            <div>
                <div className="flex flex-nowrap justify-center">
                    <div>
                        <div onClick={() => verificarClick(1)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 1 && clica()}
                        </div>
                        <div onClick={() => verificarClick(2)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 2 && clica()}
                        </div>
                        <div onClick={() => verificarClick(3)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 3 && clica()}
                        </div>
                    </div>
                    <div>
                        <div onClick={() => verificarClick(4)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 4 && clica()}
                        </div>
                        <div onClick={() => verificarClick(5)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 5 && clica()}
                        </div>
                        <div onClick={() => verificarClick(6)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 6 && clica()}
                        </div>
                    </div>
                    <div>
                        <div onClick={() => verificarClick(7)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 7 && clica()}
                        </div>
                        <div onClick={() => verificarClick(8)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 8 && clica()}
                        </div>
                        <div onClick={() => verificarClick(9)} className="flex items-center w-24 h-24 border-2 border-slate-950 px-10">
                            {divSelecionada === 9 && clica()}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}