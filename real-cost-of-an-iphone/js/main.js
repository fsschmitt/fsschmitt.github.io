var countries = [{"name":"Afghanistan","code":"AF"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"Andorra","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\"Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\"S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\"S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"South Sudan","code":"SS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syria","code":"SY"},{"name":"Taiwan","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}];

var minimumWage = {  
	"Afghanistan":{  
		"AnnualUSD":"884",
		"AnnualLocal":"3,001",
		"WorkweekHours":"40",
		"HourlyUSD":0.43,
		"HourlyLocal":1.44,
		"GDPPerCapita":"155.2%",
		"EffectivePer":"2014"
	},
	"Albania":{  
		"AnnualUSD":"2,127",
		"AnnualLocal":"4,790",
		"WorkweekHours":"40",
		"HourlyUSD":1.02,
		"HourlyLocal":2.3,
		"GDPPerCapita":"42.4%",
		"EffectivePer":"3 July 2013"
	},
	"Algeria":{  
		"AnnualUSD":"1,974",
		"AnnualLocal":"5,908",
		"WorkweekHours":"40",
		"HourlyUSD":0.95,
		"HourlyLocal":2.84,
		"GDPPerCapita":"40.2%",
		"EffectivePer":"1 January 2012"
	},
	"Andorra":{  
		"AnnualUSD":"13,444",
		"AnnualLocal":"10,402",
		"WorkweekHours":"40",
		"HourlyUSD":6.46,
		"HourlyLocal":5,
		"GDPPerCapita":"28%",
		"EffectivePer":"1 January 2017"
	},
	"Angola":{  
		"AnnualUSD":"1,625",
		"AnnualLocal":"1,961",
		"WorkweekHours":"40",
		"HourlyUSD":0.78,
		"HourlyLocal":0.94,
		"GDPPerCapita":"26.6%",
		"EffectivePer":"1 June 2014"
	},
	"Antigua and Barbuda":{  
		"AnnualUSD":"6,317",
		"AnnualLocal":"7,661",
		"WorkweekHours":"40",
		"HourlyUSD":3.04,
		"HourlyLocal":3.68,
		"GDPPerCapita":"33.4%",
		"EffectivePer":"1 November 2014"
	},
	"Argentina":{  
		"AnnualUSD":"7,804",
		"AnnualLocal":"20,627",
		"WorkweekHours":"48",
		"HourlyUSD":3.13,
		"HourlyLocal":8.26,
		"GDPPerCapita":"91.5%",
		"EffectivePer":"1 July 2017"
	},
	"Armenia":{  
		"AnnualUSD":"1,374",
		"AnnualLocal":"3,265",
		"WorkweekHours":"40",
		"HourlyUSD":0.66,
		"HourlyLocal":1.57,
		"GDPPerCapita":"38.9%",
		"EffectivePer":"1 July 2015"
	},
	"Australia":{  
		"AnnualUSD":"26,862",
		"AnnualLocal":"22,924",
		"WorkweekHours":"38",
		"HourlyUSD":13.59,
		"HourlyLocal":11.6,
		"GDPPerCapita":"50.4%",
		"EffectivePer":"1 July 2017"
	},
	"Austria":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Azerbaijan":{  
		"AnnualUSD":"872",
		"AnnualLocal":"4,336",
		"WorkweekHours":"40",
		"HourlyUSD":0.42,
		"HourlyLocal":2.08,
		"GDPPerCapita":"24.4%",
		"EffectivePer":"1 January 2017"
	},
	"The Bahamas":{  
		"AnnualUSD":"10,920",
		"AnnualLocal":"9,448",
		"WorkweekHours":"40",
		"HourlyUSD":5.25,
		"HourlyLocal":4.54,
		"GDPPerCapita":"39.7%",
		"EffectivePer":"15 August 2015"
	},
	"Bahrain":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Bangladesh":{  
		"AnnualUSD":"1,262",
		"AnnualLocal":"3,235",
		"WorkweekHours":"48",
		"HourlyUSD":0.51,
		"HourlyLocal":1.3,
		"GDPPerCapita":"97.1%",
		"EffectivePer":"1 December 2013"
	},
	"Barbados":{  
		"AnnualUSD":"6,500",
		"AnnualLocal":"5,292",
		"WorkweekHours":"40",
		"HourlyUSD":3.13,
		"HourlyLocal":2.54,
		"GDPPerCapita":"32.3%",
		"EffectivePer":"1 March 2012"
	},
	"Belarus":{  
		"AnnualUSD":"0",
		"AnnualLocal":"1",
		"WorkweekHours":"40",
		"HourlyUSD":0,
		"HourlyLocal":0,
		"GDPPerCapita":"0%",
		"EffectivePer":"1 January 2016"
	},
	"Belgium":{  
		"AnnualUSD":"20,363",
		"AnnualLocal":"20,056",
		"WorkweekHours":"38",
		"HourlyUSD":10.31,
		"HourlyLocal":10.15,
		"GDPPerCapita":"45.6%",
		"EffectivePer":"1 April 2013"
	},
	"Belize":{  
		"AnnualUSD":"3,861",
		"AnnualLocal":"6,737",
		"WorkweekHours":"45",
		"HourlyUSD":1.65,
		"HourlyLocal":2.88,
		"GDPPerCapita":"79%",
		"EffectivePer":"26 May 2012"
	},
	"Benin":{  
		"AnnualUSD":"809",
		"AnnualLocal":"2,102",
		"WorkweekHours":"40",
		"HourlyUSD":0.39,
		"HourlyLocal":1.01,
		"GDPPerCapita":"99.6%",
		"EffectivePer":"1 April 2014"
	},
	"Bhutan":{  
		"AnnualUSD":"670",
		"AnnualLocal":"2,082",
		"WorkweekHours":"40",
		"HourlyUSD":0.32,
		"HourlyLocal":1,
		"GDPPerCapita":"25.8%",
		"EffectivePer":"1 February 2014"
	},
	"Bolivia":{  
		"AnnualUSD":"3,396",
		"AnnualLocal":"6,990",
		"WorkweekHours":"48",
		"HourlyUSD":1.36,
		"HourlyLocal":2.8,
		"GDPPerCapita":"101.6%",
		"EffectivePer":"1 January 2016"
	},
	"Bosnia and Herzegovina":{  
		"AnnualUSD":"2,172",
		"AnnualLocal":"4,575",
		"WorkweekHours":"40",
		"HourlyUSD":1.04,
		"HourlyLocal":2.2,
		"GDPPerCapita":"43.5%",
		"EffectivePer":"2015"
	},
	"Botswana":{  
		"AnnualUSD":"652",
		"AnnualLocal":"1,279",
		"WorkweekHours":"48",
		"HourlyUSD":0.26,
		"HourlyLocal":0.51,
		"GDPPerCapita":"8.1%",
		"EffectivePer":"2015"
	},
	"Brazil":{  
		"AnnualUSD":"3,491",
		"AnnualLocal":"5,962",
		"WorkweekHours":"44",
		"HourlyUSD":1.53,
		"HourlyLocal":2.61,
		"GDPPerCapita":"38.8%",
		"EffectivePer":"1 January 2016"
	},
	"Brunei":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Bulgaria":{  
		"AnnualUSD":"3,412",
		"AnnualLocal":"7,867",
		"WorkweekHours":"40",
		"HourlyUSD":1.64,
		"HourlyLocal":3.78,
		"GDPPerCapita":"44.9%",
		"EffectivePer":"1 January 2017"
	},
	"Burkina Faso":{  
		"AnnualUSD":"701",
		"AnnualLocal":"1,877",
		"WorkweekHours":"40",
		"HourlyUSD":0.34,
		"HourlyLocal":0.9,
		"GDPPerCapita":"113.1%",
		"EffectivePer":"1 April 2012"
	},
	"Burundi":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Cambodia":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"1 January 2016"
	},
	"Cameroon":{  
		"AnnualUSD":"734",
		"AnnualLocal":"1,812",
		"WorkweekHours":"40",
		"HourlyUSD":0.35,
		"HourlyLocal":0.87,
		"GDPPerCapita":"58%",
		"EffectivePer":"30 July 2014"
	},
	"Canada":{  
		"AnnualUSD":"16,823",
		"AnnualLocal":"16,818",
		"WorkweekHours":"40",
		"HourlyUSD":8.09,
		"HourlyLocal":8.09,
		"GDPPerCapita":"38%",
		"EffectivePer":"1 April 2017"
	},
	"Cape Verde":{  
		"AnnualUSD":"1,324",
		"AnnualLocal":"2,812",
		"WorkweekHours":"44",
		"HourlyUSD":0.58,
		"HourlyLocal":1.23,
		"GDPPerCapita":"42%",
		"EffectivePer":"1 January 2014"
	},
	"Central African Republic":{  
		"AnnualUSD":"767",
		"AnnualLocal":"1,455",
		"WorkweekHours":"40",
		"HourlyUSD":0.37,
		"HourlyLocal":0.7,
		"GDPPerCapita":"243.6%",
		"EffectivePer":"2011"
	},
	"Chad":{  
		"AnnualUSD":"1,214",
		"AnnualLocal":"3,406",
		"WorkweekHours":"39",
		"HourlyUSD":0.6,
		"HourlyLocal":1.68,
		"GDPPerCapita":"156.9%",
		"EffectivePer":"18 October 2011"
	},
	"Chile":{  
		"AnnualUSD":"4,680",
		"AnnualLocal":"7,253",
		"WorkweekHours":"45",
		"HourlyUSD":2,
		"HourlyLocal":3.1,
		"GDPPerCapita":"32.5%",
		"EffectivePer":"1 January 2017"
	},
	"China":{  
		"AnnualUSD":"1,806",
		"AnnualLocal":"3,139",
		"WorkweekHours":"40",
		"HourlyUSD":0.87,
		"HourlyLocal":1.51,
		"GDPPerCapita":"22%",
		"EffectivePer":"12 November 2016"
	},
	"Colombia":{  
		"AnnualUSD":"2,899",
		"AnnualLocal":"6,853",
		"WorkweekHours":"48",
		"HourlyUSD":1.16,
		"HourlyLocal":2.75,
		"GDPPerCapita":"49.7%",
		"EffectivePer":"1 January 2017"
	},
	"Comoros":{  
		"AnnualUSD":"1,484",
		"AnnualLocal":"3,070",
		"WorkweekHours":"40",
		"HourlyUSD":0.71,
		"HourlyLocal":1.48,
		"GDPPerCapita":"202.2%",
		"EffectivePer":"2015"
	},
	"Democratic Republic of the Congo":{  
		"AnnualUSD":"432",
		"AnnualLocal":"762",
		"WorkweekHours":"45[69]",
		"HourlyUSD":0.18,
		"HourlyLocal":0.33,
		"GDPPerCapita":"97.4%",
		"EffectivePer":"1 January 2009"
	},
	"Republic of the Congo":{  
		"AnnualUSD":"1,821",
		"AnnualLocal":"6,043",
		"WorkweekHours":"40",
		"HourlyUSD":0.88,
		"HourlyLocal":2.91,
		"GDPPerCapita":"94.9%",
		"EffectivePer":"2015"
	},
	"Costa Rica":{  
		"AnnualUSD":"4,581",
		"AnnualLocal":"6,603",
		"WorkweekHours":"48",
		"HourlyUSD":1.84,
		"HourlyLocal":2.65,
		"GDPPerCapita":"42.9%",
		"EffectivePer":"1 July 2015"
	},
	"Côte d'Ivoire":{  
		"AnnualUSD":"741",
		"AnnualLocal":"1,858",
		"WorkweekHours":"40",
		"HourlyUSD":0.36,
		"HourlyLocal":0.89,
		"GDPPerCapita":"53.2%",
		"EffectivePer":"1994"
	},
	"Croatia":{  
		"AnnualUSD":"5,501",
		"AnnualLocal":"8,955",
		"WorkweekHours":"40",
		"HourlyUSD":2.64,
		"HourlyLocal":4.31,
		"GDPPerCapita":"40.9%",
		"EffectivePer":"1 January 2016"
	},
	"Cuba":{  
		"AnnualUSD":"147",
		"AnnualLocal":"181",
		"WorkweekHours":"40",
		"HourlyUSD":0.05,
		"HourlyLocal":0.08,
		"GDPPerCapita":"0.4%",
		"EffectivePer":"1 May 2005"
	},
	"Cyprus":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Czech Republic":{  
		"AnnualUSD":"5,617",
		"AnnualLocal":"9,476",
		"WorkweekHours":"40",
		"HourlyUSD":2.7,
		"HourlyLocal":4.56,
		"GDPPerCapita":"29.5%",
		"EffectivePer":"1 January 2017"
	},
	"Denmark":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"37.5",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2017"
	},
	"Djibouti":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Dominica":{  
		"AnnualUSD":"3,081",
		"AnnualLocal":"4,180",
		"WorkweekHours":"40",
		"HourlyUSD":1.48,
		"HourlyLocal":2.01,
		"GDPPerCapita":"37.1%",
		"EffectivePer":"1 June 2008"
	},
	"Dominican Republic":{  
		"AnnualUSD":"906",
		"AnnualLocal":"1,879",
		"WorkweekHours":"44",
		"HourlyUSD":0.4,
		"HourlyLocal":0.82,
		"GDPPerCapita":"13.2%",
		"EffectivePer":"2015"
	},
	"Ecuador":{  
		"AnnualUSD":"5,124",
		"AnnualLocal":"8,485",
		"WorkweekHours":"40",
		"HourlyUSD":2.46,
		"HourlyLocal":4.08,
		"GDPPerCapita":"74.5%",
		"EffectivePer":"1 January 2016"
	},
	"Egypt":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"1 January 2014"
	},
	"El Salvador":{  
		"AnnualUSD":"130",
		"AnnualLocal":"2,194",
		"WorkweekHours":"44",
		"HourlyUSD":0.06,
		"HourlyLocal":0.96,
		"GDPPerCapita":"25.5%",
		"EffectivePer":"1 January 2014"
	},
	"Equatorial Guinea":{  
		"AnnualUSD":"2,611",
		"AnnualLocal":"4,244",
		"WorkweekHours":"48",
		"HourlyUSD":1.05,
		"HourlyLocal":1.7,
		"GDPPerCapita":"14.1%",
		"EffectivePer":"2015"
	},
	"Eritrea":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"44.5",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Estonia":{  
		"AnnualUSD":"6,534",
		"AnnualLocal":"9,170",
		"WorkweekHours":"40",
		"HourlyUSD":3.14,
		"HourlyLocal":4.41,
		"GDPPerCapita":"32.6%",
		"EffectivePer":"1 January 2017"
	},
	"Ethiopia":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Federated States of Micronesia":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Fiji":{  
		"AnnualUSD":"2,761",
		"AnnualLocal":"4,624",
		"WorkweekHours":"48",
		"HourlyUSD":1.11,
		"HourlyLocal":1.85,
		"GDPPerCapita":"50.5%",
		"EffectivePer":"1 July 2015"
	},
	"Finland":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"France":{  
		"AnnualUSD":"20,071",
		"AnnualLocal":"20,081",
		"WorkweekHours":"35",
		"HourlyUSD":11.03,
		"HourlyLocal":11.03,
		"GDPPerCapita":"50.6%",
		"EffectivePer":"1 January 2017"
	},
	"Gabon":{  
		"AnnualUSD":"3,035",
		"AnnualLocal":"7,336",
		"WorkweekHours":"40",
		"HourlyUSD":1.46,
		"HourlyLocal":3.53,
		"GDPPerCapita":"36.7%",
		"EffectivePer":"1 February 2010"
	},
	"The Gambia":{  
		"AnnualUSD":"317",
		"AnnualLocal":"1,109",
		"WorkweekHours":"48",
		"HourlyUSD":0.13,
		"HourlyLocal":0.44,
		"GDPPerCapita":"67.4%",
		"EffectivePer":"2015"
	},
	"Georgia":{  
		"AnnualUSD":"101",
		"AnnualLocal":"284",
		"WorkweekHours":"40",
		"HourlyUSD":0.05,
		"HourlyLocal":0.14,
		"GDPPerCapita":"2.9%",
		"EffectivePer":"2015"
	},
	"Germany":{  
		"AnnualUSD":"21,036",
		"AnnualLocal":"22,236",
		"WorkweekHours":"40.5[87]",
		"HourlyUSD":9.99,
		"HourlyLocal":10.56,
		"GDPPerCapita":"47%",
		"EffectivePer":"1 January 2017"
	},
	"Ghana":{  
		"AnnualUSD":"558",
		"AnnualLocal":"1,687",
		"WorkweekHours":"40",
		"HourlyUSD":0.27,
		"HourlyLocal":0.81,
		"GDPPerCapita":"40.2%",
		"EffectivePer":"1 August 2015"
	},
	"Greece":{  
		"AnnualUSD":"9,271",
		"AnnualLocal":"11,725",
		"WorkweekHours":"40",
		"HourlyUSD":4.46,
		"HourlyLocal":5.64,
		"GDPPerCapita":"43.9%",
		"EffectivePer":"1 January 2013"
	},
	"Grenada":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Guatemala":{  
		"AnnualUSD":"3,991",
		"AnnualLocal":"7,197",
		"WorkweekHours":"48",
		"HourlyUSD":1.6,
		"HourlyLocal":2.88,
		"GDPPerCapita":"93.4%",
		"EffectivePer":"1 January 2016"
	},
	"Guernsey":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"1 January 2017"
	},
	"Guinea":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Guinea-Bissau":{  
		"AnnualUSD":"385",
		"AnnualLocal":"939",
		"WorkweekHours":"45",
		"HourlyUSD":0.16,
		"HourlyLocal":0.4,
		"GDPPerCapita":"64.6%",
		"EffectivePer":"2015"
	},
	"Guyana":{  
		"AnnualUSD":"2,035",
		"AnnualLocal":"3,560",
		"WorkweekHours":"40",
		"HourlyUSD":0.98,
		"HourlyLocal":1.71,
		"GDPPerCapita":"47.4%",
		"EffectivePer":"1 July 2013"
	},
	"Haiti":{  
		"AnnualUSD":"616",
		"AnnualLocal":"1,548",
		"WorkweekHours":"48",
		"HourlyUSD":0.25,
		"HourlyLocal":0.62,
		"GDPPerCapita":"87.8%",
		"EffectivePer":"1 May 2014"
	},
	"Honduras":{  
		"AnnualUSD":"2,304",
		"AnnualLocal":"4,431",
		"WorkweekHours":"44",
		"HourlyUSD":1.01,
		"HourlyLocal":1.94,
		"GDPPerCapita":"87.2%",
		"EffectivePer":"1 January 2016"
	},
	"Hong Kong":{  
		"AnnualUSD":"9,245",
		"AnnualLocal":"11,248",
		"WorkweekHours":"40",
		"HourlyUSD":4.44,
		"HourlyLocal":5.41,
		"GDPPerCapita":"19.8%",
		"EffectivePer":"1 May 2017"
	},
	"Hungary":{  
		"AnnualUSD":"5,441",
		"AnnualLocal":"10,288",
		"WorkweekHours":"40",
		"HourlyUSD":2.62,
		"HourlyLocal":4.95,
		"GDPPerCapita":"40.2%",
		"EffectivePer":"1 January 2017"
	},
	"Iceland":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"India":{  
		"AnnualUSD":"743",
		"AnnualLocal":"2,590",
		"WorkweekHours":"48",
		"HourlyUSD":0.3,
		"HourlyLocal":1.04,
		"GDPPerCapita":"42.5%",
		"EffectivePer":"2015"
	},
	"Indonesia":{  
		"AnnualUSD":"992",
		"AnnualLocal":"2,707",
		"WorkweekHours":"40",
		"HourlyUSD":0.48,
		"HourlyLocal":1.3,
		"GDPPerCapita":"24.5%",
		"EffectivePer":"1 January 2017"
	},
	"Iran":{  
		"AnnualUSD":"361",
		"AnnualLocal":"994",
		"WorkweekHours":"44[103]",
		"HourlyUSD":0.16,
		"HourlyLocal":0.43,
		"GDPPerCapita":"5.8%",
		"EffectivePer":"21 March 2017"
	},
	"Iraq":{  
		"AnnualUSD":"2,570",
		"AnnualLocal":"5,049",
		"WorkweekHours":"40",
		"HourlyUSD":1.24,
		"HourlyLocal":2.43,
		"GDPPerCapita":"33.9%",
		"EffectivePer":"2014"
	},
	"Ireland":{  
		"AnnualUSD":"21,197",
		"AnnualLocal":"18,247",
		"WorkweekHours":"39[105]",
		"HourlyUSD":10.45,
		"HourlyLocal":9,
		"GDPPerCapita":"33.4%",
		"EffectivePer":"1 January 2017 On Tuesday 18 July 2018, the Irish Taoiseach, Leo Varadkar, announced that the government had decided to accept a recommendation to increase the minimum wage rate to €9.55 per hour from 1 January 2018. http://www.independent.ie/irish-news/politics/minimum-wage-set-to-increase-to-955-from-january-varadkar-confirms-an-important-step-in-the-right-direction-35943219.html. Retrieved 2017-07-18. Missing or empty |title= (help)</ref>}"
	},
	"Isle of Man":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"1 April 2017"
	},
	"Israel":{  
		"AnnualUSD":"15,623",
		"AnnualLocal":"13,608",
		"WorkweekHours":"43",
		"HourlyUSD":6.99,
		"HourlyLocal":6.09,
		"GDPPerCapita":"38.4%",
		"EffectivePer":"1 January 2017"
	},
	"Italy":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2015"
	},
	"Jamaica":{  
		"AnnualUSD":"2,758",
		"AnnualLocal":"4,086",
		"WorkweekHours":"40",
		"HourlyUSD":1.33,
		"HourlyLocal":1.96,
		"GDPPerCapita":"45.1%",
		"EffectivePer":"1 March 2016"
	},
	"Japan":{  
		"AnnualUSD":"13,651",
		"AnnualLocal":"13,088",
		"WorkweekHours":"40",
		"HourlyUSD":6.56,
		"HourlyLocal":6.29,
		"GDPPerCapita":"35.1%",
		"EffectivePer":"20 October 2016"
	},
	"Jordan":{  
		"AnnualUSD":"3,718",
		"AnnualLocal":"7,795",
		"WorkweekHours":"48",
		"HourlyUSD":1.49,
		"HourlyLocal":3.12,
		"GDPPerCapita":"71.6%",
		"EffectivePer":"12 February 2017"
	},
	"Kazakhstan":{  
		"AnnualUSD":"802",
		"AnnualLocal":"2,730",
		"WorkweekHours":"40",
		"HourlyUSD":0.39,
		"HourlyLocal":1.31,
		"GDPPerCapita":"10.6%",
		"EffectivePer":"1 January 2016"
	},
	"Kenya":{  
		"AnnualUSD":"665",
		"AnnualLocal":"1,473",
		"WorkweekHours":"52",
		"HourlyUSD":0.25,
		"HourlyLocal":0.54,
		"GDPPerCapita":"47.8%",
		"EffectivePer":"1 May 2015"
	},
	"Kiribati":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"North Korea":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"South Korea":{  
		"AnnualUSD":"11,599",
		"AnnualLocal":"13,140",
		"WorkweekHours":"40",
		"HourlyUSD":5.58,
		"HourlyLocal":6.32,
		"GDPPerCapita":"38%",
		"EffectivePer":"1 January 2017"
	},
	"Kosovo":{  
		"AnnualUSD":"2,305",
		"AnnualLocal":"5,928",
		"WorkweekHours":"40",
		"HourlyUSD":1.11,
		"HourlyLocal":2.85,
		"GDPPerCapita":"61%",
		"EffectivePer":"17 August 2011"
	},
	"Kuwait":{  
		"AnnualUSD":"2,383",
		"AnnualLocal":"3,733",
		"WorkweekHours":"48",
		"HourlyUSD":0.95,
		"HourlyLocal":1.5,
		"GDPPerCapita":"5.2%",
		"EffectivePer":"14 April 2010"
	},
	"Kyrgyzstan":{  
		"AnnualUSD":"166",
		"AnnualLocal":"558",
		"WorkweekHours":"40",
		"HourlyUSD":0.08,
		"HourlyLocal":0.27,
		"GDPPerCapita":"16.3%",
		"EffectivePer":"1 January 2015"
	},
	"Laos":{  
		"AnnualUSD":"2,062",
		"AnnualLocal":"5,193",
		"WorkweekHours":"48",
		"HourlyUSD":0.83,
		"HourlyLocal":2.08,
		"GDPPerCapita":"91.5%",
		"EffectivePer":"2014"
	},
	"Latvia":{  
		"AnnualUSD":"5,017",
		"AnnualLocal":"7,647",
		"WorkweekHours":"40",
		"HourlyUSD":2.41,
		"HourlyLocal":3.68,
		"GDPPerCapita":"31.5%",
		"EffectivePer":"1 January 2016"
	},
	"Lebanon":{  
		"AnnualUSD":"5,373",
		"AnnualLocal":"8,722",
		"WorkweekHours":"48",
		"HourlyUSD":2.15,
		"HourlyLocal":3.49,
		"GDPPerCapita":"62.6%",
		"EffectivePer":"1 February 2012"
	},
	"Lesotho":{  
		"AnnualUSD":"961",
		"AnnualLocal":"3,185",
		"WorkweekHours":"45",
		"HourlyUSD":0.41,
		"HourlyLocal":1.36,
		"GDPPerCapita":"106.7%",
		"EffectivePer":"2014"
	},
	"Liberia":{  
		"AnnualUSD":"435",
		"AnnualLocal":"823",
		"WorkweekHours":"48",
		"HourlyUSD":0.17,
		"HourlyLocal":0.33,
		"GDPPerCapita":"98.4%",
		"EffectivePer":"2014"
	},
	"Libya":{  
		"AnnualUSD":"3,919",
		"AnnualLocal":"9,457",
		"WorkweekHours":"40",
		"HourlyUSD":1.88,
		"HourlyLocal":4.55,
		"GDPPerCapita":"66.8%",
		"EffectivePer":"1 March 2011"
	},
	"Liechtenstein":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"Lithuania":{  
		"AnnualUSD":"5,006",
		"AnnualLocal":"8,421",
		"WorkweekHours":"40",
		"HourlyUSD":2.41,
		"HourlyLocal":4.05,
		"GDPPerCapita":"30.4%",
		"EffectivePer":"1 July 2016"
	},
	"Luxembourg":{  
		"AnnualUSD":"27,152",
		"AnnualLocal":"24,024",
		"WorkweekHours":"40",
		"HourlyUSD":13.05,
		"HourlyLocal":11.55,
		"GDPPerCapita":"23.6%",
		"EffectivePer":"1 January 2017"
	},
	"Republic of Macedonia":{  
		"AnnualUSD":"2,261",
		"AnnualLocal":"5,347",
		"WorkweekHours":"40",
		"HourlyUSD":1.09,
		"HourlyLocal":2.57,
		"GDPPerCapita":"38.4%",
		"EffectivePer":"1 March 2016"
	},
	"Madagascar":{  
		"AnnualUSD":"453",
		"AnnualLocal":"1,676",
		"WorkweekHours":"41[136]",
		"HourlyUSD":0.21,
		"HourlyLocal":0.79,
		"GDPPerCapita":"114.9%",
		"EffectivePer":"1 January 2015"
	},
	"Malawi":{  
		"AnnualUSD":"301",
		"AnnualLocal":"1,244",
		"WorkweekHours":"48",
		"HourlyUSD":0.12,
		"HourlyLocal":0.5,
		"GDPPerCapita":"105.2%",
		"EffectivePer":"1 January 2016"
	},
	"Malaysia":{  
		"AnnualUSD":"2,317",
		"AnnualLocal":"5,840",
		"WorkweekHours":"48[8]",
		"HourlyUSD":0.93,
		"HourlyLocal":2.34,
		"GDPPerCapita":"21.7%",
		"EffectivePer":"1 July 2016"
	},
	"Maldives":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"Mali":{  
		"AnnualUSD":"576",
		"AnnualLocal":"1,513",
		"WorkweekHours":"48[140]",
		"HourlyUSD":0.23,
		"HourlyLocal":0.61,
		"GDPPerCapita":"62.3%",
		"EffectivePer":"2014"
	},
	"Malta":{  
		"AnnualUSD":"10,451",
		"AnnualLocal":"13,701",
		"WorkweekHours":"40",
		"HourlyUSD":5.02,
		"HourlyLocal":6.59,
		"GDPPerCapita":"38.1%",
		"EffectivePer":"1 January 2016"
	},
	"Marshall Islands":{  
		"AnnualUSD":"4,160",
		"AnnualLocal":"3,981",
		"WorkweekHours":"40[144]",
		"HourlyUSD":2,
		"HourlyLocal":1.91,
		"GDPPerCapita":"124%",
		"EffectivePer":"6 March 1986"
	},
	"Mauritania":{  
		"AnnualUSD":"1,109",
		"AnnualLocal":"3,810",
		"WorkweekHours":"40",
		"HourlyUSD":0.53,
		"HourlyLocal":1.83,
		"GDPPerCapita":"86.7%",
		"EffectivePer":"1 September 2011"
	},
	"Mauritius":{  
		"AnnualUSD":"888",
		"AnnualLocal":"1,618",
		"WorkweekHours":"45",
		"HourlyUSD":0.38,
		"HourlyLocal":0.69,
		"GDPPerCapita":"8.3%",
		"EffectivePer":"2014"
	},
	"Mexico":{  
		"AnnualUSD":"1,221",
		"AnnualLocal":"2,401",
		"WorkweekHours":"48",
		"HourlyUSD":0.49,
		"HourlyLocal":0.96,
		"GDPPerCapita":"13.9%",
		"EffectivePer":"1 January 2016"
	},
	"Moldova":{  
		"AnnualUSD":"638",
		"AnnualLocal":"1,838",
		"WorkweekHours":"40",
		"HourlyUSD":0.31,
		"HourlyLocal":0.88,
		"GDPPerCapita":"36.5%",
		"EffectivePer":"1 May 2015"
	},
	"Monaco":{  
		"AnnualUSD":"23,487",
		"AnnualLocal":"",
		"WorkweekHours":"39",
		"HourlyUSD":11.58,
		"HourlyLocal":null,
		"GDPPerCapita":"17%[152]",
		"EffectivePer":"1 January 2017"
	},
	"Mongolia":{  
		"AnnualUSD":"1,076",
		"AnnualLocal":"2,755",
		"WorkweekHours":"40",
		"HourlyUSD":0.52,
		"HourlyLocal":1.32,
		"GDPPerCapita":"22.6%",
		"EffectivePer":"1 September 2013"
	},
	"Montenegro":{  
		"AnnualUSD":"2,562",
		"AnnualLocal":"4,980",
		"WorkweekHours":"40",
		"HourlyUSD":1.23,
		"HourlyLocal":2.39,
		"GDPPerCapita":"32.2%",
		"EffectivePer":"1 May 2013"
	},
	"Morocco":{  
		"AnnualUSD":"3,664",
		"AnnualLocal":"8,580",
		"WorkweekHours":"44[158]",
		"HourlyUSD":1.6,
		"HourlyLocal":3.75,
		"GDPPerCapita":"109.7%",
		"EffectivePer":"1 July 2015"
	},
	"Mozambique":{  
		"AnnualUSD":"571",
		"AnnualLocal":"2,150",
		"WorkweekHours":"40",
		"HourlyUSD":0.27,
		"HourlyLocal":1.03,
		"GDPPerCapita":"181.3%",
		"EffectivePer":"1 May 2014"
	},
	"Myanmar":{  
		"AnnualUSD":"886",
		"AnnualLocal":"3,143",
		"WorkweekHours":"44",
		"HourlyUSD":0.39,
		"HourlyLocal":1.37,
		"GDPPerCapita":"57.5%",
		"EffectivePer":"1 September 2015"
	},
	"Namibia":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"45",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"Nauru":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40[161]",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"Nepal":{  
		"AnnualUSD":"893",
		"AnnualLocal":"2,815",
		"WorkweekHours":"48",
		"HourlyUSD":0.36,
		"HourlyLocal":1.13,
		"GDPPerCapita":"114.5%",
		"EffectivePer":"10 June 2013"
	},
	"Netherlands":{  
		"AnnualUSD":"21,039",
		"AnnualLocal":"20,340",
		"WorkweekHours":"40[165]",
		"HourlyUSD":10.11,
		"HourlyLocal":9.78,
		"GDPPerCapita":"42%",
		"EffectivePer":"1 January 2017"
	},
	"New Zealand":{  
		"AnnualUSD":"22,805",
		"AnnualLocal":"20,306",
		"WorkweekHours":"40",
		"HourlyUSD":10.96,
		"HourlyLocal":9.76,
		"GDPPerCapita":"54.9%",
		"EffectivePer":"1 April 2017"
	},
	"Nicaragua":{  
		"AnnualUSD":"1,336",
		"AnnualLocal":"3,474",
		"WorkweekHours":"48",
		"HourlyUSD":0.54,
		"HourlyLocal":1.39,
		"GDPPerCapita":"66.9%",
		"EffectivePer":"1 September 2015"
	},
	"Niger":{  
		"AnnualUSD":"608",
		"AnnualLocal":"1,615",
		"WorkweekHours":"40",
		"HourlyUSD":0.29,
		"HourlyLocal":0.78,
		"GDPPerCapita":"169.4%",
		"EffectivePer":"17 August 2012"
	},
	"Nigeria":{  
		"AnnualUSD":"1,122",
		"AnnualLocal":"1,996",
		"WorkweekHours":"40",
		"HourlyUSD":0.54,
		"HourlyLocal":0.96,
		"GDPPerCapita":"33.3%",
		"EffectivePer":"1 January 2011"
	},
	"Northern Cyprus":{  
		"AnnualUSD":"6,600",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"1 February 2017"
	},
	"Norway":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"37.5",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"Oman":{  
		"AnnualUSD":"10,143",
		"AnnualLocal":"19,506",
		"WorkweekHours":"45",
		"HourlyUSD":4.33,
		"HourlyLocal":8.34,
		"GDPPerCapita":"51%",
		"EffectivePer":"1 July 2013"
	},
	"Pakistan":{  
		"AnnualUSD":"1,718",
		"AnnualLocal":"5,748",
		"WorkweekHours":"48",
		"HourlyUSD":0.69,
		"HourlyLocal":2.3,
		"GDPPerCapita":"114%",
		"EffectivePer":"1 June 2016"
	},
	"Palau":{  
		"AnnualUSD":"6,240",
		"AnnualLocal":"5,898",
		"WorkweekHours":"40[171]",
		"HourlyUSD":3,
		"HourlyLocal":2.84,
		"GDPPerCapita":"38.6%",
		"EffectivePer":"1 October 2014"
	},
	"Palestine":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"0",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"Panama":{  
		"AnnualUSD":"3,045",
		"AnnualLocal":"5,131",
		"WorkweekHours":"48",
		"HourlyUSD":1.22,
		"HourlyLocal":2.06,
		"GDPPerCapita":"23.1%",
		"EffectivePer":"1 January 2012"
	},
	"Papua New Guinea":{  
		"AnnualUSD":"2,645",
		"AnnualLocal":"3,343",
		"WorkweekHours":"44[177]",
		"HourlyUSD":1.16,
		"HourlyLocal":1.46,
		"GDPPerCapita":"126.1%",
		"EffectivePer":"1 August 2014"
	},
	"Paraguay":{  
		"AnnualUSD":"3,860",
		"AnnualLocal":"8,661",
		"WorkweekHours":"48",
		"HourlyUSD":1.55,
		"HourlyLocal":3.47,
		"GDPPerCapita":"94.3%",
		"EffectivePer":"1 March 2014"
	},
	"Peru":{  
		"AnnualUSD":"3,203",
		"AnnualLocal":"6,014",
		"WorkweekHours":"48",
		"HourlyUSD":1.28,
		"HourlyLocal":2.41,
		"GDPPerCapita":"48.5%",
		"EffectivePer":"1 June 2012"
	},
	"Philippines":{  
		"AnnualUSD":"2,551",
		"AnnualLocal":"6,028",
		"WorkweekHours":"40[181]",
		"HourlyUSD":1.23,
		"HourlyLocal":2.9,
		"GDPPerCapita":"81.9%",
		"EffectivePer":"2 June 2016"
	},
	"Poland":{  
		"AnnualUSD":"6,087",
		"AnnualLocal":"12,466",
		"WorkweekHours":"40",
		"HourlyUSD":2.93,
		"HourlyLocal":5.99,
		"GDPPerCapita":"47.7%",
		"EffectivePer":"1 January 2017"
	},
	"Portugal":{  
		"AnnualUSD":"7,553",
		"AnnualLocal":"9,844",
		"WorkweekHours":"40",
		"HourlyUSD":3.63,
		"HourlyLocal":4.73,
		"GDPPerCapita":"33.7%",
		"EffectivePer":"1 January 2017"
	},
	"Qatar":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Romania":{  
		"AnnualUSD":"4,266",
		"AnnualLocal":"8,994",
		"WorkweekHours":"40",
		"HourlyUSD":2.05,
		"HourlyLocal":4.32,
		"GDPPerCapita":"42%",
		"EffectivePer":"1 February 2017"
	},
	"Russia":{  
		"AnnualUSD":"1,110",
		"AnnualLocal":"3,106",
		"WorkweekHours":"40",
		"HourlyUSD":0.53,
		"HourlyLocal":1.49,
		"GDPPerCapita":"12.7%",
		"EffectivePer":"1 January 2016"
	},
	"Rwanda":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"45",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Saint Kitts and Nevis":{  
		"AnnualUSD":"6,933",
		"AnnualLocal":"8,898",
		"WorkweekHours":"40[187]",
		"HourlyUSD":3.33,
		"HourlyLocal":4.28,
		"GDPPerCapita":"36.5%",
		"EffectivePer":"1 November 2014"
	},
	"Saint Lucia":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Saint Vincent and the Grenadines":{  
		"AnnualUSD":"2,407",
		"AnnualLocal":"3,298",
		"WorkweekHours":"40",
		"HourlyUSD":1.16,
		"HourlyLocal":1.59,
		"GDPPerCapita":"29.9%",
		"EffectivePer":"1 July 2008"
	},
	"Samoa":{  
		"AnnualUSD":"1,622",
		"AnnualLocal":"2,240",
		"WorkweekHours":"40",
		"HourlyUSD":0.78,
		"HourlyLocal":1.08,
		"GDPPerCapita":"37.8%",
		"EffectivePer":"2012"
	},
	"San Marino":{  
		"AnnualUSD":"21,007",
		"AnnualLocal":"26,673",
		"WorkweekHours":"37.5[191]",
		"HourlyUSD":10.77,
		"HourlyLocal":13.68,
		"GDPPerCapita":"42.3%",
		"EffectivePer":"1 January 2014"
	},
	"São Tomé and Príncipe":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013 {{List of minimum wages by country/Row|Saudi Arabia|3000|monthly|48|2 February 2013| comment=3,000 Saudi riyals ($720) per month for public sector; does not apply to foreign workers. There are no minimum wage in private sector.[8][192]"
	},
	"Senegal":{  
		"AnnualUSD":"642",
		"AnnualLocal":"1,610",
		"WorkweekHours":"40",
		"HourlyUSD":0.31,
		"HourlyLocal":0.77,
		"GDPPerCapita":"66.2%",
		"EffectivePer":"1 January 1996"
	},
	"Serbia":{  
		"AnnualUSD":"3,271",
		"AnnualLocal":"7,338",
		"WorkweekHours":"40",
		"HourlyUSD":1.57,
		"HourlyLocal":3.53,
		"GDPPerCapita":"54.4%",
		"EffectivePer":"1 January 2017"
	},
	"Seychelles":{  
		"AnnualUSD":"4,170",
		"AnnualLocal":"6,287",
		"WorkweekHours":"40[198]",
		"HourlyUSD":2,
		"HourlyLocal":3.02,
		"GDPPerCapita":"23.1%",
		"EffectivePer":"1 January 2014"
	},
	"Sierra Leone":{  
		"AnnualUSD":"1,181",
		"AnnualLocal":"2,480",
		"WorkweekHours":"40",
		"HourlyUSD":0.57,
		"HourlyLocal":1.19,
		"GDPPerCapita":"155.9%",
		"EffectivePer":"1 January 2015"
	},
	"Singapore":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"44",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Slovakia":{  
		"AnnualUSD":"5,476",
		"AnnualLocal":"8,677",
		"WorkweekHours":"40",
		"HourlyUSD":2.63,
		"HourlyLocal":4.17,
		"GDPPerCapita":"30%",
		"EffectivePer":"1 January 2016"
	},
	"Slovenia":{  
		"AnnualUSD":"10,722",
		"AnnualLocal":"14,146",
		"WorkweekHours":"40",
		"HourlyUSD":5.15,
		"HourlyLocal":6.8,
		"GDPPerCapita":"45.5%",
		"EffectivePer":"1 January 2015"
	},
	"Solomon Islands":{  
		"AnnualUSD":"946",
		"AnnualLocal":"948",
		"WorkweekHours":"45",
		"HourlyUSD":0.4,
		"HourlyLocal":0.41,
		"GDPPerCapita":"43.4%",
		"EffectivePer":"1 May 2008"
	},
	"Somalia":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"South Africa":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"45",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"South Sudan":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2011"
	},
	"Spain":{  
		"AnnualUSD":"11,195",
		"AnnualLocal":"13,097",
		"WorkweekHours":"40",
		"HourlyUSD":5.38,
		"HourlyLocal":6.3,
		"GDPPerCapita":"37.9%",
		"EffectivePer":"1 January 2017"
	},
	"Sri Lanka":{  
		"AnnualUSD":"824",
		"AnnualLocal":"2,499",
		"WorkweekHours":"45",
		"HourlyUSD":0.35,
		"HourlyLocal":1.07,
		"GDPPerCapita":"21.3%",
		"EffectivePer":"1 January 2016"
	},
	"Sudan":{  
		"AnnualUSD":"846",
		"AnnualLocal":"1,266",
		"WorkweekHours":"40",
		"HourlyUSD":0.41,
		"HourlyLocal":0.61,
		"GDPPerCapita":"30.3%",
		"EffectivePer":"2008"
	},
	"Suriname":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"45",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Swaziland":{  
		"AnnualUSD":"694",
		"AnnualLocal":"1,128",
		"WorkweekHours":"48",
		"HourlyUSD":0.33,
		"HourlyLocal":0.54,
		"GDPPerCapita":"19%",
		"EffectivePer":"2011"
	},
	"Sweden":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Switzerland":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"41.7[213][214]",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2014"
	},
	"Syria":{  
		"AnnualUSD":"2,112",
		"AnnualLocal":"2,850",
		"WorkweekHours":"40",
		"HourlyUSD":1.02,
		"HourlyLocal":1.37,
		"GDPPerCapita":"54%",
		"EffectivePer":"2013"
	},
	"Taiwan":{  
		"AnnualUSD":"8,366",
		"AnnualLocal":"18,199",
		"WorkweekHours":"40",
		"HourlyUSD":4.02,
		"HourlyLocal":8.75,
		"GDPPerCapita":"38.9%",
		"EffectivePer":"1 January 2017"
	},
	"Tajikistan":{  
		"AnnualUSD":"487",
		"AnnualLocal":"1,444",
		"WorkweekHours":"40",
		"HourlyUSD":0.23,
		"HourlyLocal":0.69,
		"GDPPerCapita":"52%",
		"EffectivePer":"1 September 2013"
	},
	"Tanzania":{  
		"AnnualUSD":"220",
		"AnnualLocal":"616",
		"WorkweekHours":"45[218]",
		"HourlyUSD":0.09,
		"HourlyLocal":0.26,
		"GDPPerCapita":"23.1%",
		"EffectivePer":"1 July 2013"
	},
	"Thailand":{  
		"AnnualUSD":"2,652",
		"AnnualLocal":"7,223",
		"WorkweekHours":"48",
		"HourlyUSD":1.06,
		"HourlyLocal":2.89,
		"GDPPerCapita":"44.3%",
		"EffectivePer":"1 January 2013"
	},
	"Timor-Leste":{  
		"AnnualUSD":"1,380",
		"AnnualLocal":"2,062",
		"WorkweekHours":"44",
		"HourlyUSD":0.6,
		"HourlyLocal":0.9,
		"GDPPerCapita":"91.3%",
		"EffectivePer":"22 June 2012"
	},
	"Togo":{  
		"AnnualUSD":"708",
		"AnnualLocal":"1,789",
		"WorkweekHours":"40",
		"HourlyUSD":0.34,
		"HourlyLocal":0.86,
		"GDPPerCapita":"122.6%",
		"EffectivePer":"1 January 2012"
	},
	"Tonga":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"40",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Trinidad and Tobago":{  
		"AnnualUSD":"4,682",
		"AnnualLocal":"5,598",
		"WorkweekHours":"40",
		"HourlyUSD":2.25,
		"HourlyLocal":2.69,
		"GDPPerCapita":"17.2%",
		"EffectivePer":"1 January 2015"
	},
	"Tunisia":{  
		"AnnualUSD":"1,162",
		"AnnualLocal":"3,085",
		"WorkweekHours":"48",
		"HourlyUSD":0.47,
		"HourlyLocal":1.24,
		"GDPPerCapita":"27.1%",
		"EffectivePer":"2011"
	},
	"Turkey":{  
		"AnnualUSD":"6,544",
		"AnnualLocal":"12,779",
		"WorkweekHours":"45",
		"HourlyUSD":2.8,
		"HourlyLocal":5.46,
		"GDPPerCapita":"65.1%",
		"EffectivePer":"1 January 2016"
	},
	"Turkmenistan":{  
		"AnnualUSD":"1,834",
		"AnnualLocal":"4,556",
		"WorkweekHours":"40",
		"HourlyUSD":0.88,
		"HourlyLocal":2.19,
		"GDPPerCapita":"27.6%",
		"EffectivePer":"1 January 2015"
	},
	"Tuvalu":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Uganda":{  
		"AnnualUSD":"21",
		"AnnualLocal":"61",
		"WorkweekHours":"40",
		"HourlyUSD":0.01,
		"HourlyLocal":0.03,
		"GDPPerCapita":"3.3%",
		"EffectivePer":"1 January 1984"
	},
	"Ukraine":{  
		"AnnualUSD":"1,503",
		"AnnualLocal":"7,303",
		"WorkweekHours":"40",
		"HourlyUSD":0.72,
		"HourlyLocal":3.51,
		"GDPPerCapita":"92.3%",
		"EffectivePer":"1 January 2017"
	},
	"United Arab Emirates":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"48",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"United Kingdom":{  
		"AnnualUSD":"20,063",
		"AnnualLocal":"18,577",
		"WorkweekHours":"38.1[228]",
		"HourlyUSD":10.13,
		"HourlyLocal":9.38,
		"GDPPerCapita":"45%",
		"EffectivePer":"1 April 2017"
	},
	"United States":{  
		"AnnualUSD":"15,080",
		"AnnualLocal":"15,080",
		"WorkweekHours":"40",
		"HourlyUSD":7.25,
		"HourlyLocal":7.25,
		"GDPPerCapita":"27%",
		"EffectivePer":"24 July 2009"
	},
	"Uruguay":{  
		"AnnualUSD":"4,138",
		"AnnualLocal":"5,766",
		"WorkweekHours":"48",
		"HourlyUSD":1.66,
		"HourlyLocal":2.31,
		"GDPPerCapita":"27.2%",
		"EffectivePer":"1 January 2015"
	},
	"Uzbekistan":{  
		"AnnualUSD":"503",
		"AnnualLocal":"1,417",
		"WorkweekHours":"40",
		"HourlyUSD":0.24,
		"HourlyLocal":0.68,
		"GDPPerCapita":"23.6%",
		"EffectivePer":"1 September 2014"
	},
	"Vanuatu":{  
		"AnnualUSD":"3,244",
		"AnnualLocal":"3,029",
		"WorkweekHours":"40",
		"HourlyUSD":1.56,
		"HourlyLocal":1.46,
		"GDPPerCapita":"118.8%",
		"EffectivePer":"20 August 2012"
	},
	"Venezuela":{  
		"AnnualUSD":"245",
		"AnnualLocal":"134",
		"WorkweekHours":"40",
		"HourlyUSD":0.12,
		"HourlyLocal":0.06,
		"GDPPerCapita":"0.8%",
		"EffectivePer":"1 November 2016"
	},
	"Vietnam":{  
		"AnnualUSD":"1,327",
		"AnnualLocal":"3,259",
		"WorkweekHours":"40",
		"HourlyUSD":0.64,
		"HourlyLocal":1.57,
		"GDPPerCapita":"54.1%",
		"EffectivePer":"1 January 2016"
	},
	"Yemen":{  
		"AnnualUSD":"",
		"AnnualLocal":"48",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2013"
	},
	"Zambia":{  
		"AnnualUSD":"608",
		"AnnualLocal":"1,948",
		"WorkweekHours":"48",
		"HourlyUSD":0.24,
		"HourlyLocal":0.78,
		"GDPPerCapita":"50.6%",
		"EffectivePer":"4 July 2012"
	},
	"Zimbabwe":{  
		"AnnualUSD":"",
		"AnnualLocal":"",
		"WorkweekHours":"",
		"HourlyUSD":null,
		"HourlyLocal":null,
		"GDPPerCapita":"",
		"EffectivePer":"2012"
	}
};

