const container = document.querySelector('.box');

fetch('data.json')

.then(function (response) {
  return response.json();
})

.then(function (charts) {


  charts.forEach(chart => {

    container.innerHTML +=
    `<div class="skill">
      <div class="graph ">
        <h5 class="percent" style="height: ${chart.amount}%" style="--barSize: 20" title="$${chart.amount}" ></h5>
      </div>
      <div class="day">${chart.day}</div>
      </div>
    `
  })

})





