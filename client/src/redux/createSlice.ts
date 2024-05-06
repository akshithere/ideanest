import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
interface Message{
    id: Number,
    message: String
}
interface ChatState{
    messages: Message[]
}
const initialState: ChatState = {
messages: []
}
const chatSlice = createSlice({
    name: "chatSlice",
    initialState,
    reducers:{
        newMessage: (state,action: PayloadAction<Message>) =>{
            // state = [...state,action.payload]
            state.messages.push(action.payload);
        }
    }
})
export const { newMessage } = chatSlice.actions;
export default chatSlice.reducer;