var options = {

	//url: "resources/countries.json",

	data: countries,
	getValue: "name",

	list: {	
		match: {
			enabled: true
		},
		onSelectItemEvent: function() {
			selectedItemValue = minimumWage[$("#countries").getSelectedItemData().name];

			if(selectedItemValue && selectedItemValue.HourlyUSD) {
				context.notFound = false;
				var perHour = selectedItemValue.HourlyUSD;
				for (var i = context.iphoneInfo.length - 1; i >= 0; i--) {
					var hours = context.iphoneInfo[i].cost / perHour;
					context.iphoneInfo[i].hours = parseInt(hours).toLocaleString();
					context.iphoneInfo[i].days = (hours / 8).toFixed(1);
				}
			}
			else {
				context.notFound = true;
			}
			// Pass our data to the template
			var theCompiledHtml = theTemplate(context);
			$('#iphone-information').html(theCompiledHtml);
		}

	},

	theme: "square"
};

// Grab the template script
var theTemplateScript = $("#iphone-template").html();
// Compile the template
var theTemplate = Handlebars.compile(theTemplateScript);
// This is the default context, which is passed to the template
var context = {
	notFound: false,
	iphoneInfo: [ 
	{ name: 'iPhone X', cost: 999, hours: 0, days: 0, imgsource: 'img/iphone_x_small.jpg'},
	{ name: 'iPhone 8 Plus', cost: 799, hours: 0, days: 0, imgsource: 'img/iphone8-plus-select-2017.png'},
	{ name: 'iPhone 8', cost: 699, hours: 0, days: 0, imgsource: 'img/iphone8-select-2017.png'},
	{ name: 'iPhone 7 Plus', cost: 669, hours: 0, days: 0, imgsource: 'img/iphone7-plus-select-2016.png'},
	{ name: 'iPhone 7', cost: 549, hours: 0, days: 0, imgsource: 'img/iphone7-select-2016.png'},
	{ name: 'iPhone 6s Plus', cost: 549, hours: 0, days: 0, imgsource: 'img/iphone6sp-silver-select.png'},
	{ name: 'iPhone 6s', cost: 449, hours: 0, days: 0, imgsource: 'img/iphone6s-silver-select.png'},
	{ name: 'iPhone SE', cost: 349, hours: 0, days: 0, imgsource: 'img/iphonese-select.png'}
	]
};
$("#countries").easyAutocomplete(options);