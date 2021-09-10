import styled from "styled-components";

export const RowHolder = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 25px;
  border-radius: 20px;
  color: #333;
  background: #fff;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: 0.2s ease;

  img {
    width: 50px;
    height: 50px;
    margin-right: 40px;
    border-radius: 50%;
  }

  &:hover {
    border: 2px solid #333;
    cursor: pointer;
  }
`;
