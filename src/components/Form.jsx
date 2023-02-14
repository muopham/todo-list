import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/todoSlice";

const Header = styled.header`
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;
const FormInput = styled.div`
  position: absolute;
  height: 54px;
  bottom: -27px;
  width: 100%;
  max-width: 736px;
  display: flex;
  gap: 8px;
  padding: 0 1rem;
`;

const Input = styled.input`
  height: 100%;
  flex: 1;
  color: #fff;
  background: #262626;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;

  &:focus {
    border: 2px solid #1e6f9f;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  height: 100%;
  padding: 0 16px;
  background: #1e6f9f;
  color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background: #1e709fc9;
  }
`;

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const todo = {
    id: uuidv4(),
    text: value,
    status: false,
  };

  const handlerAddTodo = () => {
    if (value) {
      dispatch(addTodo(todo));
      setValue("");
    }
  };
  const handlerKeyup = (e) => {
    if (e.key == "Enter" && value) {
      dispatch(addTodo(todo));
      setValue("");
    }
  };
  return (
    <Header>
      <img src={logo} alt="logo" />
      <FormInput>
        <Input
          type="text"
          placeholder="Add a new todo..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyUp={handlerKeyup}
        />
        <Button onClick={handlerAddTodo}>
          Create <AiOutlinePlusCircle size={20} />
        </Button>
      </FormInput>
    </Header>
  );
};

export default Form;
