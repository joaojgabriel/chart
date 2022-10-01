const getPercentage = (min, num, max) => (num - min) / (max - min);

fetch("./data.json")
  .then((res) => res.json())
  .then((json) => init(json));

const init = (json) => {
  const labels = json.map((obj) => obj.day);
  Chart.defaults.font.size = 18;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        data: json.map((obj) => obj.amount),
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      interaction: { mode: "index" },
      locale: "en-US",
      events: ["mousemove", "touchstart"],
      elements: { bar: { borderRadius: 3 } },
      scales: {
        y: { display: false },
        x: {
          grid: { display: false },
          ticks: {
            font: {
              family: "DM Sans",
              size: 12,
              weight: "normal",
            },
            color: "hsl(28, 10%, 53%)",
          },
        },
      },
      font: { family: "DM Sans", weight: "bold" },
      plugins: {
        tooltip: {
          displayColors: false,
          caretSize: 0,
          callbacks: {
            label: (context) =>
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y),
            title: () => "",
          },
        },
        legend: { display: false },
        labels: { font: { family: "DM Sans", weight: "bold" } },
      },
    },
  };

  const expenses = new Chart(document.getElementById("expenses"), config);
};
