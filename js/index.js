  function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_4m2kqf7", "template_lejjphh", params).then(function (res){
    alert("Thank you for reaching me!");
    })
  }

  var ram = document.getElementById("nav");
  function showmenu() {
    ram.style.right = "0";
  }
  function hidemenu() {
    ram.style.right = "-200px";
  }

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname) {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }