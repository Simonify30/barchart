const container = document.querySelector('.box');
const rates = document.querySelector('h5');

const renderchart = async () => {
  let url = 'http://localhost:3000/post';

  const respons = await fetch(url);
  const charts = await respons.json();

  
  // let template = '';

  charts.forEach(chart => {

    container.innerHTML += `
      <div class="skill">
        <div class="graph " style="height: ${chart.amount}%;" style="background-color: ${chart.color};">
          <h5 class="percent">$${chart.amount}</h5>
        </div>
        <div class="day">${chart.day}</div>
      </div>
      `

      const renderTools = () =>{
      // const del = document.querySelector('button');
      const del = container.querySelector('.graph');
      // const price = document.querySelector('.price');
      const hell = container.querySelector('.percent')
    
      
      del.addEventListener('mouseover', function(){
        // price.classList.add('visible');
        hell.style.display = 'block'
        return;
        
      });
    
    
      del.addEventListener('mouseout', function(){
        // price.classList.remove('visible');
        // hell.style.backgroundColor = "black";
        hell.style.display = 'none'

      });
    };
    renderTools();

  })
  // container.innerHTML = template;

}

  

  



// todoList.innerHTML = '';

//   todos.forEach((todo) => {
//       const todoadd = document.createElement('li');
//       todoadd.innerText = todo.input;
//       todoList.append(todoadd);
//       todoadd.addEventListener('dblclick', function(){
//       todoList.removeChild(todoadd);
//       })
//   })



// };
// function show (){
//   rates.style.display = 'block';

// }

// function hide(){
//   rates.style.display = 'none';
// }

// graph.addEventListener('mouseover', show)
// graph.addEventListener('mouseout', hide)


// graph.addEventListener('mouseover', () =>{
//   if(rates.style.display === 'none'){
//     rates.style.display = 'block';
//   } else{
//     rates.style.display = 'none';
//   }

// });


window.addEventListener('DOMContentLoaded', () => renderchart());





