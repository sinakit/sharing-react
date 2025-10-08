import { atom, useRecoilState } from "recoil";
const globalCounterAtom = atom({
  key: "globalCounter", // unique ID (with respect to other atoms/selectors)
  default: 0,
});
export const useParentState = () => {
  const [globalCounter, setGlobalCounter] = useRecoilState(globalCounterAtom);
  // You can add any state or logic here that you want to share
  // between Parent and ParentOther components in the future.
  return { globalCounter, setGlobalCounter };
};
