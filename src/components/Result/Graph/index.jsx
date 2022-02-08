import propType from "prop-types"
import { Bar } from "react-chartjs-2"
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  BarElement,
  Legend,
  Tooltip,
} from "chart.js"
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  BarElement,
  Legend,
  Tooltip
)

function Graph({ valuesGraph }) {
  const data = {
    datasets: [
      {
        label: "Sem aporte",
        backgroundColor: "#000000",
        data: valuesGraph.semAporte,
      },
      {
        label: "Com aporte",
        backgroundColor: "#ED8E53",
        data: valuesGraph.comAporte,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: "rect",
        },
      },
    },

    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          text: "Tempo (meses)",
          display: true,
        },
      },
      grid: {
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
        offset: false,
        title: {
          display: true,
          text: "Valor (R$)",
        },
        ticks: {
          display: false,
        },
        stacked: true,
      },
    },
  }

  return (
    <>
      <Bar data={data} options={options} />
    </>
  )
}

Graph.propType = {
  /**
  Os valores do grafico
  */
  valuesGraph: propType.objectOf("comAporte" | "semAporte"),
}
export default Graph
