import { Column } from '@ant-design/plots';

const ColumnCharts = () => {
	const data = [
		{
			type: 'Clothes',
			sales: 38,
		},
		{
			type: 'Food',
			sales: 52,
		},
		{
			type: 'Electronics',
			sales: 61,
		},
		{
			type: 'Digital devices',
			sales: 145,
		},
		{
			type: 'Books',
			sales: 48,
		},
		{
			type: 'Furniture',
			sales: 38,
		},
		{
			type: 'Toys',
			sales: 38,
		},
		{
			type: 'Other',
			sales: 38,
		},
	];

	/** @type {import("@ant-design/plots").ColumnConfig} */
	const configV2 = {
		data: {
			type: 'inline',
			value: data,
		},
		xField: 'type',
		yField: 'sales',
		label: {
			text: (d) => `${d.sales}`,
			textBaseline: 'bottom',
		},
		axis: {
			y: {
				labelFormatter: (v) => `${v}`,
			},
		},
		style: {
			radiusTopLeft: 10,
			radiusTopRight: 10,
		},
	};

	/** @type {import("@ant-design/plots").ColumnConfig} */
	const configV1 = {
		data,
		xField: 'type',
		yField: 'sales',
		label: {
			// 可手动配置 label 数据标签位置
			// position: 'middle',
			// 'top', 'bottom', 'middle',
			// 配置样式
			style: {
				fill: '#FFFFFF',
				opacity: 0.6,
			},
		},
		xAxis: {
			label: {
				autoHide: true,
				autoRotate: false,
			},
		},
		meta: {
			type: {
				alias: 'Categories',
			},
			sales: {
				alias: 'Sales',
			},
		},
	};

	return (
		<div className='grid'>
			<div>
				<h3>Column Chart (Config V2)</h3>
				<Column {...configV2} />
			</div>
			<div>
				<h3>Column Chart (Config V1)</h3>
				<Column {...configV1} />
			</div>
		</div>
	);
};
export default ColumnCharts;
