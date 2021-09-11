
function trolai() {
  window.history.back();
}
function QGNOBAN(){
	let CountryNOTBAN = "Việt Nam (Vietnam), Vương Quốc Anh (United Kingdom), Nhật Bản (Japan)(Tạm), Ấn Độ (India)(Tạm) ";  // QUỐC GIA
	document.getElementById("qgnotban").innerHTML =
	CountryNOTBAN + " "; 
}
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
} 
else {
	x.innerHTML = "Geolocation không được hỗ trợ bởi trình duyệt này.";
}
}
var x = document.getElementById("container");
function showPosition(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat, lon)
	mapholder = document.getElementById('mapholder')
	mapholder.style.height = '250px';
	mapholder.style.width = '100%';
	var myOptions = {
		center:latlon,zoom:14,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL
}
}
var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
var marker = new google.maps.Marker({position:latlon,map:map,title:"Bạn ở đây"});
}
function showError(error) {
	switch(error.code) {
	case error.PERMISSION_DENIED:
	x.innerHTML = "Người sử dụng từ chối cho xác định vị trí."
	break;
	case error.POSITION_UNAVAILABLE:
	x.innerHTML = "Thông tin vị trí không có sẵn."
	break;
	case error.TIMEOUT:
	x.innerHTML = "Yêu cầu vị trí người dùng vượt quá thời gian quy định."
	break;
	case error.UNKNOWN_ERROR:
	x.innerHTML = "Một lỗi xảy ra không rõ nguyên nhân."
	break;
}
}
function Tacvu1() {
  var time = new Date().getHours();
  var person = prompt("Nhập Tên Trước Khi Vào");
  if (person != null) {
    document.getElementById("go").innerHTML =
    "Chào " + person + "! Chúc bạn 1 ngày tốt";
  }
   if (time < 10) {
    greeting = "Chào buổi sáng";
  } else if (time < 18) {
    greeting = "Chúc 1 ngày vui vẻ";
  } else {
    greeting ="Chào buổi tối";    
  }
  document.getElementById("timego").innerHTML = greeting;
}
function phienbantd() {
  var v = "Phiên Bản Trình Duyệt: " + navigator.appVersion;
  document.getElementById("vertd").innerHTML = v;
}
function tentrinhduyet() {
  var x = "Trình duyệt tên: " + navigator.appName;
  document.getElementById("nametrinhduyet").innerHTML = x;
}
//Contact with Palat in Nguyenthanhhai12072008@gmail.com
