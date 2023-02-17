import Home from "./pages/Home";
import Mixed from "./pages/Mixed"
import Ladies from "./pages/Ladies";
import Team from "./pages/Team"
import Trainer from "./pages/Trainer";
import Classes from "./pages/Classes";
import Subscribe from "./pages/Subscribe";

import { Trainers } from "./components/Data";
import { Route, Routes } from "react-router-dom";




function App() {



  return (
    <Routes>

      <Route exact path="/" element={<Home />} />
      <Route path="/mixed" element={<Mixed />} />
      <Route path="/ladies" element={<Ladies />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/team" element={<Team />} />
      {Trainers.map((trainer) => {
        return <Route exact path={trainer.link} key={trainer.id} element={<Trainer id={trainer.id} />} />
      }
      )}

      <Route path="/classes" element={<Classes />} />

    </Routes>
  )





}

export default App;
