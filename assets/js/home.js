$(document).ready(function () {
  var mytablebdy = "";
  if (localStorage.getItem("userscreated") === null) {
  } else {
    var userscreated = localStorage.getItem("userscreated");
    var j = 1;
    var k = 1;
    for (var i = 1; i <= userscreated; i++) {
      if (localStorage.getItem("emp_name" + i) != null) {
        mytablebdy +=
          "<tr>" +
          "<th>" +
          j +
          "</th>" +
          "<th>TV00" +
          k +
          "</th>" +
          // '<th>' + localStorage.getItem("emp_id" + i) + '</th>' +
          "<th>" +
          localStorage.getItem("emp_name" + i) +
          "</th>" +
          "<th>" +
          localStorage.getItem("emplocation" + i) +
          "</th>" +
          "<th>" +
          localStorage.getItem("dob" + i) +
          "</th>" +
          "<th>" +
          localStorage.getItem("f_name" + i) +
          "</th>" +
          "<th>" +
          localStorage.getItem("m_name" + i) +
          "</th>" +
          "</tr>";
        j++;
        k++;
      }
    }
    $("#mytablebdy").html(mytablebdy);
  }

  $("#regform").on("click", function () {
    // var empid = $("#number").val();
    var name = $("#name").val();
    var location = $("#location").val();
    var dob = $("#dob").val();
    var f_name = $("#f_name").val();
    var m_name = $("#m_name").val();
    if (
      name == "" ||
      location == "" ||
      dob == "" ||
      f_name == "" ||
      m_name == ""
    ) {
      if (name == "") {
        alert("Name is mandatory");
        document.myform.name.focus();
        return false;
      } else if (location == "") {
        alert("Location is mandatory");
        document.myform.location.focus();
        return false;
      } else if (dob == "") {
        alert("DOB is mandatory");
        document.myform.dob.focus();
        return false;
      } else if (f_name == "") {
        alert("Father name is mandatory");
        document.myform.f_name.focus();
        return false;
      } else if (m_name == "") {
        alert("Mother name is mandatory");
        document.myform.m_name.focus();
        return false;
      }
    } else {
      if (localStorage.getItem("userscreated") === null) {
        localStorage.setItem("userscreated", "0");
      }
      var userscreated = localStorage.getItem("userscreated");
      var i = parseInt(userscreated) + 1;
      // localStorage.setItem("emp_id" + i, empid);
      localStorage.setItem("emp_name" + i, name);
      localStorage.setItem("emplocation" + i, location);
      localStorage.setItem("dob" + i, dob);
      localStorage.setItem("f_name" + i, f_name);
      localStorage.setItem("m_name" + i, m_name);
      localStorage.setItem("userscreated", i);
      var userscreated = localStorage.getItem("userscreated");
      var j = 1;
      var mytablebdy = "";
      for (var i = 1; i <= userscreated; i++) {
        if (localStorage.getItem("emp_name" + i) != null) {
          mytablebdy +=
            "<tr>" +
            "<th>" +
            j +
            "</th>" +
            // '<th>' + localStorage.getItem("emp_id" + i) + '</th>' +
            "<th>" +
            localStorage.getItem("emp_name" + i) +
            "</th>" +
            "<th>" +
            localStorage.getItem("emplocation" + i) +
            "</th>" +
            "<th>" +
            localStorage.getItem("dob" + i) +
            "</th>" +
            "<th>" +
            localStorage.getItem("f_name" + i) +
            "</th>" +
            "<th>" +
            localStorage.getItem("m_name" + i) +
            "</th>" +
            "<th>" +
            localStorage.getItem("m_name" + i) +
            "</th>" +
            "</tr>";
          j++;
        }
      }
      $("#mytablebdy").html(mytablebdy);
    }
    alert("Employee Created Successfully");
    window.location.reload();
    return true;
  });
  $("body").on("click", "#log_out", function () {
    localStorage.clear();
    alert("Successfully logout");
    window.location.href = "register.html";
  });
});
