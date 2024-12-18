import React, { useState } from 'react';
import styles from "../scss/components/bookingForm.module.scss";

const BookingForm = ({ availableTimes, updateTimes, occasions, submitForm }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


    //! Function handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        //* Validation for required fields
        if (!date || !time || !guests || !occasion) {
            setError("All fields are required!");
            return;
        }

        //* Validation for the selected date (disallow past dates)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            setError("The selected date cannot be in the past");
            return;
        }

        //* Validation for the selected time
        if (!availableTimes.includes(time)) {
            setError("Please select a valid time from the available options.");
            return;
        }

        //* Validation for the number of guests
        if (guests < 1 || guests > 10) {
            setError("Number of guests should be between 1 and 10");
            return;
        }

        //* Validation for the selected occasion
        if (!occasion) {
            setError("Please select an occasion.");
            return;
        }

        setError("");
        setIsSubmitting(true);

        const success = submitForm({ date, time, guests, occasion });

        if (success) {
            clearForm();
            setIsSubmitting(false);
        } else {
            setIsSubmitting(false);
        }
    }


    //! Function handleDateChange
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        updateTimes(selectedDate);
    }

    //! Function handleGuestsChange
    const handleGuestsChange = (e) => {
        const value = e.target.value;
        setGuests(value);

        if (value < 1 || value > 10) {
            setError("Number of guests should be between 1 and 10");
        } else {
            setError("");
        }
    };

    //! Function clearForm
    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    return (
        <div className={styles.bookingFormContainer}>
            <form onSubmit={handleSubmit}>
                <h1>Reservation</h1>

                {/* Error Message */}
                <div className={styles.field}>
                    {error ? <p className={styles.error}>{error}</p> : <p className={styles.success}>Everything is going well</p>}
                </div>

                {/* Date field */}
                <div className={styles.field}>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        id='res-date'
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>

                {/* Time field */}
                <div className={styles.field}>
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="">Select time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Guests field */}
                <div className={styles.field}>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        id="guests"
                        type="number"
                        value={guests}
                        onChange={handleGuestsChange}
                        placeholder="0"
                        min="1"
                        max="10"
                        required
                    />
                </div>

                {/* Occasion field */}
                <div className={styles.field}>
                    <label htmlFor="Occasion">Occasion</label>
                    <select
                        id="Occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                    >
                        <option value="">Select Occasion</option>
                        {occasions.map((occasion) => (
                            <option key={occasion.id} value={occasion.name}>
                                {occasion.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" disabled={isSubmitting} aria-label="Submit form on click">
                    {isSubmitting ? 'Processing...' : 'Make Your reservation'}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
