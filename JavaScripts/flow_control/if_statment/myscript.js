var hot = false
var temp = 60

if(temp > 80){
  hot = console.log("hot outside.!");
}else if (temp <= 80 && temp >= 50) {
  console.log("Average Temp outside");

}else if (temp < 50 && temp >= 32) {
  console.log("Prety cold outside");
}else {
  console.log("Very Cold.");
}
