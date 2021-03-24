
const names = (state = [], action) => {

    switch(action.type){

        case 'ADD_NAME':
            //console.log( 'reducer add name' )
            return [
                 action.content
                
            ]
        
        default:
            return state;
    }
}

export default names;