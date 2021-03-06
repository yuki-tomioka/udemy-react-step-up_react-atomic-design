import styled from "styled-components";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userSate";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SCoutainer>
      <SImg src={image} height={160} width={160} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SCoutainer>
  );
});

const SCoutainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
