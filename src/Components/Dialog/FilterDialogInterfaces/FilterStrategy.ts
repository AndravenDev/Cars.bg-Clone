export interface FilterStrategy {
    bodyType: () => JSX.Element;
    brand: () => JSX.Element;
    fuel: () => JSX.Element;
    gearbox: () => JSX.Element;
    price: () => JSX.Element;
    year: () => JSX.Element;
    location: () => JSX.Element;
    color: () => JSX.Element;
    doorCount: () => JSX.Element;
    horsepower: () => JSX.Element;
    publishedDate: () => JSX.Element;
    condition: () => JSX.Element;
}
