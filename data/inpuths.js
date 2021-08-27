function mhs() {
  var text;
  var fruits = document.getElementById("puths").value;

  switch(fruits) {
    case "Nguyễn Tấn Bình An":
    text = "7500076814000015";
    break;
    case "Chí Thái Tâm Anh":
    text = "1902195924";
    break;
    case "Phạm Bùi Đức Anh":
    text = "1902195925";
    break;
    case "Bùi Trần Gia Bảo":
    text = "1902195927";
    break;
    case "Trương Văn Công":
    text = "1902195929";
    break;
    case "Nguyễn Thành Đạt (10/5)":
    text = "1902195932";
    break;
    case "Nguyễn Thành Đạt (16/2)":
    text = "1902195899";
    break;
    case "Nguyễn Thanh Hải":
    text = "1902195933";
    break;
    case "Dương Nhật Hằng":
    text = "1902195902";
    break;
    case "Huỳnh Vũ Ngọc Hân":
    text = "1902195903";
    break;
    case "Trần Hữu Hiếu":
    text = "1902195935";
    break;
    case "Trần Xuân Hiếu":
    text = "1902195936";
    break;
    case "Bùi Minh Hoàng":
    text = "1902195937";
    break;
    case "Dương Gia Huy":
    text = "1902195938";
    break;
    case "Bùi Quang Hưng":
    text = "1902195904";
    break;
    case "Phạm Nguyễn Minh Kha":
    text = "1902195939";
    break;
    case "Lê Khanh":
    text = "1902195940";
    break;
    case "Đào Bích Tường Lam":
    text = "1902195941";
    break;
    case "Nguyễn Hoàng Khánh Lam":
    text = "1902195907";
    break;
    case "Đặng Nhật Trúc Linh":
    text = "7500076814000007";
    break;
    case "Trần Thiên Long":
    text = "1902195908";
    break;
    default:
    text = "Vui Lòng Nhập Mã HS chính xác";
  }
  document.getElementById("inpuths").innerHTML = text;
}
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
