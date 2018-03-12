$(document).ready(function() {
  $('#mynav').scrollToFixed();
  particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
});

var gradientColors = [
  {
    start: '#1fa253',
    end: '#369191e6'
  },
  {
    start: '#2B3139',
    end: '#2B3139'
  }
  ];
  Chart.defaults.global.tooltips.enabled = false;
  Chart.defaults.global.animation.duration = 2500;

  const marketCanvas = document.getElementById('market-chart');
  const marketCtx = marketCanvas.getContext('2d');
  const gradients = [];
  
  gradientColors.forEach( function( item ){
      var gradient = marketCtx.createLinearGradient(0, 0, 150 , 150);
      gradient.addColorStop(0, item.start);
      gradient.addColorStop(1, item.end);
      gradients.push(gradient);
  });

function createMarketChart() {
  new Chart(document.getElementById("market-chart"), {
  type: 'doughnut',
  data: {
    datasets: [
      {
        borderWidth: 0,
        backgroundColor: gradients,
        hoverBackgroundColor: gradients,
        data: [89,11]
      }
    ]
  },
  options: {
    cutoutPercentage: 70
  }
});
}
// WAYPOINTS
const marketChart = document.getElementById('market-chart');
function createChart() {
  console.log('waypoint');
  createMarketChart();
} 

const waypoint1 = new Waypoint({
  element: marketChart,
  handler: createChart,
  offset: '90%'
});


