const baseUrl = "https://superheroapi.com/api.php/1851774908332502";

$(function () {});

$("#hero-form").submit(async (e) => {
  e.preventDefault();
  const response = await ajaxGet($("#inputHeroId").val());
  !response.error ? displayHeroInfo(response) : $(".hero-info").hide();
});

const ajaxGet = async (id) => {
  return await $.ajax({
    type: "GET",
    url: `${baseUrl}/${id}`,
    success: (res) => res,
    error: () => alert("Ocurrió un error"),
  });
};

const initChart = (data) => {
  const dataPoints = [];
  Object.entries(data.powerstats).forEach(([key, value]) =>
    dataPoints.push({ y: value, label: key })
  );
  let chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2",
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: `Estadisticas de poder para ${data.name}`,
    },
    data: [
      {
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: ({y})",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - ({y})",
        dataPoints,
      },
    ],
  });
  chart.render();
};

const displayHeroInfo = (data) => {
  initChart(data);
  console.log(data.powerstats);
  $(".hero-info").show();
  $("#hero-img").attr("src", data.image.url);
  $("#hero-title").text(`Nombre: ${data.name}`);
  $("#hero-text").text(`Conexiones: ${data.connections["group-affiliation"]}`);
  $("#posted-by").text(`Publicado por: ${data.biography.publisher}`);
  $("#occupation").text(`Ocupacion: ${data.work.occupation}`);
  $("#first-appearance").text(
    `Primera Aparicion: ${data.biography["first-appearance"]}`
  );
  $("#height").text(
    `Altura: ${data.appearance.height.map((val) => `${val} `)}`
  );
  $("#weight").text(`Peso: ${data.appearance.weight.map((val) => `${val} `)}`);
  $("#aliases").text(
    `Alias: ${data.biography.aliases.map((val) => ` ${val}`)}`
  );
};
