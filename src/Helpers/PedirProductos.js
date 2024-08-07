import data from '../Data/DATA.json';

export const pedirDatos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});
};

export const pedirItemPorId = (id) => {
	return new Promise((resolve, reject) => {
		const item = data.find((el) => el.id === id);

		if (item) {
			resolve(item);
		} else {
			reject({
				error: `No se encontro el item con el id ${id}`,
			});
		}
	});
};

export const formatCategory = (category) => {
	// Reemplaza los guiones por espacios
	let formattedTitle = category.replace(/-/g, ' ');
	
	return formattedTitle;
};