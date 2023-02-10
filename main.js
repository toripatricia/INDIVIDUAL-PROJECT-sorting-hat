const studentData = [
  {
    id: 1,
    name: "Harry Potter",
    specialSkill: "parseltongue",
    type: "wizard",
    house: null,
    imageURL: "https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg",
    isExpelled: false,
  },
  {
    id: 2,
    name: "Ron Weasley",
    specialSkill: "loyalty",
    type: "wizard",
    house: null,
    imageURL: "https://s2.r29static.com/bin/entry/40a/0,46,460,460/1200x1200,80/1462467/image.jpg",
    isExpelled: false,
  },
  {
    id: 3,
    name: "Hermione Granger",
    specialSkill: "intelligence",
    type: "witch",
    house: null,
    imageURL: "https://www.koimoi.com/wp-content/new-galleries/2022/04/when-emma-watson-almost-quit-the-harry-potter-film-franchise-hermione-granger-would-be-proud-of-it-01.jpg",
    isExpelled: false,
  },
  {
    id: 4,
    name: "Neville Longbottom",
    specialSkill: "herbology",
    type: "wizard",
    house: null,
    imageURL: "https://www.thelist.com/img/gallery/the-actor-who-played-neville-longbottom-grew-up-to-be-gorgeous/intro-1543958372.jpg",
    isExpelled: false,
  },
  {
    id: 5,
    name: "Ginny Weasley",
    specialSkill: "spells",
    type: "witch",
    house: null,
    imageURL: "https://img.wattpad.com/cover/151802164-352-k275479.jpg",
    isExpelled: false,
  },
  {
    id: 6,
    name: "Luna Lovegood",
    specialSkill: "curiosity",
    type: "witch",
    house: null,
    imageURL: "https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
    isExpelled: false,
  },
  {
    id: 7,
    name: "Draco Malfoy",
    specialSkill: "whining",
    type: "wizard",
    house: null,
    imageURL: "https://media.harrypotterfanzone.com/draco-malfoy-philosophers-stone-portrait.jpg",
    isExpelled: false,
  },
  {
    id: 8,
    name: "Cedric Diggory",
    specialSkill: "good looks",
    type: "wizard",
    house: null,
    imageURL: "https://imgix.bustle.com/rehost/2016/9/13/10356392-8231-4a53-abf9-d4a2d465077b.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress",
    isExpelled: false,
  },
  {
    id: 9,
    name: "Cho Chang",
    specialSkill: "potions",
    type: "witch",
    house: null,
    imageURL: "https://s.yimg.com/ny/api/res/1.2/.QnEaUYUTAvP8BcHouB8_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://media.zenfs.com/en-US/homerun/seventeen_632/ceba1803735d477da997ba0160424550",
    isExpelled: false,
}
]


const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const houseFilter = (students, houseName) => {
  const filteredStudents = [];
for (const student of students) {
  if (student.house === houseName) {
    filteredStudents.push(student)
  }
}
return filteredStudents
}

const cardsOnDom = (array) => {
  let domStringNotExpelled = "";
  let domStringExpelled = "";
  for (const student of array) {
    if (student.isExpelled === true) {
      domStringExpelled += `<div class="card" style="width: 18rem;">
    <img src="${student.imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${student.name}</p>
      <p class="card-text">${student.house}</p>
      <button id="expellButton--${student.id}" class="btn btn-danger" id="expel--${student.id}">Expel</button>
    </div>
  </div>`;
    } else {
    domStringNotExpelled += `<div class="card" style="width: 18rem;">
    <img src="${student.imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${student.name}</p>
      <p class="card-text">${student.house}</p>
      <button id="expellButton--${student.id}" class="btn btn-danger" id="expel--${student.id}">Expel</button>
    </div>
  </div>`;
    }
  }
  renderToDom("#cardContainer", domStringNotExpelled);
  renderToDom("#expelledStudents", domStringExpelled);
};

const showFormButton = document.querySelector('#showFormButton') 

const studentForm = 
`<form id="form"><div id="searchBar">
    <input type="text" name ="formName" class="form-control" id="searchInput" placeholder="Type here..." required class="formInput">
    <button id="assignRandomHouse">Assign to house!</button>
  </div></form>`
  

// override form functionality and ensure form resets after you sort a student

const form = document.querySelector("form");
document.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("form")?.reset();
  document.getElementById("newForm").reset();

})

// sort new student vs sort existing student

// somwething in this not working...

