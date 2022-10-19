import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Filters {
  price: any | null;
}

interface FilterContxt {
  filters: Filters | undefined;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  clearFilters: () => void;
}

const FiltersContext = createContext<FilterContxt | undefined>(undefined);

export const FiltersContextProvider = ({ children }: PropsWithChildren) => {
  const initalFilterState = {
    price: null,
  };
  const [filters, setFilters] = useState<Filters>(initalFilterState);

  const clearFilters = () => {
    setFilters(initalFilterState);
  };

  return (
    <FiltersContext.Provider value={{ filters, setFilters, clearFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilters  must be used within a FiltersContextProvider");
  }

  return context;
};
