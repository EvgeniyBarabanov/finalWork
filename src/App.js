import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Footer from './Components/Footer/Footer';


function App() {
	return (
	<div className="App">
		<Router>
			<Header />
			<Main />
			<Footer />
		</Router>
	</div>
	);
}

export default App;