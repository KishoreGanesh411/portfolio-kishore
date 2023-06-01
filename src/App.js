import React from "react";
import Header from "./components/Header/Header"
import SkillContainer from"./components/SkillContainer/SkillContainer"
import Topcontainer from"./components/Topcontainer/Topcontainer"
import TopContent from "./components/Topcontent/TopContent";

const App = () => {

    return(
<React.Fragment>
        <Header/>,
        <SkillContainer/>,
        <Topcontainer/>,
        <TopContent/>,
        </React.Fragment>
    );

}
export default App;