import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./Components/Header/Header";
import Main from "./Components/Main";

function App() {
	return (
	<div className="App">
		<Router>
			<Header />
			<Main />
		</Router>
	</div>
	);
}

export default App;