const addNewStudentBtn = document.querySelector('#addNewStudent');
const newStudentForm = `<form id="newForm">
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="name" placeholder="Name" required>
  <label for="floatingInput">Name</label>
</div>

<div class="form-floating mb-3">
  <input type="text" class="form-control" id="type" placeholder="color" required>
  <label for="floatingInput">Type</label>
</div>

<div class="form-floating mb-3">
  <input type="text" class="form-control" id="specialSkill" placeholder="specialSkill" required>
  <label for="floatingInput">Special Skill</label>
</div>

<button type="button" class="btn btn-success" id="form-submit">Add and Sort Student</button>
</form>`

const createnewStudent = (event) => {
  
  console.log("is this working?")
  const name = document.querySelector("#name");
  const type = document.querySelector("#type");
  const specialSkill = document.querySelector("#specialSkill");

  const randomHouseArrayIndex = Math.floor(Math.random() * 4);
  const randomHouse = houses[randomHouseArrayIndex]

  const newStudent = {
    id: Math.random()*2,
    name: name.value,
    type: type.value,
    specialSkill: specialSkill.value,
    house: randomHouse
    }

  studentData.push(newStudent);
  console.log(studentData);
  cardsOnDom(studentData);
}

addNewStudentBtn.addEventListener('click', () => {
  renderToDom("#newStudentForm", newStudentForm);
  document.querySelector('#form-submit').addEventListener('click', createnewStudent)

})



// search function / select search input

let searchResult = []; //global scope

// ^ we made this because we have to access the result in the search function outside of the function scope
// we basically made searchResult = result in the below function so we can access it outside of 'search'

const search = (event) => {
  const searchInputValue = event.target.value.toLowerCase();
  const result = studentData.filter(item => 
    item.name.toLowerCase().includes(searchInputValue))
    searchResult = result;
  cardsOnDom(result);
}


const assignRandomHouse = (event) => {

// 1. create house variables CHECK
// 2. when clicking "assign house" we need to pull student data CHECK
// 3. add in the house that we assign to the student data
// 3b. after we update student, we need to update the entire student data set
// 4. we will most likley need to call cardsOnDom again with the updated data set

const student = searchResult[0];


const randomHouseArrayIndex = Math.floor(Math.random() * 4);
const randomHouse = houses[randomHouseArrayIndex]
console.log(randomHouse);
student.house = randomHouse;
console.log(student);

// .map() to return updated student data
// inside the map, we want to find the student that matches the student name that i'm currently working on behalf of, using their ID number
// student will be updated with new house 
// after we get the updated student data, re-render cards on dom

// to add student = id: studentData.length + 2


}

showFormButton.addEventListener('click', () => {
  renderToDom("#studentForm", studentForm);
  document.querySelector('#searchInput').addEventListener('keyup', search)
  document.querySelector('#assignRandomHouse').addEventListener('click', assignRandomHouse)
})

// type in a name and sort them into a random house - when yout hit 'sort' button, we should get the student data. then, after we have the student data, we want to assign a random house.



// button filters

const allBtn = document.querySelector('#all');
const gryBtn = document.querySelector('#gryffindor');
const huffBtn = document.querySelector('#hufflepuff');
const ravBtn = document.querySelector('#ravenclaw');
const slyBtn = document.querySelector('#slytherin');



allBtn.addEventListener('click', () => {
  cardsOnDom(studentData);
});

gryBtn.addEventListener('click', () => {
  const gPage = houseFilter(studentData, "gryffindor");
  cardsOnDom(gPage);
});

huffBtn.addEventListener('click', () => {
  const hBtn = houseFilter(studentData, "hufflepuff");
  cardsOnDom(hBtn);
});

ravBtn.addEventListener('click', () => {
  const rPage = houseFilter(studentData, "ravenclaw");
  cardsOnDom(rPage);
});

slyBtn.addEventListener('click', () => {
  const sPage = houseFilter(studentData, "slytherin");
  cardsOnDom(sPage);
});

const cardContainer = document.querySelector("#cardContainer");

// expel



cardContainer.addEventListener("click", (event) => {
  if (event.target.id.includes("expel")) {
    const [, studentId] = event.target.id.split("--");
    console.log(studentId);
    const indexOfStudent = studentData.findIndex((student) => student.id === Number(studentId));
    const studentToExpel = studentData[indexOfStudent];

    studentToExpel.isExpelled = true;
    console.log('STUDENT TO EXPEL',studentToExpel)


    // studentData.splice(indexOfStudent, 1);

  }
  cardsOnDom(studentData);
});

// .splice will need to be removed when expel function pushes students to new container






cardsOnDom(studentData);

// things to fix:

// push expelled students to the #expelledStudents div
// need to incorporate some kind of loop
// be able to add new student and sort them
