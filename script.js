const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

const flowerlist = ["rose", "sunflower", "cherry blossom"]

console.log(flowerlist)

for (let i=0; i<flowerlist.length; i++) {
  console.log(flowerlist[i])
}

console.log(addloop())

function addloop() {
  let ans = 0
  for (let i=1; i<=100; i++) {
    ans += i
  }
  return ans
}