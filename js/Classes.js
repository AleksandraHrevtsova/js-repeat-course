// ES6
console.log('CLASSES');

class User {
  constructor(name, age = 0){
    this.name = name;
    this.age = age;
  }
  validateAge(ageValue){
    return !ageValue.match('[^ 0-9]', 'g');
  }
  method1(){
    console.log('METHOD-1');
  }
  method2(){
    console.log('METHOD-2');
  }
  method3(){
    console.log('METHOD-3');
  }
}
const classUser1 = new User('Taniz')
// console.log('classUser1', classUser1);
const classUser2 = new User('Dima');
// console.log('classUser2', classUser2);

class UpdateUser extends User {
  static className = 'Не доступно новым объектам';
  static classOwnMethod(){
    console.log('Меня нет в объектах!!!');
  }
  constructor(name, age, skills) {
    super(name, age);
    this.skills = skills
  }
  newClassMethod(){
    console.log('my new class method');
  }
}
const classUpdateUser1 = new UpdateUser('Vasia', '18', ['moto'])
console.log('classUpdateUser1', classUpdateUser1);
console.log('classUpdateUser1', classUpdateUser1.className);
// classUpdateUser1.classOwnMethod(); // ERROR

classUpdateUser1.method1()
console.log('class UpdateUser:', UpdateUser.className);
UpdateUser.classOwnMethod()