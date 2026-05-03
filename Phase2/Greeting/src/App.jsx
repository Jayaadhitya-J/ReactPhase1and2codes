import Greet from "./Greet";
import StarRatting from "./StarRatting";
import Toggle from "./Toggle";
import "./App.css";
import Accordian from "./Accordian";
import Badge from "./badge";
import CharacterCounter from "./CharacterCounter";

function App() {
    return (
        <>
            <Greet name="Jay" age={23} />
            <Toggle />
            <StarRatting />
            <Accordian/>
            <Badge variant="success" size="sm">Success</Badge>
            <CharacterCounter/>
        </>
    );
}

export default App;
