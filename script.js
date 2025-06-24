const form = document.getElementById('transaction-form');
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const history = document.getElementById('history');
const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function updateUI() {
  history.innerHTML = '';
  let incomeTotal = 0, expenseTotal = 0;

  transactions.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${t.desc} <span>${t.amount >= 0 ? '+' : '-'} ₹${Math.abs(t.amount)}</span>
    `;
    history.appendChild(li);

    if (t.amount >= 0) incomeTotal += t.amount;
    else expenseTotal += Math.abs(t.amount);
  });

  const total = incomeTotal - expenseTotal;
  balance.textContent = total;
  income.textContent = incomeTotal;
  expense.textContent = expenseTotal;

  updateChart(incomeTotal, expenseTotal);
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (!desc || isNaN(amount)) return;

  transactions.push({ desc, amount });
  descInput.value = '';
  amountInput.value = '';

  updateUI();
});

let chart;
function updateChart(incomeVal, expenseVal) {
  const ctx = document.getElementById('expenseChart').getContext('2d');
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [incomeVal, expenseVal],
        backgroundColor: ['#2ecc71', '#e74c3c'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    }
  });
}

updateUI();
