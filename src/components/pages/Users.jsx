import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "test@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://example.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);
  const onClickSwith = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwith}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
