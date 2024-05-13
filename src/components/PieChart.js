import { Pie } from '@ant-design/plots';

const PieCharts = () => {
	const data = [
		{ type: 'Chile', value: 27 },
		{ type: 'Argentina', value: 25 },
		{ type: 'Brazil', value: 18 },
		{ type: 'Peru', value: 15 },
		{ type: 'Colombia', value: 10 },
		{ type: 'Mexico', value: 5 },
	];

	/** @type {import("@ant-design/plots").PieConfig} */
	const configV2 = {
		data,
		angleField: 'value',
		colorField: 'type',
		label: {
			text: 'value',
			style: {
				fontWeight: 'bold',
			},
		},
		legend: {
			color: {
				title: false,
				position: 'right',
				rowPadding: 5,
			},
		},
	};

	/** @type {import("@ant-design/plots").PieConfig} */
	const configV1 = {
		appendPadding: 10,
		data,
		angleField: 'value',
		colorField: 'type',
		radius: 0.9,
		label: {
			// type: 'inner',
			offset: '-30%',
			content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
			style: {
				fontSize: 14,
				textAlign: 'center',
			},
		},
		interactions: [
			{
				type: 'element-active',
			},
		],
	};

	return (
		<div className='grid'>
			<div>
				<h3>Pie Chart (Config V2)</h3>
				<Pie {...configV2} />
			</div>
			<div>
				<h3>Pie Chart (Config V1)</h3>
				<Pie {...configV1} />
			</div>
		</div>
	);
};
export default PieCharts;
