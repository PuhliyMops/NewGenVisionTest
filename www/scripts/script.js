let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function findCourses(range) {
const left = range[0]
const right = range[1]

return courses.filter(course=>{
const courseLeft = course.prices[0]
const courseRight = course.prices[1]

if(!courseLeft && !courseRight) {
return true
}

if(left && right) {
      console.log('both')

return left <= courseLeft && courseRight <= right
}


if(left) {
      console.log('left')

return left <= courseLeft && left <= courseRight
}

if(right) {

console.log('right')
return courseLeft <= right && courseRight <= right

}

}).map((course)=>course.name)
}

console.log(findCourses(requiredRange1))
console.log(findCourses(requiredRange2))
console.log(findCourses(requiredRange3))
