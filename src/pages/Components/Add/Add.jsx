import Variable from "../Variable/Variable";
import { useEffect, useState } from "react";

import './Add.css'
function Add({aValue, bValue}) {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    useEffect(() => {
        setA(aValue || 0)
        setB(bValue || 0)
    }, [aValue, bValue])

    //track everychange 
    useEffect(() => {

    })

    //track only first load
    useEffect(() => {

    }, [ ])

    return ( 
    <div className='add-container'>
        <h3 className='add-title'>Add</h3>
        <h2 className='add-display'>
            <span className= 'badge bg-primary'>A = {a} </span>
            <span className= 'badge bg-secondary'>A + B = {a + b} </span>
            <span className= 'badge bg-primary'>B = {b} </span>
        </h2>
        <div className='add-variables'>
            <Variable type={'int'} name={'A'} value={a} setValue={setA}/>
            <Variable type={'int'} name={'B'} value={b} setValue={setB}/>
        </div>
    </div> );
}

export default Add;