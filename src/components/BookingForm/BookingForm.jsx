import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import css from "./BookingForm.module.css";
import Button from "../../components/common/Button/Button.jsx";
import Calendar from "../Calendar/Calendar.jsx";

function BookingForm({ camperId, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [selected, setSelected] = useState(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        } else if (value.trim().length > 50) {
          error = "Name must be less than 50 characters";
        } else if (!/^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/.test(value)) {
          error = "Name can only contain letters and spaces";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      default:
        break;
    }

    return error;
  };
  const validateDate = () => {
    if (!selected) {
      return "Booking date is required";
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) {
      return "Booking date cannot be in the past";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (field !== "comment") {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    });

    const dateError = validateDate();
    if (dateError) newErrors.date = dateError;

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleDateChange = (range) => {
    setSelected(range);

    if (errors.date) {
      setErrors((prev) => ({
        ...prev,
        date: "",
      }));
    }
  };

  const formatDateRange = (range) => {
    if (!range) return "Booking date*";

    const formatDate = (date) => {
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    // Якщо вибрана тільки початкова дата
    if (range.from && !range.to) {
      return formatDate(range.from);
    }

    // Якщо вибрані обидві дати
    if (range.from && range.to) {
      // Якщо початкова і кінцева дати однакові
      if (range.from.getTime() === range.to.getTime()) {
        return formatDate(range.from);
      }
      // Якщо різні дати - показуємо діапазон
      return `${formatDate(range.from)} - ${formatDate(range.to)}`;
    }

    return "Booking date*";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = {
        ...formData,
        camperId: camperId,
        bookingDateFrom: selected.from.toISOString().split("T")[0],
        bookingDateTo: selected.to.toISOString().split("T")[0],
      };

      console.log("Booking data with camper ID:", submitData); // для перевірки

      await onSubmit(submitData);

      setFormData({
        name: "",
        email: "",
        comment: "",
      });
      setSelected(undefined);
      setErrors({});
      setIsCalendarOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={css.featureForm}>
      <h3 className={css.featureFormTitle}>Book your campervan now</h3>
      <p className={css.featureFormText}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.featureFormField} onSubmit={handleSubmit}>
        <div className={css.fieldGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? css.errorInput : ""}
            required
          />
          {errors.name && <span className={css.errorText}>{errors.name}</span>}
        </div>

        <div className={css.fieldGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? css.errorInput : ""}
            required
          />
          {errors.email && (
            <span className={css.errorText}>{errors.email}</span>
          )}
        </div>

        <div className={css.fieldGroup}>
          <div className={css.dateInputWrapper}>
            <input
              type="text"
              placeholder="Booking date*"
              value={formatDateRange(selected)}
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className={`${css.dateInput} ${
                errors.date ? css.errorInput : ""
              }`}
              readOnly
            />

            {isCalendarOpen && (
              <div className={css.calendarContainer}>
                <div className={css.calendarArrow}></div>
                <Calendar
                  selected={selected}
                  handleDateChange={handleDateChange}
                />
              </div>
            )}
          </div>
          {errors.date && <span className={css.errorText}>{errors.date}</span>}
        </div>

        <div className={css.fieldGroupArea}>
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className={css.commentFieldArea}
          />
        </div>

        <Button
          type="submit"
          className={css.featureButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
      {isCalendarOpen && (
        <div className={css.overlay} onClick={() => setIsCalendarOpen(false)} />
      )}
    </section>
  );
}

export default BookingForm;
