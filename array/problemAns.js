let n = 24;
let l = 0;
let r = 100, ans = n;

while (l<= r){
    let mid = Math.floor((l + r) / 2);
    console.log(mid);
    if (mid*mid <= n) {
        ans = mid;
         l = mid + 1;
    }
    else{
        r = mid - 1;
    }

}
console.log(ans);