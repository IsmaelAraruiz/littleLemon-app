import React, { useReducer, useEffect, useState } from 'react';
import styles from "../scss/components/bookingPage.module.scss";
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useReservation } from '../context/ReservationContext';


const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = (formData) => {
    return true;
};

const occasions = [
    { id: 1, name: "Birthday" },
    { id: 2, name: "Engagement" },
    { id: 3, name: "Anniversary" },
];

const timesReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return action.payload;
        default:
            return state;
    }
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(timesReducer, []);
    const { setReservation } = useReservation();
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        const times = fetchAPI(new Date(today));
        dispatch({ type: "UPDATE_TIMES", payload: times });
    }, []);


    const updateTimes = (selectedDate) => {
        const times = fetchAPI(new Date(selectedDate));
        dispatch({ type: "UPDATE_TIMES", payload: times });
    };


    const submitForm = (formData) => {
        const success = submitAPI(formData);

        if (success) {
            setReservation(formData);
            navigate("/confirmed");

            Swal.fire({
                title: 'Reservation Successful!',
                text: `Your reservation was successfully placed.`,
                icon: 'success',
                confirmButtonText: 'Okay'
            });

        } else {

            Swal.fire({
                title: 'Error!',
                text: `There was an issue with your reservation. Please try again.`,
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }

    };

    return (
        <section className={styles.bookingPageContainer}>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                occasions={occasions}
                submitForm={submitForm}
            />
        </section>
    );
};

export default BookingPage;
