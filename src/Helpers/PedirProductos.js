import data from '../Data/DATA.json';

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
}