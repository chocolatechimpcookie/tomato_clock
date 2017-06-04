angular.module('tomatoApp', []);

angular.module('tomatoApp').controller('mainCtrl', ['$interval', function ($interval)
{
  var vm = this;
  vm.timerboolean = false;
  vm.intervalpromise;
  vm.timernumber = 1500;
  vm.adjuststate = false;
  // vm.timernumber = 1400;

  // vm.theinterval = function()
  // {
  //   vm.timernumber-=1;
  // };

  //if you click it again, it stops, how do you check if function is running?

  vm.startstop = function()
  {

    var theinterval = function()
    {
      vm.timernumber-= 1;
    };


    if(vm.timerboolean == false)
    {
      vm.intervalpromise = $interval(theinterval, 1000);
      vm.timerboolean = true;
    }
    else
    {


      $interval.cancel(vm.intervalpromise);
      vm.timerboolean = false;

    }
    // if(vm.timerboolean)
    // {
    //   $interval.cancel(vm.intervalpromise);
    //   vm.timerboolean = false;
    // }
    // else
    // {
    //   vm.intervalpromise = $interval(theinterval, 1000);
    //   vm.timerboolean = true;
    //
    // }

  };



  vm.reset = function()
  {
    vm.timernumber = 1500;
  };


  vm.adjust = function()
  {
    if(vm.adjuststate == false)
    {
      vm.adjuststate = true;

    }
  };
}]);


angular.module('tomatoApp').filter('minsecFormat', function()
{
  return function(totalseconds){

    var min = parseInt(totalseconds/60, 10);
    var sec = totalseconds % 60;
    console.log(sec);

    if (sec == 0)
    {
      return min + ":00";

    }

    else if (sec > 1 && sec < 10)
    {
      return min + ":0" + sec;
    }
    else
    {
      return min + ":" + sec;

    }
  }
});
