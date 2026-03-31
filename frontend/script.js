async function calculate() {
  let p = document.getElementById("principal").value;
  let r = document.getElementById("rate").value;
  let t = document.getElementById("time").value;
  let type = document.getElementById("type").value;
  let unit = document.getElementById("timeUnit").value;

  const res = await fetch("https://interest-calculator-1-haok.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      p: Number(p),
      r: Number(r),
      t: Number(t),
      type,
      unit
    })
  });

  const data = await res.json();

  document.getElementById("interest").innerText = "Interest: ₹" + data.interest;
  document.getElementById("total").innerText = "Total Amount: ₹" + data.total;
}