import { useState } from "react";
import { v4 as uuid } from "uuid";

import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";

import { Button, Container, Input, ListItem, ToDoList } from "./styles";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);
  const [inputTask, setInputTask] = useState(" ");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task: inputTask }]);
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tem pra fazer ..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem>
              <FcCheckmark />
              <li key={item.id}>{item.task}</li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}
export default App;
