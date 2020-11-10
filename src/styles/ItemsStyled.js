import styled from "styled-components";

export const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  opacity: ${(props) => (props.enabled ? 1 : 0.2)};
  margin: 30px;
  width: 180px;
  height: 180px;
`;

export const ItemImage = styled.img`
  width: 50%;
`;

export const ItemsListStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
