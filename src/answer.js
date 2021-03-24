import React from 'react';
import names from './redux/reducers';


function Answer(props) {

    let  names = props.state[0]
    //console.log(names, "names")
    
    const obj = {}
     names.map( (el,i) => {
        const person  = el.value
        //console.log(el,"person")
        obj[person] = obj[person] ? obj[person]+1 : 1
    })

    console.log(obj, "props")

    return (
        <div>
            <h1>Answer</h1>

            {Object.keys(obj).map( (name) => {
                return (
                    <div>
                        {`${name} -> ${obj[name]}`} 
                    </div>
                )
                   
            })}
            

        </div>
    );



    
}

export default Answer ;