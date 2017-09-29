import re

data = """
ACDT	Australian Central Daylight Savings Time	UTC+10:30
ACST	Australian Central Standard Time	UTC+09:30
ACT	Acre Time	UTC−05
ACT	ASEAN Common Time	UTC+06:30 – UTC+09
ACWST	Australian Central Western Standard Time (unofficial)	UTC+08:45
ADT	Atlantic Daylight Time	UTC−03
AEDT	Australian Eastern Daylight Savings Time	UTC+11
AEST	Australian Eastern Standard Time	UTC+10
AFT	Afghanistan Time	UTC+04:30
AKDT	Alaska Daylight Time	UTC−08
AKST	Alaska Standard Time	UTC−09
AMST	Amazon Summer Time (Brazil)[1]	UTC−03
AMT	Amazon Time (Brazil)[2]	UTC−04
AMT	Armenia Time	UTC+04
ART	Argentina Time	UTC−03
AST	Arabia Standard Time	UTC+03
AST	Atlantic Standard Time	UTC−04
AWST	Australian Western Standard Time	UTC+08
AZOST	Azores Summer Time	UTC±00
AZOT	Azores Standard Time	UTC−01
AZT	Azerbaijan Time	UTC+04
BDT	Brunei Time	UTC+08
BIOT	British Indian Ocean Time	UTC+06
BIT	Baker Island Time	UTC−12
BOT	Bolivia Time	UTC−04
BRST	Brasília Summer Time	UTC−02
BRT	Brasilia Time	UTC−03
BST	Bangladesh Standard Time	UTC+06
BST	Bougainville Standard Time[3]	UTC+11
BST	British Summer Time (British Standard Time from Feb 1968 to Oct 1971)	UTC+01
BTT	Bhutan Time	UTC+06
CAT	Central Africa Time	UTC+02
CCT	Cocos Islands Time	UTC+06:30
CDT	Central Daylight Time (North America)	UTC−05
CDT	Cuba Daylight Time[4]	UTC−04
CEST	Central European Summer Time (Cf. HAEC)	UTC+02
CET	Central European Time	UTC+01
CHADT	Chatham Daylight Time	UTC+13:45
CHAST	Chatham Standard Time	UTC+12:45
CHOT	Choibalsan Standard Time	UTC+08
CHOST	Choibalsan Summer Time	UTC+09
CHST	Chamorro Standard Time	UTC+10
CHUT	Chuuk Time	UTC+10
CIST	Clipperton Island Standard Time	UTC−08
CIT	Central Indonesia Time	UTC+08
CKT	Cook Island Time	UTC−10
CLST	Chile Summer Time	UTC−03
CLT	Chile Standard Time	UTC−04
COST	Colombia Summer Time	UTC−04
COT	Colombia Time	UTC−05
CST	Central Standard Time (North America)	UTC−06
CST	China Standard Time	UTC+08
ACST	Australian Central Standard Time	UTC+09:30
ACDT	Australian Central Daylight Time	UTC+10:30
CST	Cuba Standard Time	UTC−05
CT	China time	UTC+08
CVT	Cape Verde Time	UTC−01
CWST	Central Western Standard Time (Australia) unofficial	UTC+08:45
CXT	Christmas Island Time	UTC+07
DAVT	Davis Time	UTC+07
DDUT	Dumont d'Urville Time	UTC+10
DFT	AIX-specific equivalent of Central European Time[5]	UTC+01
EASST	Easter Island Summer Time	UTC−05
EAST	Easter Island Standard Time	UTC−06
EAT	East Africa Time	UTC+03
ECT	Eastern Caribbean Time (does not recognise DST)	UTC−04
ECT	Ecuador Time	UTC−05
EDT	Eastern Daylight Time (North America)	UTC−04
AEDT	Australian Eastern Summer Time	UTC+11
EEST	Eastern European Summer Time	UTC+03
EET	Eastern European Time	UTC+02
EGST	Eastern Greenland Summer Time	UTC±00
EGT	Eastern Greenland Time	UTC−01
EIT	Eastern Indonesian Time	UTC+09
EST	Eastern Standard Time (North America)	UTC−05
AEST	Australian Eastern Standard Time	UTC+10
FET	Further-eastern European Time	UTC+03
FJT	Fiji Time	UTC+12
FKST	Falkland Islands Summer Time	UTC−03
FKT	Falkland Islands Time	UTC−04
FNT	Fernando de Noronha Time	UTC−02
GALT	Galápagos Time	UTC−06
GAMT	Gambier Islands Time	UTC−09
GET	Georgia Standard Time	UTC+04
GFT	French Guiana Time	UTC−03
GILT	Gilbert Island Time	UTC+12
GIT	Gambier Island Time	UTC−09
GMT	Greenwich Mean Time	UTC±00
GST	South Georgia and the South Sandwich Islands Time	UTC−02
GST	Gulf Standard Time	UTC+04
GYT	Guyana Time	UTC−04
HDT	Hawaii–Aleutian Daylight Time	UTC−09
HAEC	Heure Avancée d'Europe Centrale French-language name for CEST	UTC+02
HST	Hawaii–Aleutian Standard Time	UTC−10
HKT	Hong Kong Time	UTC+08
HMT	Heard and McDonald Islands Time	UTC+05
HOVST	Khovd Summer Time	UTC+08
HOVT	Khovd Standard Time	UTC+07
ICT	Indochina Time	UTC+07
IDT	Israel Daylight Time	UTC+03
IOT	Indian Ocean Time	UTC+03
IRDT	Iran Daylight Time	UTC+04:30
IRKT	Irkutsk Time	UTC+08
IRST	Iran Standard Time	UTC+03:30
IST	Indian Standard Time	UTC+05:30
IST	Irish Standard Time[6]	UTC+01
IST	Israel Standard Time	UTC+02
JST	Japan Standard Time	UTC+09
KGT	Kyrgyzstan Time	UTC+06
KOST	Kosrae Time	UTC+11
KRAT	Krasnoyarsk Time	UTC+07
KST	Korea Standard Time	UTC+09
LHST	Lord Howe Standard Time	UTC+10:30
LHST	Lord Howe Summer Time	UTC+11
LINT	Line Islands Time	UTC+14
MAGT	Magadan Time	UTC+12
MART	Marquesas Islands Time	UTC−09:30
MAWT	Mawson Station Time	UTC+05
MDT	Mountain Daylight Time (North America)	UTC−06
MET	Middle European Time Same zone as CET	UTC+01
MEST	Middle European Summer Time Same zone as CEST	UTC+02
MHT	Marshall Islands Time	UTC+12
MIST	Macquarie Island Station Time	UTC+11
MIT	Marquesas Islands Time	UTC−09:30
MMT	Myanmar Standard Time	UTC+06:30
MSK	Moscow Time	UTC+03
MST	Malaysia Standard Time	UTC+08
MST	Mountain Standard Time (North America)	UTC−07
MUT	Mauritius Time	UTC+04
MVT	Maldives Time	UTC+05
MYT	Malaysia Time	UTC+08
NCT	New Caledonia Time	UTC+11
NDT	Newfoundland Daylight Time	UTC−02:30
NFT	Norfolk Island Time	UTC+11
NPT	Nepal Time	UTC+05:45
NST	Newfoundland Standard Time	UTC−03:30
NT	Newfoundland Time	UTC−03:30
NUT	Niue Time	UTC−11
NZDT	New Zealand Daylight Time	UTC+13
NZST	New Zealand Standard Time	UTC+12
OMST	Omsk Time	UTC+06
ORAT	Oral Time	UTC+05
PDT	Pacific Daylight Time (North America)	UTC−07
PET	Peru Time	UTC−05
PETT	Kamchatka Time	UTC+12
PGT	Papua New Guinea Time	UTC+10
PHOT	Phoenix Island Time	UTC+13
PHT	Philippine Time	UTC+08
PKT	Pakistan Standard Time	UTC+05
PMDT	Saint Pierre and Miquelon Daylight Time	UTC−02
PMST	Saint Pierre and Miquelon Standard Time	UTC−03
PONT	Pohnpei Standard Time	UTC+11
PST	Pacific Standard Time (North America)	UTC−08
PST	Philippine Standard Time	UTC+08
PYST	Paraguay Summer Time[7]	UTC−03
PYT	Paraguay Time[8]	UTC−04
RET	Réunion Time	UTC+04
ROTT	Rothera Research Station Time	UTC−03
SAKT	Sakhalin Island Time	UTC+11
SAMT	Samara Time	UTC+04
SAST	South African Standard Time	UTC+02
SBT	Solomon Islands Time	UTC+11
SCT	Seychelles Time	UTC+04
SDT	Samoa Daylight Time	UTC−10
SGT	Singapore Time	UTC+08
SLST	Sri Lanka Standard Time	UTC+05:30
SRET	Srednekolymsk Time	UTC+11
SRT	Suriname Time	UTC−03
SST	Samoa Standard Time	UTC−11
SST	Singapore Standard Time	UTC+08
SYOT	Showa Station Time	UTC+03
TAHT	Tahiti Time	UTC−10
THA	Thailand Standard Time	UTC+07
TFT	Indian/Kerguelen	UTC+05
TJT	Tajikistan Time	UTC+05
TKT	Tokelau Time	UTC+13
TLT	Timor Leste Time	UTC+09
TMT	Turkmenistan Time	UTC+05
TRT	Turkey Time	UTC+03
TOT	Tonga Time	UTC+13
TVT	Tuvalu Time	UTC+12
ULAST	Ulaanbaatar Summer Time	UTC+09
ULAT	Ulaanbaatar Standard Time	UTC+08
USZ1	Kaliningrad Time	UTC+02
UTC	Coordinated Universal Time	UTC±00
UYST	Uruguay Summer Time	UTC−02
UYT	Uruguay Standard Time	UTC−03
UZT	Uzbekistan Time	UTC+05
VET	Venezuelan Standard Time	UTC−04
VLAT	Vladivostok Time	UTC+10
VOLT	Volgograd Time	UTC+04
VOST	Vostok Station Time	UTC+06
VUT	Vanuatu Time	UTC+11
WAKT	Wake Island Time	UTC+12
WAST	West Africa Summer Time	UTC+02
WAT	West Africa Time	UTC+01
WEST	Western European Summer Time	UTC+01
WET	Western European Time	UTC±00
WIT	Western Indonesian Time	UTC+07
WST	Western Standard Time	UTC+08
YAKT	Yakutsk Time	UTC+09
YEKT	Yekaterinburg Time	UTC+05
"""

