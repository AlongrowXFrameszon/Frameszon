import { Button, Card, Form } from "react-bootstrap";
import "./cnewsletter.css";

const CartNewsletter = () => {
  return (
    <div className="cart-newsletter">
      <Card className="cart-newsletter-card">
        <div className="cart-newsletter-heading">Stay in touch!</div>
        <div className="cart-newsletter-subheading">
          Subscribe to our newsletter so that we can spam you with loads of
          offers and discounts!
        </div>
        <div>
          <Form.Control
            className="cart-newsletter-input"
            placeholder="Type in your e-mail address"
          ></Form.Control>
        </div>
        <div>
          <Button className="cart-newsletter-button">
            Yes! I would like to subscribe
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default CartNewsletter;
