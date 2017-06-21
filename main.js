//need to make a directive


angular.module('tomatoApp', []);

angular.module('tomatoApp').controller('mainCtrl', ['$interval', function ($interval)
{
  var vm = this;
  vm.timerboolean = false;
  vm.intervalpromise;
  vm.timernumber = 1500;
  vm.adjuststate = false;
  vm.adjustmin = 1;
  vm.adjustsec = 1;


// adjuststate
// timerboolean

//how do I make an alarm?
//should it be the tomato?
//or something else?

  vm.alarm = function()
  {

    // I know the css, but how do I make it blink
  }


  vm.startstop = function()
  {
    if(vm.adjuststate == false)
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

    }
  };



  vm.reset = function()
  {


    if(vm.adjuststate == false)
    {
      if (vm.timerboolean == true)
      {
          $interval.cancel(vm.intervalpromise);
          vm.timerboolean = false;
      }
      vm.timernumber = 1500;
    }



  };


  vm.adjust = function()
  {
    vm.timerboolean = false;
    if(vm.adjuststate == false)
    {
      vm.adjuststate = true;

    }
  };

  vm.adjustfinish = function()
  {
    console.log(vm.adjustmin);
    console.log(vm.adjustsec);
    vm.timernumber = (vm.adjustmin * 60)+vm.adjustsec;
    vm.adjuststate = false;
  }



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
