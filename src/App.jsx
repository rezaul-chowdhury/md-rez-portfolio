import React from 'react';
import HeaderIndex from "./components/header/HeaderIndex";
import NevIndex from "./components/navbar/NevIndex";
import MainIndex from "./components/main/MainIndex";
import FooterIndex from "./components/footer/FooterIndex";


function App() {
    return (
        <div>
            <div>
                <NevIndex />
                <HeaderIndex />
                <MainIndex />
                <FooterIndex />
            </div>
        </div>
    )
}

export default App;
