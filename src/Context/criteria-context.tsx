import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Criterias {
  bodyType?: string[];
  brand?: string[];
  fuel?: string[];
  location?: string[];
  color?: string[];
  condition?: string[];
}

interface CriteriaContext {
  criterias: Criterias;
  setCriterias: any;
}

const CriteriaContext = createContext<CriteriaContext | undefined>(undefined);

export const CriteriaContextProvider = ({ children }: PropsWithChildren) => {
  const [criterias, setCriterias] = useState<Criterias>({});

  return (
    <CriteriaContext.Provider value={{ criterias, setCriterias }}>
      {children}
    </CriteriaContext.Provider>
  );
};

export const useCriterias = () => {
  const context = useContext(CriteriaContext);

  if (!context) {
    throw new Error(
      "useCriterias  must be used within a FiltersContextProvider"
    );
  }

  return context;
};
