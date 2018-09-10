import React from "react";
import Header from "./Header";
import SelectCountry from "../containers/SelectCountry";
import CountryNewsList from "../containers/CountryNewsList";

const App = () => (
    <div>
        <Header/>
        <SelectCountry/>
        <CountryNewsList/>
    </div>
)

export default App;