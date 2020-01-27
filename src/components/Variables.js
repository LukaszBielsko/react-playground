
// RUN WITH QUOKA

// VARS SCOPE
  (() => {
    var a = 888
    console.log('a', a)
  })()

  // console.log(a)
  // a is not defined
  // so var is not global scoped 
  // it is function scoped
  // or is it??

  function scoped() {
    var a = 999
    return a 
  }
  // console.log(a)
  // a is not defined
  // so var is not global scoped 
  // as we can see

  // MDN
  // The scope of a variable declared with var is its current execution
  // context, which is either the enclosing function or, for variables 
  // declared outside any function, global


// NULL
  const empty = {}
  console.log(empty)
  console.log(empty.bar)
  console.log(typeof empty)
  const _null = null
  console.log(typeof _null) // object ;)
  console.log(_null === null)


// COMPARE
  console.log(555 == '555') // true => coerced |  string coerced to number or vice versa
  console.log(555 === '555') // false => not coerced | no coercion | number compared to string

// FAT ARROW FUNCTIONS

  const exampleObject = {
    age: 788,
    showAgeFatArrow: () => {
      console.log('fat arrow',this)
    },
    showAgeNormalFunction: function () {
      console.log('normal function', this)
    },
    showThis: () => {
      return this
    }
  }

  exampleObject.showAgeFatArrow()
  exampleObject.showAgeNormalFunction()


