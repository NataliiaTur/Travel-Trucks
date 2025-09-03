import { useState } from "react";
import css from "./BookingForm.module.css";
import Button from "../../components/common/Button/Button.jsx";

function BookingForm({ camperId, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <section className={css.featureForm}>
      <h3 className={css.featureFormTitle}>Book your campervan now</h3>
      <p className={css.featureFormText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.featureFormField} onSubmit={handleSubmit}>
        <input
          type="text"
          text
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="bookingDate"
          placeholder="Booking date*"
          value={formData.bookingDate}
          onChange={handleChange}
          required
        />

        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
        />

        {/* <button className={css.featureButton} type="submit">
          Send
        </button> */}
        <Button className={css.featureButton}>Send</Button>
      </form>
    </section>
  );
}

export default BookingForm;
