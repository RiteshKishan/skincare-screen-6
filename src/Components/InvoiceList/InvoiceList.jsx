import React from "react";
import billing from "../Assests/billing_icon.svg";
import confirmation from "../Assests/confirmation_icon.svg";
import shipping from "../Assests/shipping_icon.svg";
import "./InvoiceList.css";
import camera_icon from "../Assests/Frame.svg";
import visa_icon from "../Assests/visa_img.svg";
import mastercard_icon from "../Assests/mastercard_img.svg";

const InvoiceList = () => {
  return (
    <div className="invoicelist">
      <div className="payment-header">
        <div>
          <img src={shipping} alt="" />
        </div>
        <div className="line-path"></div>
        <div>
          <img src={billing} alt="" />
        </div>
        <div className="line-path"></div>
        <div>
          <img src={confirmation} alt="" />
        </div>
      </div>

      <div className="payment-method">
        <p>Payment Method</p>
        <div className="payment-checkbox">
          <div className="credit-checkbox">
            <label>
              <input type="checkbox" />
              <span className="checkbox"></span>
            </label>
            Credit/Debit card
          </div>

          <div className="credit-checkbox">
            <label>
              <input type="checkbox" />
              <span className="checkbox"></span>
            </label>
            Net Banking
          </div>

          <div className="credit-checkbox">
            <label>
              <input type="checkbox" />
              <span className="checkbox"></span>
            </label>
            Paypal
          </div>

          <div className="credit-checkbox">
            <label>
              <input type="checkbox" />
              <span className="checkbox"></span>
            </label>
            Bitcoin
          </div>
        </div>
      </div>

      <div className="payment-details">Saved Cards</div>

      <div className="saved-card1">
        <div>
          <input type="radio" className="savedcard-radiobtn" />
          <label htmlFor="visa">
            <img src={visa_icon} alt="" />
          </label>
        </div>
        <div className="savedcard-details">
          <p>**** **** **** 1157</p>
          <span>VISA Card</span>
        </div>
      </div>
      <div className="saved-card1">
        <div>
          <input type="radio" className="savedcard-radiobtn-master" />
          <label htmlFor="master">
            <img src={mastercard_icon} alt="" />
          </label>
        </div>
        <div className="savedcard-details">
          <p>**** **** **** 1157</p>
          <span>Master Card</span>
        </div>
      </div>

      <div className="addnewcard-btn">
        <button>ADD New Card</button>
      </div>

      <div className="payemnt-footer">
        <p>
          <div>By Clicking on ‘Confirm Payment’ I agree</div>
          <div>with theTerms and conditions of the Company.</div>
        </p>
      </div>
      <div className="footer-button">
        <button className="save-button">Save</button>
        <button className="confirm-payment-button">Confirm Payment</button>
      </div>
    </div>
  );
};

export default InvoiceList;
