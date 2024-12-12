const into = document.getElementById("into");

const experienceElement = document.getElementById("experience-element");
const workElement = document.getElementById("work-element");
const skillElement = document.getElementById("skill-element");
const educationElement = document.getElementById("education-element");
const languageElement = document.getElementById("language-element");
const interestElement = document.getElementById("interest-element");

experienceElement.classList.add('d-none');
workElement.classList.add('d-none');
skillElement.classList.add('d-none');
educationElement.classList.add('d-none');
languageElement.classList.add('d-none');
interestElement.classList.add('d-none');

into.innerHTML = `<div class="text-capitalize align-items-center mb-4 fw-bold lh-lg fs-3 ">Thông tin cá nhân</div> 
  <div>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
    <small id="emailHelp">Hãy nhập email để xác thực</small>
  </div>
  <button type="button" onclick="Submit();"  class="btn btn-primary mt-2">Submit</button>`


const exampleInputEmail1 = document.getElementById("exampleInputEmail1");
exampleInputEmail1.addEventListener("change", function() {
  if(!exampleInputEmail1.value && exampleInputEmail1.value === ''){
    emailHelp.textContent = 'Hãy nhập email để xác thực'
    emailHelp.classList.add('text-dark');
  }
})
function Submit(){
  const emailHelp = document.getElementById("emailHelp");

  if(validateEmail(exampleInputEmail1.value)){
    into.innerHTML = `<div class="text-capitalize align-items-center mb-4 fw-bold lh-lg fs-3 ">Thông tin cá nhân</div>
				<div class="fw-normal">Giới tính: <span class="fw-light">Nam</span></div>
				<div class="fw-normal">Ngày sinh: <span class="fw-light"> 19/05/2000</span></div>
				<div class="fw-normal">Điện thoại: <span class="fw-light">(84+) 912398xxx</span></div>
				<div class="fw-normal">Email: <span class="fw-light">sinhvien@funix.edu.vn</span></div>
				<div class="fw-normal">website: <span class="fw-light">htttp://abc.tech</span></div>
				<div class="d-flex gap-3 mt-2">
					<i class="fa fa-twitter color-icon" aria-hidden="true"></i>
					<i class="fa fa-facebook color-icon" aria-hidden="true"></i>
					<i class="fa fa-google-plus color-icon" aria-hidden="true"></i>
					<i class="fa fa-linkedin color-icon" aria-hidden="true"></i>
				</div>`
  }else{
    emailHelp.textContent = 'Email không chính xác, Vui long thử lại'
    emailHelp.classList.add('text-danger');
  }

}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function Experience(new_content) {
  workElement.classList.add('d-none');
  skillElement.classList.add('d-none');
  educationElement.classList.add('d-none');
  languageElement.classList.add('d-none');
  interestElement.classList.add('d-none');
  document.getElementById(new_content).classList.remove("d-none")    
}
function Work(new_content) {
  experienceElement.classList.add('d-none');
  skillElement.classList.add('d-none');
  educationElement.classList.add('d-none');
  languageElement.classList.add('d-none');
  interestElement.classList.add('d-none');
  document.getElementById(new_content).classList.remove("d-none")    
}
function Skill(new_content) {
  experienceElement.classList.add('d-none');
  workElement.classList.add('d-none');
  educationElement.classList.add('d-none');
  languageElement.classList.add('d-none');
  interestElement.classList.add('d-none');
  document.getElementById(new_content).classList.remove("d-none")    
}
function Education(new_content) {
  experienceElement.classList.add('d-none');
  workElement.classList.add('d-none');
  skillElement.classList.add('d-none');
  languageElement.classList.add('d-none');
  interestElement.classList.add('d-none');
  document.getElementById(new_content).classList.remove("d-none")    
}
function Language(new_content) {
  experienceElement.classList.add('d-none');
  workElement.classList.add('d-none');
  skillElement.classList.add('d-none');
  interestElement.classList.add('d-none');
  educationElement.classList.add('d-none');
  document.getElementById(new_content).classList.remove("d-none")    
}
function Interest(new_content) {
  experienceElement.classList.add('d-none');
  workElement.classList.add('d-none');
  skillElement.classList.add('d-none');
  languageElement.classList.add('d-none');
  educationElement.classList.add('d-none');
  document.getElementById(new_content).classList.remove("d-none")    
}

function handleRoute(element){
  console.log('chay khoong', element)
  window.location.href = `http://127.0.0.1:5500/digital-cv.html?key=${element}`
}