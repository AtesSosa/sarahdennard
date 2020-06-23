function toggleDropdownContent(){
    var showIcon = document.getElementById("showContent");
    var hideIcon = document.getElementById("hideContent");
    var dropdownContent = document.getElementsByClassName("dropdown-content");
    if (showIcon.style.display == "block") {
      showIcon.style.display = "none";
      hideIcon.style.display = "block";
      dropdownContent[0].style.display = "block";
    }
    else {
      showIcon.style.display = "block";
      hideIcon.style.display = "none";
      dropdownContent[0].style.display = "none";
    }

  }
