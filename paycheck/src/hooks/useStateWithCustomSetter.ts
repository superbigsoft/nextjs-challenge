import { Dispatch, SetStateAction, useState } from "react";

export function useStateWithCustomSetter<T>(defaultState: T, setState: (value: T) => void): [T, Dispatch<SetStateAction<T>>] {
  const [getter, setter] = useState(defaultState);
  return [getter, (val: SetStateAction<T>) => {
    if (typeof val === 'function') {
      // Ignore as not suppported
      return;
    } 
    
    setState(val);
    setter(val);
  }];
}
