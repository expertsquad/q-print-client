import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage(authKey, accessToken as string);
};

// <== Get user information exported function ==>
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

// <== User logged in check ==>
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

// <== User Signup Check ==>
export const isUserSignedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

// <== Remove User from local-storage ==>
export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
