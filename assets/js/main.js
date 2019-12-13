
$("#header-user").click(function() {
    $("#header-tooptip").fadeToggle();
});

sidebar_rrow = 1;

$(".sidebar-text").addClass("hidden");

$("#sidebar-arrow").animate({
    left: '+0px'
});

document.getElementById("sidebar-arrow").innerHTML = '<i class="fas fa-chevron-circle-right"></i>';


$("#sidebar-arrow").click(function() {

    if(sidebar_rrow == 0) {

        $(".sidebar-text").addClass("hidden");
        // $("sidebar").css('width', '10px');

        $("#sidebar-arrow").animate({
            left: '0px'
        });

        // $("#sidebar-arrow").css({'transform' : 'rotate('+ 180 +'deg)'});
        document.getElementById("sidebar-arrow").innerHTML = '<i class="fas fa-chevron-circle-right"></i>';

        sidebar_rrow = 1;

    } else if(sidebar_rrow == 1) {
        $(".sidebar-text").removeClass("hidden");
        // $("sidebar").css('width', '10px');

        $("#sidebar-arrow").animate({
            left: '75px'
        });

        // $("#sidebar-arrow").css({'transform' : 'rotate('+ 180 +'deg)'});
        document.getElementById("sidebar-arrow").innerHTML = '<i class="fas fa-chevron-circle-left"></i>';

        sidebar_rrow = 0;
    }

});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Visitors'],
    ['Mon',  500],
    ['Tue',  20070],
    ['Wed',  16680],
    ['Thr',  23730],
    ['Fri',  21030],
    ['Sat',  20030],
    ['Sun',  61030]
  ]);

  var options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawDonut1);
function drawDonut1() {
  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Numbers'],
    ['Man',     30],
    ['Woman',    70]
  ]);

  var options = {
    legend: 'none',
    title: 'Gender',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_chart1'));
  chart.draw(data, options);
}


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawDonut2);
function drawDonut2() {
  var data = google.visualization.arrayToDataTable([
    ['Age', 'Numbers'],
    ['18-24',     11],
    ['25-29',      2],
    ['30-49',  2],
    ['50+',    7]
  ]);

  var options = {
    title: 'Age',
    legend: 'none',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_chart2'));
  chart.draw(data, options);
}


google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['United Kingdom', 30],
    ['United States', 30],
    ['Canada', 30]
  ]);

  var options = {
    //   displayMode: 'text'
  };

  var chart = new google.visualization.GeoChart(document.getElementById('map_chart'));

  chart.draw(data, options);
}

// function showSection(data) {

//   var sections = document.getElementsByTagName("section");

//   for(i=0; i<sections.length; i++) {
//     sections[i].style.display = "none";
//   }

//   document.getElementById(data+"-section").style.display = "block";

// }



