let Arr = [];

document.getElementsByName("add")[0].addEventListener("click", () => {
  let e = document.getElementsByName("name")[0];
  let name = e.value;
  console.log(name);
  let g = document.getElementsByName("gender")[0];
  let gender = g.value;
  console.log(gender);
  Arr.push({ name, gender });
  // console.log(Arr)
  updateList();
});

let coctainer = document.createElement("div");
document.body.appendChild(coctainer);

const updateList = () => {
  //   console.log(  Arr.map(x=>{
  //        x.gender} ))
  coctainer.innerHTML = "";
  for (x = 0; x < Arr.length; x++) {
    console.log(Arr);
    coctainer.innerHTML += `<div>${Arr[x].name} ${Arr[x].gender}<button name="delete" onClick="deleteObj(${x})">delete</button></div>`;
  }
};

document.getElementsByName("edit")[0].addEventListener("click", () => {
  let e = document.getElementsByName("name")[1];
  let name = e.value;
  console.log(name);

  let filter = Arr.filter((x) => x.name === name);
  //  console.log(filter)

  if (filter) {
    let g = document.getElementsByName("gender")[1];
    let gender = g.value;
    console.log(filter, gender);

    filter.map((obj) => {
      obj.name[0] = name;
      obj.gender[0] = gender;
    });
    updateList();
  }
});

const deleteObj = (index) => {
  Arr.splice(index, 1);
  console.log(index, Arr);
  updateList();
};
