import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Pages/Home/Home';
import Servicios from './Components/Pages/Servicios/Servicios';
import Nosotros from './Components/Pages/Nosotros/Nosotros';
import Contacto from './Components/Pages/Contacto/Contacto';
import ItemListContainer from './Components/Pages/Productos/ItemListContainer/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './Components/Pages/Productos/ItemListContainer/Items/ItemDetails/ItemDetailsContainer';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/productos" element={<ItemListContainer />} />
					<Route
						path="/productos/:categoria"
						element={<ItemListContainer />}
					/>
					<Route path="/servicios" element={<Servicios />} />
					<Route path="/nosotros" element={<Nosotros />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route
						path="/item/:id"
						element={<ItemDetailsContainer />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
