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
                "dt_txt": "2018-04-27 06:00:00"
            }, {
                "dt": 1524387600,
                "main": {
                    "temp": 284.83,
                    "temp_min": 284.284,
                    "temp_max": 284.83,
                    "pressure": 1011.11,
                    "sea_level": 1024.56,
                    "grnd_level": 1011.11,
                    "humidity": 92,
                    "temp_kf": 0.55
                },
                "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3.17,
                    "deg": 237.003
                },
                "rain": {
                    "3h": 0.0007299999999999
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-04-27 09:00:00"
            }, {
                "dt": 1524398400,
                "main": {
                    "temp": 285.33,
                    "temp_min": 284.967,
                    "temp_max": 285.33,
                    "pressure": 1011.19,
                    "sea_level": 1024.5,
                    "grnd_level": 1011.19,
                    "humidity": 84,
                    "temp_kf": 0.36
                },
                "weather": [{
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 4.52,
                    "deg": 248.506
                },
                "rain": {
                    "3h": 0.000010000000000066
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-04-27 12:00:00"
            }, {
                "dt": 1524409200,
                "main": {
                    "temp": 285.5,
                    "temp_min": 285.32,
                    "temp_max": 285.5,
                    "pressure": 1011.28,
                    "sea_level": 1024.56,
                    "grnd_level": 1011.28,
                    "humidity": 80,
                    "temp_kf": 0.18
                },
                "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 5.73,
                    "deg": 248.503
                },
                "rain": {
                    "3h": 0.0148
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-04-27 15:00:00"
            }, {
                "dt": 1524420000,
                "main": {
                    "temp": 284.919,
                    "temp_min": 284.919,
                    "temp_max": 284.919,
                    "pressure": 1011.62,
                    "sea_level": 1024.98,
                    "grnd_level": 1011.62,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 6.31,
                    "deg": 252.502
                },
                "rain": {
                    "3h": 0.0496
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-04-27 18:00:00"
            }, {
                "dt": 1524430800,
                "main": {
                    "temp": 283.689,
                    "temp_min": 283.689,
                    "temp_max": 283.689,
                    "pressure": 1012.76,
                    "sea_level": 1026.29,
                    "grnd_level": 1012.76,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 5.66,
                    "deg": 252.002
                },
                "rain": {
                    "3h": 0.05275
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-04-27 21:00:00"
            }, {
                "dt": 1524441600,
                "main": {
                    "temp": 282.484,
                    "temp_min": 282.484,
                    "temp_max": 282.484,
                    "pressure": 1013.98,
                    "sea_level": 1027.45,
                    "grnd_level": 1013.98,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [{
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 5.72,
                    "deg": 264.005
                },
                "rain": {
                    "3h": 0.04543
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-04-28 00:00:00"
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

        // $scope.data = "Today at " + jsonTest.list[0].dt_txt + ", the weather will be " +
        //     jsonTest.list[0].weather[0].main + " and generally it will be " + 
        //     jsonTest.list[0].weather[0].description + ".";

        getCurrentDates(jsonTest);
    }

    var onError = function(data, status, headers, config){
        $scope.error = status;
    }

    var getCurrentDates = function(data){

        var day = new Date().getDate().toString();

        if(day.length < 2){
            day = "0" + day;
        }

        var currentDates = [];

        angular.forEach(jsonTest.list, function(value, key){
            
            // $scope.data += "[" + key + "] = [" + value.dt_txt + "] ";
            
            if( value.dt_txt.substring(8, 10) === day){
                currentDates += "[At " + value.dt_txt + ", the weather will be " + 
                value.weather[0].main + " and generally it will be " + value.weather[0].description + ".] ";
            }

        });

        $scope.data = currentDates;
    }

    // var promise = $http.get(url);
    // promise.success(onSuccess);
    // promise.error(onError);

    onSuccess();

 }
);