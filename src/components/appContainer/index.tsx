import React from "react";
import styled from "styled-components";

const Container = styled.main`
  width: ${(p) => p.theme.container.maxWidth}px;
  margin: 100px auto;
`;

function AppContainer({ children }: { children: React.ReactElement }) {
  return <Container>{children}</Container>;
}

export default AppContainer;
