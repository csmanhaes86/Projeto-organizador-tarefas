import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);

  function digiteiNoInput(event) {
    console.log(event.target.value);
    setList([{ id: uuid(), task: event.target.value }]);

    console.log(list);
  }

  function cliqueiNoBotao() {
    console.log("Cliquei no Botão");
  }

  return (
    <div>
      <input onChange={digiteiNoInput} placeholder="O que tem pra fazer ..." />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
