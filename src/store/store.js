import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false/*{
                ignoredActions: ['switchUser','user/switchUser', 'actionCreator'],
                ignoredPaths: ['user.value'],
                ignoredActionPaths: ['user.value'],
            }*/
        })
})