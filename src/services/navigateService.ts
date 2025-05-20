
let navigator: (path: string) => void;

export const setNavigator = (navigateFan: (path: string) => void) => {
    navigator = navigateFan;
};

export const appNavigate = (path: string) => {
    if (!navigator) throw new Error("Error");
    navigator(path);
};
