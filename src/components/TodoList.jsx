import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { clearTodo, searchFilter } from "../redux/todoSlice";
import { todoSelector, todoRemaining } from "../redux/selector";

const Section = styled.section`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 0 16px;
`;

const Span = styled.span`
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  color: #d9d9d9;
  background: #333;
  border-radius: 50%;
`;
const CreatedDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CreatedP = styled.p`
  color: #4ea8de;
  font-size: 14px;
  font-weight: 700;
`;

const ClearDiv = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  background-color: #1e6f9f;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: #1e709fa9;
  }
`;

const Select = styled.select`
  border: none;
  outline: none;
  padding: 8px 10px;
  background-color: #1e6f9f;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const todoList = useSelector(todoRemaining);

  const todoLength = useSelector(todoSelector).length;

  const handlerClearAll = () => {
    dispatch(clearTodo());
  };

  const handlerFilter = (e) => {
    setFilter(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  return (
    <Section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <CreatedDiv>
          <CreatedP>Created tasks</CreatedP>
          <Span>{todoLength}</Span>
        </CreatedDiv>

        <Select value={filter} onChange={handlerFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </Select>

        <ClearDiv onClick={handlerClearAll}>Clear all</ClearDiv>
      </div>

      {todoLength > 0 ? (
        todoList.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })
      ) : (
        <p style={{ textAlign: "center" }}>You don't have any task here...</p>
      )}
    </Section>
  );
};

export default TodoList;
