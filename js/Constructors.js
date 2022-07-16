console.log('CONSTRUCTORS');

const user = {
  _name: 'user',
  login: 'login',
  password: 'qwerty',
  _email: 'user@mail.com',
  phone: '+123456789',
  get name(){
    return this._name;
  },
  set name(value){
    return this._name = value;
  },
  get email(){
    return this._email;
  },
  set email(value){
    return this._email = value;
  },
  validateEmail(value){
    return value.includes('@');
  },
  setValidEmail(value){
    if(this.validateEmail(value)){
      this.email = value
    }
    return
  }
};

function createUser(name, login, password, email, phone){
  return {
    name, login, password, email, phone
  }
}
const newUser = createUser('Sandra', 'qwe123', '1111', 'sandra@gmail.com', '+381231122222')
// console.log('newUser:', newUser);

const getUserName = user.name;
// console.log('getUserName:', getUserName);
// console.log('user._name:', user._name);

user.name = 'Tania';
// console.log('user:', user);

user.setValidEmail('tania@gmail.com');
// console.log('user:', user);

function User (name, age = 0){
  this.name = name;
  this.age = age;
}
// =====
User.prototype.validateAge = function(ageValue){
  return !ageValue.match('[^ 0-9]', 'g');
}
// =====
User.prototype.method1 = function(){
  console.log('METHOD-1');
}
// =====
User.prototype.method2 = function(){
  console.log('METHOD-2');
}
// =====
User.prototype.method3 = function(){
  console.log('METHOD-3');
}
// =====
// console.log('User.prototype', User.prototype);

const user1 = new User('Tania');
// console.log('user1:', user1);
// console.log('user1.name:', user1.name);
// console.log(user1.validateAge('12hjgjhg'));

const user2 = new User('Dima');
// console.log('user2:', user2);

function UpdateUser (name, age){
  // привязываем старый конструктор
  User.call(this, name, age);
  // добавляем новые свойства, которых не было в старом конструкторе
  this.skills = []
}
// в прототип нового конструктора записывает прото старого
UpdateUser.prototype = User.prototype;
// перезаписываем constructor назад на свой? потому что 
// выше перезаписался чужой
UpdateUser.prototype.constructor = UpdateUser;
// теперь можно и методы писать
UpdateUser.prototype.newMethod = function(){
  console.log('New Method');
}
const updateUser1 = new UpdateUser('Vasia', '18')
console.log('updateUser1', updateUser1);