data_list = data.split()
compressed_data = []
complete_data_list = []

temp_string = ""

for data in data_list:
    if data[0:3] == "UTC" and len(data) > 4:
        temp_string += data
        compressed_data.append(temp_string)
        temp_string = ""
    else:
        temp_string += data
        temp_string += " "

compressed_data.pop(4)

i = 1

for data in compressed_data:
    split_data = data.split()
    text = '{"name":"'
    name = split_data[1:-1]
    name_string = ""
    for data in name:
        name_string += data
        name_string += " "
    name_string = name_string[:-1]
    name_string = re.sub("[\(\[].*?[\)\]]", "", name_string)
    while name_string[-1] == " ":
        name_string = name_string[:-1]
    text += name_string
    text += '", "abbreviation":"'
    text += split_data[0]
    text += '", "offset":"'

    offset = split_data[-1]

    if offset[3] == "+":
        text += '-'
        offset_time = offset.split("+")[1]
    else:
        offset_time = offset[4:]
    offset_minute = "0"

    if len(offset_time) > 2:
        offset_hour = offset_time.split(":")[0]
        offset_minute = offset_time.split(":")[1]
    else:
        offset_hour = offset_time

    offset_time = str(int(offset_hour) * 60 + int(offset_minute))

    text += offset_time
    text += '"}'
    # print(text)
    complete_data_list.append(text)

print(complete_data_list)
