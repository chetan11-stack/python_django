var ham = 10;
var cheese =10;

var report = "blank";

if(ham >= 10 && cheese >=10){
  report = "Strong sale of both ham and cheese"
}else if (ham === 0 && cheese ===0) {
  report ="Nothing Sold"
}else {
  report = "we have some sale of items."
}

console.log(report);
