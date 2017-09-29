/*jshint esversion: 6 */

let timezones = ['{"name":"Australian Central Daylight Savings Time", "abbreviation":"ACDT", "offset":"-630"}', '{"name":"Australian Central Standard Time", "abbreviation":"ACST", "offset":"-570"}', '{"name":"Acre Time", "abbreviation":"ACT", "offset":"300"}', '{"name":"ASEAN Common Time", "abbreviation":"ACT", "offset":"-390"}', '{"name":"Australian Central Western Standard Time", "abbreviation":"ACWST", "offset":"-525"}', '{"name":"Atlantic Daylight Time", "abbreviation":"ADT", "offset":"180"}', '{"name":"Australian Eastern Daylight Savings Time", "abbreviation":"AEDT", "offset":"-660"}', '{"name":"Australian Eastern Standard Time", "abbreviation":"AEST", "offset":"-600"}', '{"name":"Afghanistan Time", "abbreviation":"AFT", "offset":"-270"}', '{"name":"Alaska Daylight Time", "abbreviation":"AKDT", "offset":"480"}', '{"name":"Alaska Standard Time", "abbreviation":"AKST", "offset":"540"}', '{"name":"Amazon Summer Time", "abbreviation":"AMST", "offset":"180"}', '{"name":"Amazon Time", "abbreviation":"AMT", "offset":"240"}', '{"name":"Armenia Time", "abbreviation":"AMT", "offset":"-240"}', '{"name":"Argentina Time", "abbreviation":"ART", "offset":"180"}', '{"name":"Arabia Standard Time", "abbreviation":"AST", "offset":"-180"}', '{"name":"Atlantic Standard Time", "abbreviation":"AST", "offset":"240"}', '{"name":"Australian Western Standard Time", "abbreviation":"AWST", "offset":"-480"}', '{"name":"Azores Summer Time", "abbreviation":"AZOST", "offset":"0"}', '{"name":"Azores Standard Time", "abbreviation":"AZOT", "offset":"60"}', '{"name":"Azerbaijan Time", "abbreviation":"AZT", "offset":"-240"}', '{"name":"Brunei Time", "abbreviation":"BDT", "offset":"-480"}', '{"name":"British Indian Ocean Time", "abbreviation":"BIOT", "offset":"-360"}', '{"name":"Baker Island Time", "abbreviation":"BIT", "offset":"720"}', '{"name":"Bolivia Time", "abbreviation":"BOT", "offset":"240"}', '{"name":"Brasília Summer Time", "abbreviation":"BRST", "offset":"120"}', '{"name":"Brasilia Time", "abbreviation":"BRT", "offset":"180"}', '{"name":"Bangladesh Standard Time", "abbreviation":"BST", "offset":"-360"}', '{"name":"Bougainville Standard Time", "abbreviation":"BST", "offset":"-660"}', '{"name":"British Summer Time", "abbreviation":"BST", "offset":"-60"}', '{"name":"Bhutan Time", "abbreviation":"BTT", "offset":"-360"}', '{"name":"Central Africa Time", "abbreviation":"CAT", "offset":"-120"}', '{"name":"Cocos Islands Time", "abbreviation":"CCT", "offset":"-390"}', '{"name":"Central Daylight Time", "abbreviation":"CDT", "offset":"300"}', '{"name":"Cuba Daylight Time", "abbreviation":"CDT", "offset":"240"}', '{"name":"Central European Summer Time", "abbreviation":"CEST", "offset":"-120"}', '{"name":"Central European Time", "abbreviation":"CET", "offset":"-60"}', '{"name":"Chatham Daylight Time", "abbreviation":"CHADT", "offset":"-825"}', '{"name":"Chatham Standard Time", "abbreviation":"CHAST", "offset":"-765"}', '{"name":"Choibalsan Standard Time", "abbreviation":"CHOT", "offset":"-480"}', '{"name":"Choibalsan Summer Time", "abbreviation":"CHOST", "offset":"-540"}', '{"name":"Chamorro Standard Time", "abbreviation":"CHST", "offset":"-600"}', '{"name":"Chuuk Time", "abbreviation":"CHUT", "offset":"-600"}', '{"name":"Clipperton Island Standard Time", "abbreviation":"CIST", "offset":"480"}', '{"name":"Central Indonesia Time", "abbreviation":"CIT", "offset":"-480"}', '{"name":"Cook Island Time", "abbreviation":"CKT", "offset":"600"}', '{"name":"Chile Summer Time", "abbreviation":"CLST", "offset":"180"}', '{"name":"Chile Standard Time", "abbreviation":"CLT", "offset":"240"}', '{"name":"Colombia Summer Time", "abbreviation":"COST", "offset":"240"}', '{"name":"Colombia Time", "abbreviation":"COT", "offset":"300"}', '{"name":"Central Standard Time", "abbreviation":"CST", "offset":"360"}', '{"name":"China Standard Time", "abbreviation":"CST", "offset":"-480"}', '{"name":"Australian Central Standard Time", "abbreviation":"ACST", "offset":"-570"}', '{"name":"Australian Central Daylight Time", "abbreviation":"ACDT", "offset":"-630"}', '{"name":"Cuba Standard Time", "abbreviation":"CST", "offset":"300"}', '{"name":"China time", "abbreviation":"CT", "offset":"-480"}', '{"name":"Cape Verde Time", "abbreviation":"CVT", "offset":"60"}', '{"name":"Central Western Standard Time  unofficial", "abbreviation":"CWST", "offset":"-525"}', '{"name":"Christmas Island Time", "abbreviation":"CXT", "offset":"-420"}', '{"name":"Davis Time", "abbreviation":"DAVT", "offset":"-420"}', '{"name":"Dumont d\'Urville Time", "abbreviation":"DDUT", "offset":"-600"}', '{"name":"AIX-specific equivalent of Central European Time", "abbreviation":"DFT", "offset":"-60"}', '{"name":"Easter Island Summer Time", "abbreviation":"EASST", "offset":"300"}', '{"name":"Easter Island Standard Time", "abbreviation":"EAST", "offset":"360"}', '{"name":"East Africa Time", "abbreviation":"EAT", "offset":"-180"}', '{"name":"Eastern Caribbean Time", "abbreviation":"ECT", "offset":"240"}', '{"name":"Ecuador Time", "abbreviation":"ECT", "offset":"300"}', '{"name":"Eastern Daylight Time", "abbreviation":"EDT", "offset":"240"}', '{"name":"Australian Eastern Summer Time", "abbreviation":"AEDT", "offset":"-660"}', '{"name":"Eastern European Summer Time", "abbreviation":"EEST", "offset":"-180"}', '{"name":"Eastern European Time", "abbreviation":"EET", "offset":"-120"}', '{"name":"Eastern Greenland Summer Time", "abbreviation":"EGST", "offset":"0"}', '{"name":"Eastern Greenland Time", "abbreviation":"EGT", "offset":"60"}', '{"name":"Eastern Indonesian Time", "abbreviation":"EIT", "offset":"-540"}', '{"name":"Eastern Standard Time", "abbreviation":"EST", "offset":"300"}', '{"name":"Australian Eastern Standard Time", "abbreviation":"AEST", "offset":"-600"}', '{"name":"Further-eastern European Time", "abbreviation":"FET", "offset":"-180"}', '{"name":"Fiji Time", "abbreviation":"FJT", "offset":"-720"}', '{"name":"Falkland Islands Summer Time", "abbreviation":"FKST", "offset":"180"}', '{"name":"Falkland Islands Time", "abbreviation":"FKT", "offset":"240"}', '{"name":"Fernando de Noronha Time", "abbreviation":"FNT", "offset":"120"}', '{"name":"Galápagos Time", "abbreviation":"GALT", "offset":"360"}', '{"name":"Gambier Islands Time", "abbreviation":"GAMT", "offset":"540"}', '{"name":"Georgia Standard Time", "abbreviation":"GET", "offset":"-240"}', '{"name":"French Guiana Time", "abbreviation":"GFT", "offset":"180"}', '{"name":"Gilbert Island Time", "abbreviation":"GILT", "offset":"-720"}', '{"name":"Gambier Island Time", "abbreviation":"GIT", "offset":"540"}', '{"name":"Greenwich Mean Time", "abbreviation":"GMT", "offset":"0"}', '{"name":"South Georgia and the South Sandwich Islands Time", "abbreviation":"GST", "offset":"120"}', '{"name":"Gulf Standard Time", "abbreviation":"GST", "offset":"-240"}', '{"name":"Guyana Time", "abbreviation":"GYT", "offset":"240"}', '{"name":"Hawaii–Aleutian Daylight Time", "abbreviation":"HDT", "offset":"540"}', '{"name":"Heure Avancée d\'Europe Centrale French-language name for CEST", "abbreviation":"HAEC", "offset":"-120"}', '{"name":"Hawaii–Aleutian Standard Time", "abbreviation":"HST", "offset":"600"}', '{"name":"Hong Kong Time", "abbreviation":"HKT", "offset":"-480"}', '{"name":"Heard and McDonald Islands Time", "abbreviation":"HMT", "offset":"-300"}', '{"name":"Khovd Summer Time", "abbreviation":"HOVST", "offset":"-480"}', '{"name":"Khovd Standard Time", "abbreviation":"HOVT", "offset":"-420"}', '{"name":"Indochina Time", "abbreviation":"ICT", "offset":"-420"}', '{"name":"Israel Daylight Time", "abbreviation":"IDT", "offset":"-180"}', '{"name":"Indian Ocean Time", "abbreviation":"IOT", "offset":"-180"}', '{"name":"Iran Daylight Time", "abbreviation":"IRDT", "offset":"-270"}', '{"name":"Irkutsk Time", "abbreviation":"IRKT", "offset":"-480"}', '{"name":"Iran Standard Time", "abbreviation":"IRST", "offset":"-210"}', '{"name":"Indian Standard Time", "abbreviation":"IST", "offset":"-330"}', '{"name":"Irish Standard Time", "abbreviation":"IST", "offset":"-60"}', '{"name":"Israel Standard Time", "abbreviation":"IST", "offset":"-120"}', '{"name":"Japan Standard Time", "abbreviation":"JST", "offset":"-540"}', '{"name":"Kyrgyzstan Time", "abbreviation":"KGT", "offset":"-360"}', '{"name":"Kosrae Time", "abbreviation":"KOST", "offset":"-660"}', '{"name":"Krasnoyarsk Time", "abbreviation":"KRAT", "offset":"-420"}', '{"name":"Korea Standard Time", "abbreviation":"KST", "offset":"-540"}', '{"name":"Lord Howe Standard Time", "abbreviation":"LHST", "offset":"-630"}', '{"name":"Lord Howe Summer Time", "abbreviation":"LHST", "offset":"-660"}', '{"name":"Line Islands Time", "abbreviation":"LINT", "offset":"-840"}', '{"name":"Magadan Time", "abbreviation":"MAGT", "offset":"-720"}', '{"name":"Marquesas Islands Time", "abbreviation":"MART", "offset":"570"}', '{"name":"Mawson Station Time", "abbreviation":"MAWT", "offset":"-300"}', '{"name":"Mountain Daylight Time", "abbreviation":"MDT", "offset":"360"}', '{"name":"Middle European Time Same zone as CET", "abbreviation":"MET", "offset":"-60"}', '{"name":"Middle European Summer Time Same zone as CEST", "abbreviation":"MEST", "offset":"-120"}', '{"name":"Marshall Islands Time", "abbreviation":"MHT", "offset":"-720"}', '{"name":"Macquarie Island Station Time", "abbreviation":"MIST", "offset":"-660"}', '{"name":"Marquesas Islands Time", "abbreviation":"MIT", "offset":"570"}', '{"name":"Myanmar Standard Time", "abbreviation":"MMT", "offset":"-390"}', '{"name":"Moscow Time", "abbreviation":"MSK", "offset":"-180"}', '{"name":"Malaysia Standard Time", "abbreviation":"MST", "offset":"-480"}', '{"name":"Mountain Standard Time", "abbreviation":"MST", "offset":"420"}', '{"name":"Mauritius Time", "abbreviation":"MUT", "offset":"-240"}', '{"name":"Maldives Time", "abbreviation":"MVT", "offset":"-300"}', '{"name":"Malaysia Time", "abbreviation":"MYT", "offset":"-480"}', '{"name":"New Caledonia Time", "abbreviation":"NCT", "offset":"-660"}', '{"name":"Newfoundland Daylight Time", "abbreviation":"NDT", "offset":"150"}', '{"name":"Norfolk Island Time", "abbreviation":"NFT", "offset":"-660"}', '{"name":"Nepal Time", "abbreviation":"NPT", "offset":"-345"}', '{"name":"Newfoundland Standard Time", "abbreviation":"NST", "offset":"210"}', '{"name":"Newfoundland Time", "abbreviation":"NT", "offset":"210"}', '{"name":"Niue Time", "abbreviation":"NUT", "offset":"660"}', '{"name":"New Zealand Daylight Time", "abbreviation":"NZDT", "offset":"-780"}', '{"name":"New Zealand Standard Time", "abbreviation":"NZST", "offset":"-720"}', '{"name":"Omsk Time", "abbreviation":"OMST", "offset":"-360"}', '{"name":"Oral Time", "abbreviation":"ORAT", "offset":"-300"}', '{"name":"Pacific Daylight Time", "abbreviation":"PDT", "offset":"420"}', '{"name":"Peru Time", "abbreviation":"PET", "offset":"300"}', '{"name":"Kamchatka Time", "abbreviation":"PETT", "offset":"-720"}', '{"name":"Papua New Guinea Time", "abbreviation":"PGT", "offset":"-600"}', '{"name":"Phoenix Island Time", "abbreviation":"PHOT", "offset":"-780"}', '{"name":"Philippine Time", "abbreviation":"PHT", "offset":"-480"}', '{"name":"Pakistan Standard Time", "abbreviation":"PKT", "offset":"-300"}', '{"name":"Saint Pierre and Miquelon Daylight Time", "abbreviation":"PMDT", "offset":"120"}', '{"name":"Saint Pierre and Miquelon Standard Time", "abbreviation":"PMST", "offset":"180"}', '{"name":"Pohnpei Standard Time", "abbreviation":"PONT", "offset":"-660"}', '{"name":"Pacific Standard Time", "abbreviation":"PST", "offset":"480"}', '{"name":"Philippine Standard Time", "abbreviation":"PST", "offset":"-480"}', '{"name":"Paraguay Summer Time", "abbreviation":"PYST", "offset":"180"}', '{"name":"Paraguay Time", "abbreviation":"PYT", "offset":"240"}', '{"name":"Réunion Time", "abbreviation":"RET", "offset":"-240"}', '{"name":"Rothera Research Station Time", "abbreviation":"ROTT", "offset":"180"}', '{"name":"Sakhalin Island Time", "abbreviation":"SAKT", "offset":"-660"}', '{"name":"Samara Time", "abbreviation":"SAMT", "offset":"-240"}', '{"name":"South African Standard Time", "abbreviation":"SAST", "offset":"-120"}', '{"name":"Solomon Islands Time", "abbreviation":"SBT", "offset":"-660"}', '{"name":"Seychelles Time", "abbreviation":"SCT", "offset":"-240"}', '{"name":"Samoa Daylight Time", "abbreviation":"SDT", "offset":"600"}', '{"name":"Singapore Time", "abbreviation":"SGT", "offset":"-480"}', '{"name":"Sri Lanka Standard Time", "abbreviation":"SLST", "offset":"-330"}', '{"name":"Srednekolymsk Time", "abbreviation":"SRET", "offset":"-660"}', '{"name":"Suriname Time", "abbreviation":"SRT", "offset":"180"}', '{"name":"Samoa Standard Time", "abbreviation":"SST", "offset":"660"}', '{"name":"Singapore Standard Time", "abbreviation":"SST", "offset":"-480"}', '{"name":"Showa Station Time", "abbreviation":"SYOT", "offset":"-180"}', '{"name":"Tahiti Time", "abbreviation":"TAHT", "offset":"600"}', '{"name":"Thailand Standard Time", "abbreviation":"THA", "offset":"-420"}', '{"name":"Indian/Kerguelen", "abbreviation":"TFT", "offset":"-300"}', '{"name":"Tajikistan Time", "abbreviation":"TJT", "offset":"-300"}', '{"name":"Tokelau Time", "abbreviation":"TKT", "offset":"-780"}', '{"name":"Timor Leste Time", "abbreviation":"TLT", "offset":"-540"}', '{"name":"Turkmenistan Time", "abbreviation":"TMT", "offset":"-300"}', '{"name":"Turkey Time", "abbreviation":"TRT", "offset":"-180"}', '{"name":"Tonga Time", "abbreviation":"TOT", "offset":"-780"}', '{"name":"Tuvalu Time", "abbreviation":"TVT", "offset":"-720"}', '{"name":"Ulaanbaatar Summer Time", "abbreviation":"ULAST", "offset":"-540"}', '{"name":"Ulaanbaatar Standard Time", "abbreviation":"ULAT", "offset":"-480"}', '{"name":"Kaliningrad Time", "abbreviation":"USZ1", "offset":"-120"}', '{"name":"Coordinated Universal Time", "abbreviation":"UTC", "offset":"0"}', '{"name":"Uruguay Summer Time", "abbreviation":"UYST", "offset":"120"}', '{"name":"Uruguay Standard Time", "abbreviation":"UYT", "offset":"180"}', '{"name":"Uzbekistan Time", "abbreviation":"UZT", "offset":"-300"}', '{"name":"Venezuelan Standard Time", "abbreviation":"VET", "offset":"240"}', '{"name":"Vladivostok Time", "abbreviation":"VLAT", "offset":"-600"}', '{"name":"Volgograd Time", "abbreviation":"VOLT", "offset":"-240"}', '{"name":"Vostok Station Time", "abbreviation":"VOST", "offset":"-360"}', '{"name":"Vanuatu Time", "abbreviation":"VUT", "offset":"-660"}', '{"name":"Wake Island Time", "abbreviation":"WAKT", "offset":"-720"}', '{"name":"West Africa Summer Time", "abbreviation":"WAST", "offset":"-120"}', '{"name":"West Africa Time", "abbreviation":"WAT", "offset":"-60"}', '{"name":"Western European Summer Time", "abbreviation":"WEST", "offset":"-60"}', '{"name":"Western European Time", "abbreviation":"WET", "offset":"0"}', '{"name":"Western Indonesian Time", "abbreviation":"WIT", "offset":"-420"}', '{"name":"Western Standard Time", "abbreviation":"WST", "offset":"-480"}', '{"name":"Yakutsk Time", "abbreviation":"YAKT", "offset":"-540"}', '{"name":"Yekaterinburg Time", "abbreviation":"YEKT", "offset":"-300"}'];

