export const getImg = async path => {
    return import(path).then(r => r.default)
};
