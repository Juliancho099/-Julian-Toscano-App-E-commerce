import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Pages/Home/Home';
import Servicios from './Components/Pages/Servicios/Servicios';
import Nosotros from './Components/Pages/Nosotros/Nosotros';
import Contacto from './Components/Pages/Contacto/Contacto';
import ItemListContainer from './Components/Pages/Productos/ItemListContainer/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './Components/Pages/Productos/ItemListContainer/Items/ItemDetails/ItemDetailsContainer';
import CarritoCompras from './Components/Carrito/CarritoContainer'
import { CartProvider } from './contexts/CartContext';
import { DestacadosProvider } from './contexts/DestacadosContext';
import Checkout from './Components/CheckOut/Checkout';
import PedidoId from './Components/CheckOut/PedidoId/PedidoId';
import Ofertas from './Components/Ofertas/Ofertas';
import Footer from './Components/Footer/Footer';
function App() {


	return (
		<CartProvider>
			<DestacadosProvider>
				<BrowserRouter>
					<Ofertas />
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/productos"
							element={<ItemListContainer />}
						/>
						<Route
							path="/productos/:categoria"
							element={<ItemListContainer />}
						/>
						<Route
							path="/item/:id"
							element={<ItemDetailsContainer />}
						/>
						<Route path="/servicios" element={<Servicios />} />
						<Route path="/nosotros" element={<Nosotros />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/carrito" element={<CarritoCompras />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/pedidos/:id" element={<PedidoId />} />
						<Route path="*" element={<Home />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</DestacadosProvider>
		</CartProvider>
	);
}

export default App;
