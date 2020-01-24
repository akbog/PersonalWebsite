var myRadarChart = radarVis()
// cluster_chart = myRadarChart()

var wid = document.getElementsByClassName("skills-grid-1")[0].offsetWidth
var hei = document.getElementsByClassName("skills-grid-1")[0].offsetHeight

var wid2 = document.getElementsByClassName("skills-grid-2")[0].offsetWidth
var hei2 = document.getElementsByClassName("skills-grid-2")[0].offsetHeight

var wid3 = document.getElementsByClassName("skills-grid-3")[0].offsetWidth
var hei3 = document.getElementsByClassName("skills-grid-3")[0].offsetHeight

var wid4 = document.getElementsByClassName("skills-grid-4")[0].offsetWidth
var hei4 = document.getElementsByClassName("skills-grid-4")[0].offsetHeight

var data1 = d3.selectAll(".skills-grid-1")
              .data([1])
              // .append("svg")
              // .attr("width", wid)
              // .attr("height", hei)
              // .style("position", "absolute")
              .on("mouseover", datasci)
              .on("mouseout", endchart)

var data2 = d3.selectAll(".skills-grid-2")
              .data([1])
              // .append("svg")
              // .attr("width", wid2)
              // .attr("height", hei2)
              // .style("position", "absolute")
              .on("mouseover", softengine)
              .on("mouseout", endchart)

var data3 = d3.selectAll(".skills-grid-3")
              .data([1])
              // .append("svg")
              // .attr("width", wid3)
              // .attr("height", hei3)
              // .style("position", "absolute")
              .on("mouseover", infovis)
              .on("mouseout", endchart)

var data4 = d3.selectAll(".skills-grid-4")
              .data([1])
              // .append("svg")
              // .attr("width", wid4)
              // .attr("height", hei4)
              // .style("position", "absolute")
              .on("mouseover", busfin)
              .on("mouseout", endchart)

function datasci() {
  var attributes = [{axis: "Tensorflow", value: 3},
                {axis: "NLTK", value: 4},
                {axis: "Scikit-Learn", value: 4},
                {axis: "Pandas", value: 5},
                {axis: "SQL", value: 5},
                {axis: "Apache-Spark", value: 3},
                {axis: "R", value: 3},
                {axis: "HDFS", value: 3},
                {axis: "BeautifulSoup/Web-Scrapping", value: 5}]
  d3.select(".hover-over").selectAll("*").remove()
  d3.select(".user-radar").selectAll("*").remove();
  myRadarChart([attributes])
}

function softengine() {
  var attributes = [{axis: "Flask", value: 4},
                    {axis: "Python", value: 5},
                    {axis: "Java", value: 3},
                    {axis: "Databases", value: 5},
                    {axis: "C", value: 3},
                    {axis: "Javascript/JQuery", value: 4},
                    {axis: "Git Version Control", value: 5},
                    {axis: "Design Paradigms", value: 3},
                    {axis: "HTML/CSS", value: 4}]
  d3.select(".hover-over").selectAll("*").remove()
  d3.select(".user-radar").selectAll("*").remove();
  myRadarChart([attributes])
}

function infovis() {
  var attributes = [{axis: "Matplotlib", value: 4},
                {axis: "D3.js", value: 4},
                {axis: "HTML/CSS", value: 5},
                {axis: "Tableau", value: 2},
                {axis: "Excel", value: 4},
                {axis: "Power BI", value: 3}]
  d3.select(".hover-over").selectAll("*").remove()
  d3.select(".user-radar").selectAll("*").remove();
  myRadarChart([attributes])
}

function busfin() {
  var attributes = [{axis: "GARCH/ARIMA Modeling", value: 4},
                    {axis: "Risk Management", value: 3},
                    {axis: "Debt Instruments", value: 4},
                    {axis: "Crypto Modeling", value: 4},
                    {axis: "Corporate Finance", value: 3},
                    {axis: "Accounting", value: 4}]
  d3.select(".hover-over").selectAll("*").remove()
  d3.select(".user-radar").selectAll("*").remove();
  myRadarChart([attributes])
}

function endchart() {
      // d3.select(".user-radar")
      //   .attr('stroke', function(d) { return color(d.cluster)})
      //   .attr("stroke-opacity", 0)
      //   .attr("stroke-width", 0);
      // cluster_chart = myRadarChart()
      d3.select(".user-radar").selectAll("*").remove();
      d3.select(".hover-over")
        .append("div")
        .text("Hover Over Categories")
    }

//
// circle = svg.selectAll("circle")
//                     .data(nodes)
//                     .enter()
//                     .append("circle")
//                     .attr("r", function(d) { return radiusScale(d.num_ratings); })
//                     .style("fill", function(d) { return color(d.cluster); })
//                     .on('mouseover', callRadial)
//                     .on('mouseout', hideRadial);