timezoneList = [];

for(var i = 0;i < timezones.length; i++){
  timezoneObject = JSON.parse(timezones[i]);
  timezoneList.push(timezoneObject);
}

function getQueryVariable(variable) {
var query = window.location.search.substring(1);
var vars = query.split('&');
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
    }
}
// console.log('Query variable %s not found', variable);
}

let displayTime = `<div id="mini-display" class="display">
  <p id="input-time" class="display-time">

  </p>
</div>
<div class="text-wrapper">
  <p id="source-timezone">

  </p>
</div>
<div class="text-wrapper">
  <p>
    is
  </p>
</div>
<div id="main-display" class="display">
  <p id="final-time" class="display-time">

  </p>
</div>
<div id="text-wrapper">
  <p id="local-timezone">

  </p>
</div>
<div id="text-wrapper">
  <p>
    All times 24hr
  </p>
</div>`;

let displayForm = `
<p id="intro">
  This tool helps netizens coordinate across time zones. Enter a time and
  timezone. The site will generate a link translating the given time to the
  local time of anyone clicking on the link. Give it a try!
</p>
<main>
  <form id="input-form">
    <label class="label">Select a time</label>
    <select id="hour-input" name="hour" class="input"></select>
    <label>:</label>
    <select id="minute-input" name="minute" class="input"></select>
    <label class="label">Select a timezone</label>
    <select id="timezone-input" name="timezone" class="input"></select>
    <input type="submit" value="Get url" data-clipboard-action="copy" data-clipboard-target="#intro" id="submit-button"/>
  </form>
  <p id="url">

  </p>
</main>`;


