export default function Layout() {

    function clica() {
        console.log('clicou')
    }

    return (
        <>
        
            <div>
                <div className="flex flex-nowrap justify-center">
                    <div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                    </div>
                    <div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                    </div>
                    <div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                        <div  onClick={() => clica()} className="w-24 h-24 border-2 border-slate-950 px-10"></div>
                    </div>
                </div>
            </div>

        </>
    )
}