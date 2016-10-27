function MakeControl(controlDiv, label) {

  $.get(
    "tpls/partials/controls.html",
    function(html){
      var controlUI = document.createElement('div');
      controlUI.title = label;
      controlUI.className = 'controlUI';
      controlDiv.appendChild(controlUI);
      var controlText = document.createElement('div');
      controlText.innerHTML = html;
      controlText.className = 'controlText';
      controlUI.appendChild(controlText);
    }
  );

}

function initialize() {
  var mapDiv = document.getElementById('map');
  var mapOptions = {
    zoom: 11,
    center: {lat: 47.46, lng: -122.52},
    disableDefaultUI: true
  };
  var map = new google.maps.Map(mapDiv, mapOptions);


    var divLabel = 'LEFT_CENTER';
    var divName = document.createElement('div');
    divName.id = 'center-control';
    var newDiv = new MakeControl(divName, divLabel);
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(divName);



}

$(
  function(){
    initialize();
  }
);
