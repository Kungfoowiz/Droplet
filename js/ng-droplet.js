var ngDroplet = angular.module("dropletApp", []);

 ngDroplet.controller("dropletController", function($scope, $http){
    var getWeatherData = function(){
        var url = "http://api.openweathermap.org/data/2.5/forecast?id=2653822&APPID=X";

        var promise = $http.get(url).then(
            function successCallback(response){
                onSuccess(response.data);
            },
            function errorCallback(response){
                $scope.error = response.status;
            }
        );
    }

    getWeatherData();

    var onSuccess = function(data){
        var currentDate = new Date();
        var today = getCurrentDay(currentDate);

        var result = currentDate.toUTCString() + ", " + rainAggregator(data, today);
    
        $scope.data = result;
    }

    var getCurrentDay = function(currentDate){
        var day = currentDate.getDate().toString();

        if(day.length < 2){
            day = "0" + day;
        }
        
        return day;
    }

    var rainAggregator = function(data, day){
        var rainCount = 0;
        var result = "";

        for(var index = 0; index < data.list.length; index++){
            var currentData = data.list[index];
            if( currentData.dt_txt.substring(8, 10) === day){
                var mainWeather = currentData.weather[0].main.toLowerCase();
                if(mainWeather.search("rain") > -1 ){
                    rainCount++;
                }
            }
        }

        if(rainCount == 0){
            result = "It will not rain today.";
        }
        else if(rainCount < 4){
            result = "It's going to rain a bit today.";
        }
        else if(rainCount < 8){
            result = "It will rain most of the day.";
        }
        else{
            result = "It will rain all day.";
        }

        return result;
    }
}
);