if (getQueryVariable("time")){
  // document.getElementsByTagName('body')[0].innerHTML = displayTime;
  $('body').append(displayTime);

  let inputTime = getQueryVariable("time");
  inputTimeMinutes = Number(inputTime.split(":")[0]) * 60 + Number(inputTime.split(":")[1]);

  let sourceTimezone = decodeURIComponent(getQueryVariable("timezone").replace(/\+/g, " "));

  for(var i = 0; i < timezoneList.length; i++){
    if(timezoneList[i].name === sourceTimezone){
      sourceOffset = timezoneList[i].offset;
      sourceShort = timezoneList[i].abbreviation;
    }
  }

  let localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let localOffset = new Date().getTimezoneOffset();
  let zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
  let totalOffset = Number(sourceOffset) - Number(localOffset);
  let finalTime = inputTimeMinutes + totalOffset;
  console.log(finalTime);
  console.log(finalTime/60);
  if(finalTime < 0){
    finalHour = Math.ceil(finalTime / 60);
  }
  else{
    finalHour = Math.floor(finalTime / 60);
  }
  console.log(finalHour);
  while(finalHour < 0){
    finalHour += 24;
  }
  while(finalHour > 23){
    finalHour -= 24;
  }
  finalTime = finalHour + ":" + Math.abs(finalTime % 60);

  if(finalTime.length === 4 && finalTime[2] === ":"){
    finalTime += "0";
  }
  else if(finalTime.length === 4){
    finalTime = "0" + finalTime;
  }
  else if(finalTime.length === 3){
    finalTime = "0" + finalTime + "0";
  }
  document.getElementById("input-time").innerHTML = inputTime;
  document.getElementById("source-timezone").innerHTML = "in timezone: \"" + sourceShort + "\"";
  // document.getElementById("time").innerHTML = "Input time in minutes " + inputTimeMinutes;
  // document.getElementById("source-offset").innerHTML = "Source UTC offset in minutes " + sourceOffset;
  document.getElementById("local-timezone").innerHTML = "in your timezone: \"" + localTimezone + "\"";
  // document.getElementById("local-offset").innerHTML = "Local UTC offset in minutes " + localOffset;
  // document.getElementById("total-offset").innerHTML = "Total offset " + totalOffset;
  document.getElementById("final-time").innerHTML = finalTime;
}
else {
  // document.getElementsByTagName('body')[0].innerHTML = displayForm;
  $('body').append(displayForm);
  let hourInput = "";
  let minuteInput = "";
  let timezoneInput = "";

  for (var i = 0; i <24; i++){
    let n = String(i);
    if (n.length == 1){
      n = "0" + n;
    }
    hourInput += '<option value="' + n + '">' + n + '</option>';
  }
  for (var i = 0; i <60; i++){
    let n = String(i);
    if (n.length == 1){
      n = "0" + n;
    }
    minuteInput += '<option value="' + n + '">' + n + '</option>';
  }
  for (var i = 0; i < timezoneList.length; i++){
    timezoneInput += '<option value="';
    timezoneInput += timezoneList[i].name;
    timezoneInput += '">';
    timezoneInput += timezoneList[i].abbreviation;
    timezoneInput += '" | "';
    timezoneInput += timezoneList[i].name;
    timezoneInput += '</option>';
  }


  document.getElementById('hour-input').innerHTML = hourInput;
  document.getElementById('minute-input').innerHTML = minuteInput;
  document.getElementById('timezone-input').innerHTML = timezoneInput;

  let url = "jakec.co.uk?time=";

  $('#input-form').submit(function(event){
    event.preventDefault();
    url = "jakec.co.uk?time=";
    url += $('#hour-input').val();
    url += ':';
    url += $('#minute-input').val();
    url += '&timezone=';
    url += $('#timezone-input').val();
    url = encodeURI(url);
    document.getElementById('url').innerHTML = url;
    $('#url').css({"padding":"5px 25px 5px 25px"});
  });
}
