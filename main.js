angular.module('tomatoApp', []);

angular.module('tomatoApp').controller('mainCtrl', function ()
{
  var vm = this;

  vm.timernumber = 1500;
  // vm.timernumber = 1400;
  vm.play = function()
  {
    vm.timernumber-1;

  };
});


angular.module('tomatoApp').filter('minsecFormat', function()
{
  return function(totalseconds){

    var min = parseInt(totalseconds/60, 10);
    var sec = totalseconds % 60;
    console.log(sec);

    if (sec == 0)
    {
      return min + " : 00";

    }
    else
    {
      return min + " : " + sec;

    }
  }
});
