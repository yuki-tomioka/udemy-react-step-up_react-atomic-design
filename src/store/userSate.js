import { atom } from "recoil";

export const userState = atom({
  key: "userSate",
  default: { isAdmin: false }
});
