import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 20px;

  nav {
    width: 100%;
    padding: 25px;
    border-bottom: 1px solid lightgrey;

    a {
      font-size: 22px;
      color: #333;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const UserDataWrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 50px 25px;
`;

export const UserInfo = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
