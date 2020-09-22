function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  Person.prototype.naong = "naong";
  Person.prototype.miyaong = "miyaong";
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");

  const print = Object.values(myFather); // Object.values() converts an object to an array.
  const print2 = Object.values(myMother); // 값을 문자열로 convert해줌.

  console.log(print +","+ myFather.naong+","+ myFather.miyaong);
  // console.log(print2 +","+ myMother.naong);