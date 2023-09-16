import { Provider } from "react-redux";
import { createReduxStore } from "../config/CreateReduxStore";
import type { StateSchema } from "../config/StateSchema";
import type { DeepPartial } from "@reduxjs/toolkit";

interface StoreProvider {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export function StoreProvider({ children, initialState }: StoreProvider) {
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}