var app = angular.module('PxlApp', []);

app.controller('pxlCtrl', function($scope){

  $scope.saludo = "Hola mundo con angular y jadeJS";

  var slides = [
    {
      foto:"public/slide-1.jpg",
      texto: 'slide 1'
    },
    {
      foto:"public/slide-2.jpg",
      texto:'slide 2'
    },
    {
      foto:"public/slide-3.jpg",
      texto: 'slide 3'
    },
    {
      foto:"public/slide-4.jpg",
      texto: 'slide 4'
    }
  ];

  var html = '';

  for(var i in slides){
    if(i == 0){var activo = "active"}else{activo = ""};

    html += '<div class="item pxl-full-w-h pxl-bk '+ activo +'" style="background-image:url('+ slides[i].foto +')">';
      html += '<div class="pxl-table">';
        html += '<div class="pxl-cell">';
          html += '<div class="texto text-center animated fadeInUp" >';
            html += '<h1>'+ slides[i].texto +'</h1>';
          html += '</div>';
        html += "</div>";
      html += "</div>";
    html += '</div>';

    $('.pxl-slides').html(html);
  };
});
