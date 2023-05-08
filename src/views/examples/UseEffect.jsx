import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
    const n = parseInt(num);
    if(n < 0) {
        return -1;
    }
    if ( n === 0 ) {
        return 1;
    }
    return calcFatorial(n-1) * n;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);
    const [status, setStatus] = useState("Odd");

    useEffect(function() {
        setFactorial(calcFatorial(number))

    }, [number])

    useEffect(function() {
        setStatus(number % 2 === 0 ? "Odd" : "Even")

    }, [number])

    useEffect(function() {
        if(factorial >= 1000) {
            document.title = "XD"
        }
    }, [factorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="ex #01" />
                <div className="center">
                    <div>
                        <span className="text">Factorial: </span>
                        <span className="text red">{ factorial === -1 ? "Doesn't exist" : factorial }</span>
                    </div>
                    <input type="number" className="input" 
                    value={ number }
                    onChange={ e => setNumber(e.target.value) }/>
                </div>
            <SectionTitle title="ex #02" />
                <div className="center">
                    <div>
                        <span className="text">Status: </span>
                        <span className="text red">{ status }</span>
                    </div>
                </div>
        </div>
    )
}

export default UseEffect
