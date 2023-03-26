import { useSelector } from "react-redux";
import { RootState } from "./store";

export function useStore<S>(storeName: keyof RootState) {
  return useSelector((state: RootState) => state[storeName] as S);
}
