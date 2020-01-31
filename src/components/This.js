// THIS

let otherObject = {}

let myObject = {
  myFunc: function(a,b){
    console.log(`${a} ${b}`)
    console.log(this === myObject)
    console.log(this === otherObject)
  }
}

myObject.myFunc('hello', 'You')
console.log('===')
myObject.myFunc.call(otherObject,'hello', 'there')





// FAT ARROW FUNCTIONS

const exampleObject = {
  age: 788,
  showAgeFatArrow: () => {
    console.log('fat arrow', this)
  },
  showAgeNormalFunction: function () {
    console.log('normal function', this)
  },
  showThis: () => {
    return this
  }
}