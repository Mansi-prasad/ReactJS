import Events from "./components/Events";
import ConditionalRendering from "./components/ConditionalRendering";
import ReactList from "./components/ReactList";
import { ReactForm } from "./components/ReactForm";
import FetchingData from "./components/FetchingData";
import RenderingList from "./components/RenderingList";
import PropsPassing from "./components/PropsPassing";
function App() {
  // for propPassing
  const name = "Mansi";
  const isLoggedIn = true;
  const obj = {
    id: 1,
    name: "xyz",
    age: 20,
  };
  const hobbies = ["coding", "reading", "Traveling"];
  const func = () => {
    alert("Hello");
  };
  return (
    <>
      {/* <Events /> */}
      {/* <ConditionalRendering /> */}
      {/* <ReactList /> */}
      {/* <ReactForm /> */}
      {/* <FetchingData /> */}
      {/* <RenderingList /> */}
      {/* <PropsPassing
        myName={name}
        isLoggedIn={isLoggedIn}
        // myObj={{ id: 1, name: "xyz", age: 20 }}
        myObj={obj}
        // array={["coding", "reading", "Traveling"]}
        array={hobbies}
        myFunction={func}
      /> */}
    </>
  );
}

export default App;
