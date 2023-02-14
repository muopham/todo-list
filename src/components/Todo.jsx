import React, {useState} from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #262626;
  border: 1px solid #333;
  border-radius: 8px;
  gap: 16px;
`;
const ButtonCheck = styled.div`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SpanCheck = styled.span`
  width: 18px;
  height: 18px;
  display: inline-block;
  border: 3px solid #4ea8de;
  border-radius: 999px;
`;
const Text = styled.p`
  color: #f2f2f2;
  font-size: 14px;
  font-weight: 400;
  cursor: default;
`;

const ButtonDelete = styled.div`
  background-color: transparent;
  color: #808080;
  cursor: pointer;

  &:hover {
    color: #4ea8de;
  }
`;
const Todo = ({ todo }) => {
  const {id, text, status} = todo;

  const dispatch = useDispatch();

  const handlerCompleted = (idComp) => {
    dispatch(toggleTodo(idComp));
  };

  const handlerDeleteTodo = (idDel) => {
    dispatch(deleteTodo(idDel));
  };

  const styleComplete = {
    textDecoration: "line-through",
    color: "#808080",
  };
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <ButtonCheck onClick={() => handlerCompleted(id)}>
          {status ? (
            <BsFillCheckCircleFill size={18} style={{ color: "#5E60CE" }} />
          ) : (
            <SpanCheck />
          )}
        </ButtonCheck>

        {status ? (
          <Text style={styleComplete} onClick={() => handlerCompleted(id)}>
            {text}
          </Text>
        ) : (
          <Text onClick={() => handlerCompleted(id)}>{text}</Text>
        )}
      </div>

      <ButtonDelete onClick={() => handlerDeleteTodo(id)}>
        <TbTrash size={22} />
      </ButtonDelete>
    </Wrapper>
  );
};

export default Todo;
