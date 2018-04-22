var ngDroplet = angular.module("dropletApp", []);

 ngDroplet.controller("dropletController", function($scope, $http){
    //  $scope.message = "Hello ng world";

    var jsonTest = 
    {
        "cod": "200",
        "message": 0.0022,
        "cnt": 38,
        "list": [{
                "dt": 1524376800,
                "main": {
                    "temp": 283.77,
                    "temp_min": 283.044,
                    "temp_max": 283.77,
                    "pressure": 1010.61,
                    "sea_level": 1024.18,
                    "grnd_level": 1010.61,
                    "humidity": 95,
                    "temp_kf": 0.73
                },
                "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 2.97,
                    "deg": 252
                },
                "rain": {
                    "3h": 0.01941
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-04-22 06:00:00"
            }
        ],
        "city": {
            "id": 2653822,
            "name": "Cardiff",
            "coord": {
                "lat": 51.48,
                "lon": -3.18
            },
            "country": "GB"
        }
    };
    

    var url = "http://api.openweathermap.org/data/2.5/forecast?id=2653822&APPID=X";

    var onSuccess = function(data, status, headers, config){
        // $scope.data = data;
        // $scope.data = "test";
        // $scope.data = jsonTest;
        $scope.data = "Today at " + jsonTest.list[0].dt_txt + ", the weather will be " +
            jsonTest.list[0].weather[0].main + " and generally it will be " + 
            jsonTest.list[0].weather[0].description + ".";
    }

    var onError = function(data, status, headers, config){
        $scope.error = status;
    }

    // var promise = $http.get(url);
    // promise.success(onSuccess);
    // promise.error(onError);

    onSuccess();

 }
);