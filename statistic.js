const context = canvas.getContext('2d');	
show_grafics();
function show_grafics(){
	sendRequest('GET', '/statistic').then(data => {
		temperature = data.temperature;
		humudity = data.humidity;
		soil = data.soil;
		
		const mode1 = document.querySelector('#mode1');
	const mode2 = document.querySelector('#mode2');
	const mode3 = document.querySelector('#mode3');
	if (mode1.checked == true && mode2.checked == true && mode3.checked == true){
         //context.clearRect(0, 0, canvas.width, canvas.height);
			chart_all(soil, humudity, temperature);
		
		
    }
	else if (mode1.checked == true || mode2.checked == true || mode3.checked == true) {
		if (mode1.checked == true)
			{
	//			context.clearRect(0, 0, canvas.width, canvas.height);
				chart_soil(soil);
			}
		if (mode2.checked == true)
			{
				chart_air(humudity);
			}
		if (mode3.checked == true)
			{
				chart_temp(temperature);
			}		
		if (mode1.checked == true && mode2.checked == true)
			{

				chart_soil_and_air(soil, humudity);
			}
		if (mode1.checked == true && mode3.checked == true)
			{

				chart_soil_and_temp(soil, temperature);
			}
		
		if (mode2.checked == true && mode3.checked == true)
			{
				chart_air_and_temp(humudity, temperature);
			}
	}
	else {
		chart_null();
	}
	})
	
}


function chart_soil(value){
	
let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options1 = {
    label: "Статистика влажности почвы (%)",
    data: value,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: 'green',// Цвет границы
    borderWidth: 3,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
            data_options1,
        ]
    },
    options: {
		
    legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
	
    }
})

Chart.defaults.global.defaultFontColor = "#fff";

} // почва

function chart_air(value2){
	let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options1 = {
    label: "Статистика влажности воздуха (%)",
    data: value2,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#0080ff',// Цвет границы
    borderWidth: 3,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
            data_options1,
        ]
    },
    options: {
		legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
    }
})

Chart.defaults.global.defaultFontColor = "#fff";
} //воздух

function chart_temp(value3){
let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options1 = {
    label: "Температура (°C)",
    data: value3,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#ff6c00',// Цвет границы
    borderWidth: 3,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
            data_options1,
        ]
    },
    options: {
		legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
    }
})

Chart.defaults.global.defaultFontColor = "#fff";
} //воздух

function chart_soil_and_air(value1, value2){
	
let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options1 = {
    label: "Статистика влажности почвы (%)",
    data: value1,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: 'green',// Цвет границы
    borderWidth: 3,// Толщина границ
};
const data_options2 = {
    label: "Статистика влажности воздуха (%)",
    data: value2,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#0080ff',// Цвет границы
    borderWidth: 3,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
            data_options1,
			data_options2,
        ]
    },
    options: {
		legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
    }
})

Chart.defaults.global.defaultFontColor = "#fff";

} // почва + воздух

function chart_all(value1, value2, value3){
	
let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options1 = {
    label: "Статистика влажности почвы (%)",
    data: value1,
	//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: 'green',// Цвет границы
    borderWidth: 3,// Толщина границ
};
const data_options2 = {
    label: "Статистика влажности воздуха (%)",
    data: value2,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#0080ff',// Цвет границы
    borderWidth: 3,// Толщина границ
};
const data_options3 = {
    label: "Температура (°C)",
    data: value3,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#ff6c00',// Цвет границы
    borderWidth: 3,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
            data_options1,
			data_options2,
			data_options3,
        ]
    },
    options: {
		legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
    }
})

Chart.defaults.global.defaultFontColor = "#fff";

} // почва + воздух + температура

function chart_soil_and_temp(value1, value3){
	let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options1 = {
    label: "Статистика влажности почвы (%)",
    data: value1,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: 'green',// Цвет границы
    borderWidth: 3,// Толщина границ
};
const data_options3 = {
    label: "Температура (°C)",
    data: value3,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#ff6c00',// Цвет границы
    borderWidth: 3,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
            data_options1,
			data_options3,
        ]
    },
    options: {
		legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
    }
})

Chart.defaults.global.defaultFontColor = "#fff";

} // почва + температура

function chart_air_and_temp(value2, value3){
	let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options2 = {
    label: "Статистика влажности воздуха (%)",
    data: value2,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#0080ff',// Цвет границы
    borderWidth: 3,// Толщина границ
};
const data_options3 = {
    label: "Температура (°C)",
    data: value3,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#ff6c00',// Цвет границы
    borderWidth: 3,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
			data_options2,
			data_options3,
        ]
    },
    options: {
		legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
    }
})

Chart.defaults.global.defaultFontColor = "#fff";
} // воздуха + температура

function chart_null(){
let ctx = document.querySelector('#canvas').getContext('2d');
ctx.canvas.parentNode.style.height = '500px';
ctx.canvas.parentNode.style.width = '500px';
const tags = ["3 д.н"," ", "2 д.н", " " ,"1 д.н", " " ,"Сегодня"];
const data_options1 = {
	label: "max",
    data: 0,
//    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Цвет фона
    borderColor: '#ff0000',// Цвет границы
    borderWidth: 1,// Толщина границ
};
new Chart(ctx, {
    type: 'line',// Тип графики
    data: {
        labels: tags,
        datasets: [
            data_options1,
        ]
    },
    options: {
		legend: {
      display: false
  	},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
					maintainAspectRatio: false,
                }
            }],
        },
    }
})

Chart.defaults.global.defaultFontColor = "#fff";

}