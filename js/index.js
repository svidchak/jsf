const n = parseInt(prompt('Enter a number:',));
alert("Loop: " + fibLoop(n));
alert("Rec: " + fibRec(n));

function fibLoop(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fibRec(n) {
    let rec;
    if (n >= 2) {
        rec = fibRec(n - 1) + fibRec(n - 2);
    }
    else {
        rec = n;
    }
    return rec;
}
