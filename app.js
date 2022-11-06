const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.description')
const size = document.querySelectorAll('.size .text')

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
  card.style.transform = `rotateY(${xAxis}deg)rotateX(${yAxis}deg)`
})
container.addEventListener('mouseenter', (e) => {
  card.style.transition = `none`
  sneaker.style.transform = 'translateZ(150px) rotate(15deg)'
  title.style.transform = 'translateZ(125px)'
  description.style.transform = 'translateZ(100px)'
  size.forEach(item => {
    console.log(item)
    item.style.transform = 'translateZ(75px)'
  })
  purchase.style.transform = 'translateZ(10px)'

})
container.addEventListener('mouseleave', (e) => {
  card.style.transition = `all 1s ease`
  card.style.transform = `rotateY(0deg)rotateX(0deg)`
  sneaker.style.transform = 'translateZ(0)'
  title.style.transform = 'translateZ(0)'
  description.style.transform = 'translateZ(0)'
  size.forEach(item => {
    console.log(item)
    item.style.transform = 'translateZ(0)'
  })
  purchase.style.transform = 'translateZ(0)'
})