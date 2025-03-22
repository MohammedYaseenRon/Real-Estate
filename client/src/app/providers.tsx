"use client";
import StoreProvider from "@/state/redux";


//This file is for specific that anything requires providers can use this 
//This is not a redux specific
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}
export default Providers;