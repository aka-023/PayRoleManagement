function check() {
    let amt = parseInt(document.getElementById("bill_amt").value);
    let cash = parseInt(document.getElementById("cash_given").value);

    if(isNaN(amt) || isNaN(cash)){
        alert("please enter valid numbers in specified places...");
        return;
    }
    let notes = [2000,500,100,20,10,5,1];
    let total = cash-amt;
    let temp = total;
    let denomination = [];
    let n = notes.length;

    for(let i=0; i<n; i++){
        denomination.push(parseInt(temp/notes.at(i)));
        temp = parseInt(temp%notes.at(i));
    }
    // console.log(denomination);
    for(let i=0; i<n; i++){
        let cell = document.getElementById("cell"+i);
        cell.textContent = denomination[i];
    }
}