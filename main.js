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
// What do they call functions in which you have to pass to use?
// when you adjust the timer, it doesn't format correctly until you start it

  vm.alarm = function()
  {

    // I know the css, but how do I make it blink
    // or maybe just make a modal or a chrome notification
    console.log("Times up");
    alert("Times up!");
  };
  // if time == 0 and running
  // alarm
  // is it checking at every second?
  // does interval promise get checked every second?
  // what determines a total of 0?

  vm.startstop = function()
  {

    if(vm.adjuststate == false)
    {
      var theinterval = function()
      {
        if (vm.adjuststate == false && vm.timernumber == 0)
        {
          vm.timerboolean = false;
          vm.timernumber = 1500;
          vm.alarm();
          //this is automatically a loop. so the promise needs to be cancaled.
          $interval.cancel(vm.intervalpromise);
        }
        else
        {
          vm.timernumber-= 1;
        }
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


function convert_seconds(totalseconds)
{
  var min = parseInt(totalseconds/60, 10);
  var sec = totalseconds % 60;
  console.log(sec);
  // console.log(vm.timernumber);

  if (sec == 0)
  {
    return min + ":00";

  }

  else if (sec > 1 && sec < 10)
  {
    return min + ":0" + sec;


    // return [min, ":0", sec ];
  }
  else
  {
    return min + ":" + sec;



    // return [min, ":", sec];

  }
}


angular.module('tomatoApp').filter('minsecFormat', function()
{
  return function(totalseconds) {
    return convert_seconds(totalseconds);


    // var conv = convert_seconds(totalseconds);
    // return conv[0] + conv[1] + conv[2];

  }
});
