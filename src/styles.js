import styled from "styled-components";

import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

 
`;

export const ToDoList = styled.div`
  background: #ffffff;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;

    h3 {
      display: flex;
      justify-content: center;
      font-weight: 900;
      font-size: 40px;
      color: rgb(231, 71, 65);
    }
  }

`;

export const Input = styled.input`
  border: 2px solid #d1d3d466;
  border-radius: 5px;
  height: 40px;
  width: 340px;
  margin-right: 40px;

  
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  border: none;
  height: 40px;
  width: 130px;
  color: #ffffff;
  font-weight: 900;
  font-size: 17px;
  line-height: 2.5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? " #E8FF8B;" : "#e4e4e4")};
  box-shadow: 1px 4px 10px 0px #00000033;
  border-radius: 5px;
  height: 60px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;

  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    width: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 10px;
    gap: 10px;
  }
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`;
