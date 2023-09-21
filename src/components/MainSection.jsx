import { useState } from "react"



const MainSection = () =>{

    const [input, setInput] = useState('')
    console.log(input);
    const [guthaben, setGuthaben] = useState(0)

    return(
        
        <main className="konto">
            <h2>Dein Girokonto</h2>
            <section className="saldo">{guthaben}€</section>
            <section>
                <input onChange={(event) => setInput(Number(event.target.value))} className="geldbetrag" type="number" placeholder="Gib einen Geldbetrag ein"/>
            </section>
            <article>
                <button onClick={() => {setGuthaben((prev) => prev + Number(input)), setInput('')}} className="einzahlen">Einzahlen</button>
                <button onClick={() => {setGuthaben((prev) => prev - Number(input)), setInput('')}} className="einzahlen">Auszahlen</button>
            </article>
        </main>
        
    )
}

export default MainSection