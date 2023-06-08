//GLOBAL VARIABLE
var actualLanguage = "en";


/*Offcanvas actions*/
document.addEventListener("DOMContentLoaded", function () {
  /*Offcanvas button*/
  var myOffcanvas = document.getElementById('offcanvasRight');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("offcanvasButton").addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });

  /*Offcanvas close when links are clicked*/
  const elements = document.getElementsByClassName("canvas-links")

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (e) {
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  }
});

var acc = document.getElementsByClassName("activitiesAccordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*scroll down button*/
function scrollDown() {
  var element = document.getElementById("container");
  element.scrollIntoView({ behavior: "smooth" });
}

//scroll Up button
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Translation function
$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');
    document.getElementById('actualLanguage').src = "./imagesB-READI/" + lang + ".svg"
    actualLanguage = lang;
    renderDynamicObjects();

    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')])
    });

  });
});

function renderDynamicObjects() {
  //Members rendering
  const memberContainer = document.getElementById("memberGroup")
  memberContainer.innerHTML = ""
  for (let member of members) {
    memberContainer.innerHTML += `
      <div class="member">
        <div class="pic" data-bs-toggle="modal" data-bs-target="#member${member.id}Modal">
          <img  class="memberImage" src="./imagesB-READI/member${member.id}.png" alt="member image">
          <ul class="info">
            <li><i class="fas fa-info-circle fa-3x"></i></li>
          </ul>
        </div>
        <h4 class="member-name">${actualLanguage === "en" ? `${member.nameEN}` : `${member.nameES}`}</h4>
        <span class="member-role">${actualLanguage === "en" ? `${member.briefEN}` : actualLanguage === "es" ? `${member.briefES}` : actualLanguage === "cat" && `${member.briefCAT}`}</span>
      </div>

      <div class="modal fade" id="member${member.id}Modal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <img class="avatar" src="./imagesB-READI/member${member.id}.png" alt="member image">
              <h5 class="modal-title" id="staticBackdropLabel" style="color: #3267b2; font-weight: bold;margin-left: 20px;">${actualLanguage === "en" ? `${member.nameEN}` : `${member.nameES}`}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p style="text-align: justify;">
                ${actualLanguage === "en" ? `${member.descriptionEN}` : actualLanguage === "es" ? `${member.descriptionES}` : actualLanguage === "cat" && `${member.descriptionCAT}`}
                ${member.descriptionEN === "" ? `` : `<br>`}
                <br>
                Email: <a href="mailto:${member.email}">${member.email}</a>
              </p>
            </div>
            
            <div class="modal-footer" >
              ${member.link !== "" ? `<a class="lang" key="moreInfo" href="${member.link}" target="_blank">More information</a>` : ``}
            </div>
          </div>
        </div>
      </div>
    `


  }

  //Partners rendering
  const partnersContainer = document.getElementById("partnersGroup")
  partnersContainer.innerHTML = ""
  for (let partner of partners) {
    partnersContainer.innerHTML +=
      `
    <div class="partner">
      <div class="squaredpic">
        <img class="partnerImage" src="./imagesB-READI/partner${partner.id}.png" alt="partner image">
      </div>
      <div>
        <h4 class="partner-name"><a href="${partner.link}">${partner.name}</a></h4>
        <div class="partner-country">
          <img src="./imagesB-READI/${partner.country}.png" class="country-flag">
          <span class="lang"><b>${partner.country}</b></span>
        </div>
      </div>
    </div>
    `
  }

  //News with images rendering

  const newsWithImagesContainer = document.getElementById("newsWithImagesGroup")
  newsWithImagesContainer.innerHTML = ""
  for (let piece of newsWithImages) {
    newsWithImagesContainer.innerHTML +=
      `
      <div class="newsDiv">
        <h4>${piece.title}</h4>
        <h5>${piece.description}</h5>
        <div class="newsImageDiv">
          <img class="newsImage" src="./imagesB-READI/news${piece.id}.png">
        </div>
      </div>
    `
  }

  //Reports rendering
  const reportsContainer = document.getElementById("reportsContainer")
  if (reports.length > 0) {
    reportsContainer.innerHTML = ""
    reportsContainer.style.display = "flex"
    reportsContainer.innerHTML += `
    <h3 class="lang" key="h3reports">REPORTS</h3>
    <div class="accordion accordion-flush" id="accordionFlushExample">

    </div>
    `

    const reportsContent = document.getElementById("accordionFlushExample")
    let x = 0;
    for (let report of reports) {
      reportsContent.innerHTML += `
      <div class="accordion-item">
        <h3 class="accordion-header" id="flush-heading${x}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${x}" aria-expanded="false" aria-controls="flush-collapseOne">
            ${report.name}
          </button>
        </h3>
        <div id="flush-collapse${x}" class="accordion-collapse collapse" aria-labelledby="flush-heading${x}" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <p>${actualLanguage === "en" ? `${report.briefEN}` : actualLanguage === "es" ? `${report.briefES}` : actualLanguage === "cat" && `${report.briefCAT}`}</p>
          <a class="lang" key="publiLink" class="accordion-body" target="_blank" href="${report.link}">REPORT LINK</a>
          </div>
        </div>
      </div>
      `
      x++;
    }
  }
  else {
    reportsContainer.style.display = "none"
  }

  //Related Projects rendering
  const projectsContainer = document.getElementById("projectsContainer")

  if (relatedProjects.length > 0) {
    projectsContainer.innerHTML = ""
    projectsContainer.innerHTML += `<h3 style="margin-bottom:30px" class="lang" key="h3RelatedProjects">RELATED PROJECTS</h3>`
    for (let project of relatedProjects) {
      projectsContainer.innerHTML += `
      <div class="card w-75" style="margin-bottom:30px">
        <div class="card-body">
          <h5 class="card-title"><b>${project.name}</b></h5>
          <p class="card-text">${actualLanguage === "en" ? `${project.briefEN}` : actualLanguage === "es" ? `${project.briefES}` : actualLanguage === "cat" && `${project.briefCAT}`}</p>
          ${project.links.map(link => `<a href="${link}" class="card-link">${link}</a>`)}
        </div>
        ${project.boolImage ? `<img style="width:200px;margin:0px 0px 10px 15px" src="./imagesB-READI/project${project.id}.png" alt="project logo">` : ``}
      </div>
      `
    }
  }
  else {
    projectsContainer.style.display = "none"
  }

}



//render all the dynamic components of the page (more can be added)
function render() {
  renderDynamicObjects()
}

