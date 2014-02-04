{
	"documentDescription":
	{
	"type":"openMeteoData (v. 0.1.1)",
	"licence":"openMeteoData (v. 0.1.1)",
	"buildDate":"2014-02-01 00:00:01",
	"generator":"openMeteoData Builder (v .0.1.1)"
	},

	
	"stationDescription":
	{
		"id":"CH-BLB0001",
		"name":"Wetterstation Binningen West (CH)",
		"description":"Wetterstation Binningen West (CH)",
		"url":"http://wetterbinningen.ch",
		"email":"info@wetterbinningen.ch",
		"country":"Switzerland",
		"countryCode":"CH",
		"city":"Binningen (BL)",
		"latitude": -14.8677,
        "longitude": 58.6423,
		"altitude_m":350,
		"operators":
		[
			{
			"id":"FF001",
			"name":"Fredy Fire",
			"email":"ff@ff.ff"
			}
		]
	},
	

	"dataFieldDescription":
	[
		{	
			"id":"temp_air_2m_c",
			"description":"Air Temperature +2m",
			"unit":"C",
			"precision":0.1,
			"deviation":0.5,
			"sensors":
			[
				{
					"id":"temp_hum_01",
					"description":"Temperature and Humidity Sensor",
					"manufacturer":"TFA",
					"productID":"30.3150"

				}
			]

		},
		{	
			"id":"temp_air_5cm_c",
			"description":"Air Temperature +5cm",
			"unit":"C",
			"precision":0.1,
			"deviation":0.5,
			"sensors":
			[
				{
					"id":"temp_hum_02",
					"description":"Temperature and Humidity Sensor",
					"manufacturer":"TFA",
					"productID":"30.3150"

				}
			]
		}
		,
		{	
			"id":"temp_ground_5cm_c",
			"description":"Ground Temperature -5cm",
			"unit":"C",
			"precision":0.1,
			"deviation":0.5,
			"sensors":
			[
				{
					"id":"temp_03",
					"description":"Temperature Wire Sensor",
					"manufacturer":"TFA",
					"productID":"TFA 30.3177"

				}
			]

		},
		{	
			"id":"humity_rel",
			"description":"Air Humity (relative)",
			"unit":"%",
			"precision":1,
			"deviation":1,
			"sensors":
			[
				{
					"id":"temp_hum_01",
					"description":"Temperature and Humidity Sensor",
					"manufacturer":"TFA",
					"productID":"TFA 30.3150"
				}
			]
		},
		{	
			"id":"pressure_rel",
			"description":"Air Pressure (relative)",
			"unit":"hPa",
			"precision":0.1,
			"deviation":0.1,
			"sensors":
			[
				{
					"id":"temp_hum_01",
					"description":"Pressure Sensor",
					"manufacturer":"TFA",
					"productID":"TFA 35.1075"
				}
			]
		}
	],
	
	
	"dataRangeDescription":
	{
		"period":"month",
		"dateFrom":"2014-01-01 00:00",
		"dateTo":"2014-01-31 23:55",
		"interval_s":"300"
	},
	
	
	"data":
	[
		{
			"date_time":"2014-01-01 00:00:00",
			"temp_air_2m_c":12.6,
			"temp_air_5cm_c":10.4,
			"temp_ground_5cm":9.6,
			"humity_rel":76,
			"pressure_rel":1013.4
		},
		{
			"date_time":"2014-01-01 00:05:00",
			"temp_air_2m_c":12.5,
			"temp_air_5cm_c":10.5,
			"temp_ground_5cm_c":10.3,
			"humity_rel":75,
			"pressure_rel":1014.4
		},
		{
			"date_time":"2014-01-01 00:10:00",
			"temp_air_2m_c":12.4,
			"temp_air_5cm_c":10.3,
			"temp_ground_5cm_c":10.6,
			"humity_rel":74,
			"pressure_rel":1011.4
		},
		{
			"date_time":"2014-01-01 00:15:00",
			"temp_air_2m_c":12.3,
			"temp_air_5cm_c":10.1,
			"temp_ground_5cm_c":9.1,
			"hum_rel":73,
			"pressure":1012.4
		}
		
	]
}