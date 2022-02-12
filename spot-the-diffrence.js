let s = "code"
let t = "recod"

function diff(s1, t1){
  
  let diffs = t1.split("").filter(el=>{
    return !s1.includes(el.toString())
  })
  
  return diffs
}

console.log("diffrence:",diff(s, t));
