function mhs() {
  var text;
  var fruits = document.getElementById("puths").value;

  switch(fruits) {
    case "7500076814000015":
    text = "Nguyễn Tấn Bình An";
    break;
    case "1902195924":
    text = "Chí Thái Tâm Anh";
    break;
    case "1902195925":
    text = "Phạm Bùi Đức Anh";
    break;
    case "1902195927":
    text = "Bùi Trần Gia Bảo";
    break;
    case "1902195929":
    text = "Trương Văn Công";
    break;
    case "1902195932":
    text = "Nguyễn Thành Đạt (10/5)";
    break;
    case "1902195899":
    text = "Nguyễn Thành Đạt (16/2)";
    break;
    case "1902195933":
    text = "Nguyễn Thanh Hải";
    break;
    case "1902195902":
    text = "Dương Nhật Hằng";
    break;
    case "1902195903":
    text = "Huỳnh Vũ Ngọc Hân";
    break;
    default:
    text = "Vui Lòng Nhập Mã HS chính xác";
  }
  document.getElementById("inpuths").innerHTML = text;
}
