import { atom, selector } from "recoil";

export const TextState= atom({
    
    key:"textInput",
    default:""
})

export const charCountState = selector({
    key:"charCountState",
    get: ({get})=>{
        const text = get(TextState);
        return text.length
    },
    
})

