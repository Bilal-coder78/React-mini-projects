import { useState } from "react"
import Counter from "./components/Counter App/Counter"
import Form from "./components/Form/Form"
import Movie from "./components/Movie Search App/Movie"
import Nav from "./components/News App/Nav"
import Newsbord from "./components/News App/Newsbord"
import Mytodo from "./components/TodoList/Mytodo"
import Weather from "./components/Weather App/Weather"
import Type from "./components/Type/Type"


function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="">
      {/* <Counter/> */}
      {/* <Mytodo/> */}
      {/* <Weather/> */}
      {/* <Form/> */}
      {/* <Movie/> */}
      <Nav setCategory={setCategory} />
      <Newsbord category={category} />
      {/* <Type/> */}
    </div>
  )
}

export default App
