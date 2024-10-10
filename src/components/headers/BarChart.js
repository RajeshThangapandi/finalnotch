import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarCharts extends Component {
	render() {
		const options = {
			animationEnabled: true,
			animationDuration: 5000, // Animation duration of 3 seconds
			theme: "light2",
			title: {
				text: "Growth of Photovoltaics"
			},
			axisX: {
				interval: 1, // Set interval to 1 year
				valueFormatString: "YYYY", // Format the label as a year
				labelAngle: -45, // Rotate the labels for better readability
				labelFormatter: function (e) {
					return {
						text: e.value.getFullYear() // Show only the year part
					};
				}
			},
			axisY: {
				title: "Capacity (in MWp)",
				logarithmic: true
			},
			data: [{
				type: "spline",
				showInLegend: true,
				legendText: "MWp = one megawatt peak",
				dataPoints: [
					{ x: new Date(2001, 0), y: 1615 },
					{ x: new Date(2002, 0), y: 2069 },
					{ x: new Date(2003, 0), y: 2635 },
				]
			}]
		}

		return (
			<div>
				<CanvasJSChart options={options} />
			</div>
		);
	}
}

export default BarCharts;
