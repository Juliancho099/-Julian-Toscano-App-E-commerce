
import {
	Container,
	Titulo,
	Form,
	Input,
	Boton,
	Label,
	TextArea,
	Grupo,
	DivContainer,
} from './Contactostyle.jsx';

import { useForm } from 'react-hook-form';

export default function Contacto() {

	const { register, handleSubmit } = useForm();

	const Enviar = (data) => {
		console.log(data)
	}

	return (
		<main>
			<DivContainer>
				<Container>
					<Titulo>Contáctanos</Titulo>
					<Form onSubmit={handleSubmit(Enviar)}>
						<Grupo>
							<Input
								type="text"
								placeholder=" "
								{...register('nombre')}
							/>
							<Label htmlFor="nombre">Nombre</Label>
						</Grupo>
						<Grupo>
							<Input
								type="email"
								placeholder=" "
								{...register('email')}
							/>
							<Label htmlFor="email">Correo Electrónico*</Label>
						</Grupo>
						<Grupo>
							<Input
								type="phone"
								placeholder=" "
								{...register('telefono')}
							/>
							<Label htmlFor="email">Telefono</Label>
						</Grupo>
						<Grupo>
							<TextArea
								rows="2"
								placeholder=" "
								{...register('mensaje')}
							/>
							<Label htmlFor="mensaje">Comentario</Label>
						</Grupo>
						<Boton type="submit">Enviar</Boton>
					</Form>
				</Container>
			</DivContainer>
		</main>
	);
}
