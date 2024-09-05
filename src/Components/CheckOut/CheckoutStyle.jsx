import styled from 'styled-components';

export const DivContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 100%;

    .carrito-vacio{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        a{
            width: 100%;
            padding: 1rem;
            text-align: center;
            text-decoration: none;
            color: #fff;
            background-color: #000;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1.2rem;
        }
    }
`;

export const Container = styled.div`
	margin-top: 10px;
	background-color: #fff;
	padding: 1rem;
	width: 100%;
	max-width: 600px;

	@media (min-width: 990px) {
	}
`;

export const Titulo = styled.h1`
	font-size: 1.6rem;
	margin-bottom: 50px;
	font-weight: 500;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
`;

export const Form = styled.form`
	@media (min-width: 768px) {
		display: grid;
		grid-template-areas:
			'nombre email'
			'telefono telefono'
			'mensaje mensaje'
			'boton boton';
		align-items: center;
		gap: 3px;

		div:nth-child(1) {
			grid-area: nombre;
		}
		div:nth-child(2) {
			grid-area: email;
		}
		div:nth-child(3) {
			grid-area: telefono;
		}
		div:nth-child(4) {
			grid-area: mensaje;
		}
		div:nth-child(5) {
			grid-area: boton;
		}
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;

	&:focus {
		outline: 0;
		border: 2px solid #000;
	}
`;

export const Boton = styled.button`
	width: 50%;
	margin-top: 20px;
	background-color: #000;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		box-shadow: 0 0 3px 0 #000;
		font-weight: bold;
	}
`;

export const Label = styled.label`
	position: absolute;
	top: 10px;
	left: 10px;
	padding: 0 4px;
	color: #999;
	font-size: 16px;
	transition: 0.3s ease;
	pointer-events: none;
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;

	&:focus {
		outline: 0;
		border: 2px solid #000;
	}
`;

export const Grupo = styled.div`
	position: relative;
	margin-bottom: 20px;

	${Input}:focus + ${Label},
	${Input}:not(:placeholder-shown) + ${Label},
	${TextArea}:focus + ${Label},
	${TextArea}:not(:placeholder-shown) + ${Label} {
		transform: translateY(-15px);
		padding: 0.5rem;
		margin-bottom: 1px;
		font-size: 8px;
		color: #000;
	}
`;
