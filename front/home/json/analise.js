google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);
 
function drawCharts() {
    // Primeiro Gráfico
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'http://localhost:8000/graficos', true);
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
            var response = JSON.parse(xhr1.responseText);
           
            // Converter os dados para o formato adequado
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            response.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });
 
            var data1 = google.visualization.arrayToDataTable(formattedData);
            var options1 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart1 = new google.visualization.PieChart(document.getElementById('piechart'));
            chart1.draw(data1, options1);
        }
    };
    xhr1.send();


    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'http://localhost:8000/graficos', true);
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState == 4 && xhr2.status == 200) {
            var resp = JSON.parse(xhr2.responseText);
           
            // Converter os dados para o formato adequado
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            resp.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });
 
            var data2 = google.visualization.arrayToDataTable(formattedData);
            var options2 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart2 = new google.visualization.SteppedAreaChart(document.getElementById('piechart2'));
            chart2.draw(data2, options2);
        }
    };
    xhr2.send();

    var xhr3 = new XMLHttpRequest();
    xhr3.open('GET', 'http://localhost:8000/graficos', true);
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState == 4 && xhr3.status == 200) {
            var resp = JSON.parse(xhr3.responseText);
           
            // Converter os dados para o formato adequado
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            resp.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });
 
            var data3 = google.visualization.arrayToDataTable(formattedData);
            var options3 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart3 = new google.visualization.LineChart(document.getElementById('piechart3'));
            chart3.draw(data3, options3);
        }
    };
    xhr3.send();
    
}
 