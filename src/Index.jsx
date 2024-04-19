import "./App.css";
export default function Index() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <nav className="main-nav">
        <img
          src="https://btholt.github.io/complete-intro-to-web-dev-v3/images/coffee_masters_logo.png"
          alt="coffee masters logo"
          className="logo"
        />
        <h1 className="brand">Coffee Masters</h1>
      </nav>
      <div className="page">
        <section className="box-name bg-light section-box">
          <div className="name-box box">
            <h2 className="box-title">NAME</h2>
            <div className="input-group">
              <label className="user-input-label" htmlFor="name">
                Name for order
              </label>
              <input type="text" className="user-input" id="name" />
            </div>
          </div>
        </section>
        <section className="box-payment bg-light section-box">
          <h2 className="box-title">Payment</h2>
          <div className="input-group">
            <label className="user-input-label" htmlFor="name">
              Credit card
            </label>
            <input type="text" className="user-input" id="name" />
          </div>
          <div className="input-group">
            <label className="user-input-label" htmlFor="name">
              ccv
            </label>
            <input type="text" className="user-input" id="name" />
          </div>
        </section>
        <section className="box-total">
          <table className="totals-table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td align="right">$19.57</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td align="right"> 0.96</td>
              </tr>
              <tr className="final-totals">
                <td>Total</td>
                <td align="right">20.23</td>
              </tr>
            </tbody>
          </table>
        </section>
        <button className="checkout bg-med" type="button">
          Place Order
        </button>
      </div>
    </>
  );
}
