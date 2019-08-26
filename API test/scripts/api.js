/* global $ axios */
/*
This function is to get the PSI reading from the URL
and returns it via a callback function
*/
function getReading(processData)
{
    axios.get("https://api.data.gov.sg/v1/environment/psi")
        .then(function(response){
            let reading = response.data.items[0].readings.pm25_twenty_four_hourly;
            processData(reading);
        })
}
// alert("link");
// Async-Wait method
// async function getReading() {
//     let response = await axios.get("https://api.data.gov.sg/v1/environment/psi")
//     return response.data.items[0].readings.co_eight_hour_max;
// }
// $(function(){
//     getReading().then(function(readings){
//         let d = {
//                 'west' : 'West (Jurong)',
//                 'east' : 'East (Changi)',
//                 'north' : 'North (Yishun)',
//                 'south' : 'South (Sentosa)',
//                 'central' : 'CBD (Town)',
//                 'national' : 'Singapore'
//             }
//             for(let key in readings){
//                 $("#psi").append(`<li>Version Async ${d[key]}: ${readings[key]}</li>`);
//             }
//     })
// })
//     $("#psi").append("<br>");