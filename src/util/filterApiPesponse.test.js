import filterApiResponse from './filterApiResponse'

const testData = [
    {
        "dt": 1574164800,
        "main": {
            "temp": 6.3,
            "temp_min": 6.3,
            "temp_max": 6.45,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1013,
            "humidity": 71,
            "temp_kf": -0.16
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.01,
            "deg": 176
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-11-19 12:00:00"
    },
    {
        "dt": 1574175600,
        "main": {
            "temp": 6.96,
            "temp_min": 6.96,
            "temp_max": 7.07,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 1012,
            "humidity": 74,
            "temp_kf": -0.12
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.32,
            "deg": 161
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-11-19 15:00:00"
    },
    {
        "dt": 1574186400,
        "main": {
            "temp": 5.77,
            "temp_min": 5.77,
            "temp_max": 5.85,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 1012,
            "humidity": 78,
            "temp_kf": -0.08
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.79,
            "deg": 159
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-11-19 18:00:00"
    },
    {
        "dt": 1574197200,
        "main": {
            "temp": 5.7,
            "temp_min": 5.7,
            "temp_max": 5.74,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1012,
            "humidity": 79,
            "temp_kf": -0.04
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.94,
            "deg": 166
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-11-19 21:00:00"
    },
    {
        "dt": 1574208000,
        "main": {
            "temp": 5.64,
            "temp_min": 5.64,
            "temp_max": 5.64,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 1012,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 3.32,
            "deg": 160
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-11-20 00:00:00"
    }
]

const testResult = { "dayTemp": [6.3, 6.3, 6.45, 6.96, 6.96, 7.07], "humidity": [71, 74, 78, 79, 78], "morningTemp": [], "nightTemp": [5.77, 5.77, 5.85, 5.7, 5.7, 5.74, 5.64, 5.64, 5.64] }

test("Test showMode", () => {
    const actual = filterApiResponse(testData)
    expect(actual).toMatchObject(testResult);
}); 