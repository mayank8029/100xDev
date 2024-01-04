export default function taskReducer(initialstate , action){
    switch(action.type){
        case 'addTask':{
            return[...initialstate ,{id:action.Id , text: action.task , done:false}]
        }
        default:{
            throw Error("this is not allowed")
        }
    }
}