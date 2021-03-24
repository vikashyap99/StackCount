import React, {useState} from 'react';
import {useHistory,Link} from 'react-router-dom'
import {addName} from './redux/action'
import {connect} from 'react-redux'


function Home({dispatch}) {

   let  history  =  useHistory()

    const [fields, setFields] = useState([{ value: null }]);


  function handleChange(i, event) {
    const values = [...fields];
    //console.log(values)
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleSubmit(){
    
      history.push("/answers")
      //console.log(fields, "handleSubmit")
     dispatch(addName(fields))

  }


  return (
    

     
        <div>
      { fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
            />
           
          </div>
        );
      })}

        <button type="button" onClick={() => handleAdd()}>
            +
        </button>

    <button onClick = {() => handleSubmit()} >
        Submit
    </button>

    </div>
    )
}

export default connect()(Home);