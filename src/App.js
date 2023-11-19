import './App.css';
import Balance from "./components/Balance";
import Operation from "./components/Operation";
import {useState} from "react";

function App() {

	const [balance, setBalance] = useState(10000);
	const deposit = sum => setBalance(prevState => prevState + sum);

	const withdraw = sum => setBalance(prevState => {
		if (prevState - sum < 0) {
			alert(`Maximum available amount is ${prevState}`);
			return prevState;
		} else
			return prevState - sum;
	})


	return (
		<div className="App">
			<Balance balance={balance}/>
			<Operation deposit={deposit} withdraw={withdraw}/>
		</div>
	);
}

export default App;
