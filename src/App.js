import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DeafultLayout } from "./components/templates/DeafultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";

import "./styles.css";

const user = {
  name: "test",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "test@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://example.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DeafultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DeafultLayout>
    </BrowserRouter>
  );
}
