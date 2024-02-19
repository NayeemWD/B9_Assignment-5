let count = 1;
let totalSet = 7;
let array = [];
let sets = document.getElementById("set_click");
let setCount = document.getElementById("count_seat");
let totalPrice = parseInt(document.getElementById("total_price").innerText);
let grandTotalPrice = parseInt(
  document.getElementById("grand_total").innerText
);
let applybutton = document.getElementById("apply-btn");


let seat = document.getElementsByClassName("set");
for (let i of seat) {
  i.addEventListener("click", function () {
    console.log(i.innerText);
    setCount.innerText = count;
    count++;

    sets.innerText = totalSet;
    totalSet--;
    i.classList.add("bg-[#1DD100]");

    let motherdiv = document.getElementById("seat_book");
    let tr = document.createElement("tr");
    let p1 = document.createElement("td");
    let p2 = document.createElement("td");
    let p3 = document.createElement("td");

    let seatNumber = i.innerText;
    array.push(seatNumber);
    let arraylength = array.length;
    if (arraylength >= 5) {
      alert("you can selceted four seat");
      i.classList.remove("bg-[#1DD100]");
      return;
    }
    if (arraylength > 3) {
      applybutton.removeAttribute("disabled", true);
    }

    p1.innerText = seatNumber;
    p2.innerText = "Economy";
    p3.innerText = 550;

    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    motherdiv.appendChild(tr);

    let priceTotal = p3.innerText;
    let seatPrice = parseInt(priceTotal);

    totalPrice = totalPrice + seatPrice;

    document.getElementById("total_price").innerText = totalPrice;
    document.getElementById("grand_total").innerText = totalPrice;
  });
}

let cuppon = document.getElementById("coupon-input");
function cupponapply() {
  if (cuppon.value == "NEW15") {
    let coupConatanier = document.getElementById("coupon-container");
    coupConatanier.classList.add("hidden");
  }
}