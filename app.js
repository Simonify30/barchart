const container = document.querySelector('.box');

const renderchart = async () => {
  let url = 'http://localhost:3000/post';

  const respons = await fetch(url);
  const charts = await respons.json();


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

}

window.addEventListener('DOMContentLoaded', () => renderchart());





