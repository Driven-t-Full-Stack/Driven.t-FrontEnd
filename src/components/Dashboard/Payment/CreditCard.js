export default function CreditCard({ setIsPaid, isPaid }) {
  function toPay() {
    setIsPaid(true);
  }

  return (
    <div>
      <p>paga ai</p>
      <button onClick={toPay}>pagar</button>
    </div>
  );
}
