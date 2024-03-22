
const resultsData = {
    labels: ["Team A", "Team B", "Team C"],
    scores: [95, 88, 78]
};

function createResultsGraph() {
    const ctx = document.getElementById("results-chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: resultsData.labels,
            datasets: [{
                label: "Scores",
                data: resultsData.scores,
                backgroundColor: "#ffc107", 
                borderColor: "#333", 
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", createResultsGraph);
