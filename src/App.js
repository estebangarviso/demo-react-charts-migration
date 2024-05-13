import ColumnCharts from './components/ColumnCharts';
import PieCharts from './components/PieChart';
import './App.css';

function App() {
	return (
		<main>
			<section>
				<div className='container'>
					<PieCharts />
					<ColumnCharts />
				</div>
			</section>
		</main>
	);
}

export default App;
