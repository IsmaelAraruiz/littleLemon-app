import React from 'react';
import styles from "../scss/components/confirmedBooking.module.scss";
import { Link } from 'react-router-dom';
import { useReservation } from '../context/ReservationContext';

const ConfirmedBooking = () => {
  const { reservation } = useReservation();

  if (!reservation) {
    return <p className={styles.noReservation}>No reservation data available</p>;
  }

  return (
    <section className={styles.confirmedBookingContainer}>

      <h1>Reservation Confirmed!</h1>

      <dl>
        <dt>Date:</dt>
        <dd>{reservation.date}</dd>

        <dt>Time:</dt>
        <dd>{reservation.time}</dd>

        <dt>Guests:</dt>
        <dd>{reservation.guests}</dd>

        <dt>Occasion:</dt>
        <dd>{reservation.occasion}</dd>
      </dl>


      <Link to="/">
        <button aria-label="Go to home page">Go back home</button>
      </Link>

    </section>
  );
};

export default ConfirmedBooking;
