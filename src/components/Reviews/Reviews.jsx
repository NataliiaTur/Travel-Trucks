import css from "./Reviews.module.css";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import Icon from "../common/Icon/Icon.jsx";

function Reviews({ camper, onBookingSubmit }) {
  if (!camper || !camper.reviews) return null;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${css.star} ${
            i <= rating ? css.starFilled : css.starEmpty
          }`}
        >
          <Icon id={"icon-star"} width={16} height={16} />
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={css.reviews}>
      <ul className={css.reviewsList}>
        {camper.reviews.map((review, index) => (
          <li key={index} className={css.reviewItem}>
            <div className={css.reviewHeader}>
              <div className={css.avatar}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={css.reviewInfo}>
                <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
                <div className={css.rating}>
                  {renderStars(review.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      {/* Правий блок з формою */}
      <BookingForm
        camperId={camper.id}
        onSubmit={onBookingSubmit}
        className={css.bookingFormFlex}
      />
    </div>
  );
}

export default Reviews;
