import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
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
} from './CheckoutStyle';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
	const { Comprar, Carrito, pedidoId } = useContext(CartContext);
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	useEffect(() => {
		// Si el carrito está vacío y no hay un pedidoId, redirige al inicio
		if (Carrito.length === 0 && !pedidoId) {
			navigate('/'); // Redirige a la página de inicio
		}
	}, [Carrito.length, navigate, pedidoId]);

	useEffect(() => {
		// Si hay un pedidoId, redirige a la página del pedido
		if (pedidoId) {
			navigate(`/pedidos/${pedidoId}`);
		}
	}, [pedidoId, navigate]);

	return (
		<DivContainer>
			{Carrito.length > 0 && !pedidoId && (
				<Container>
					<Titulo>Finaliza Tu Compra</Titulo>
					<Form onSubmit={handleSubmit(Comprar)}>
						<Grupo>
							<Input
								type="text"
								placeholder=" "
								{...register('cliente')}
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
								type="tel" // Corrección de tipo de input
								placeholder=" "
								{...register('telefono')}
							/>
							<Label htmlFor="telefono">Telefono</Label>
						</Grupo>
						<Grupo>
							<TextArea
								rows="2"
								placeholder=" "
								{...register('mensaje')}
							/>
							<Label htmlFor="mensaje">Comentario</Label>
						</Grupo>
						<Boton type="submit">Comprar</Boton>
					</Form>
				</Container>
			)}
		</DivContainer>
	);
}
