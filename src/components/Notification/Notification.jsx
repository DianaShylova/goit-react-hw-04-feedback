import css from "./Notification.module.css";
import propTypes from "prop-types";

export const Notification = ({ message }) => (
    <p className={css.feedback__message}> {message} </p>
);

Notification.propTypes = {
    message: propTypes.string.isRequired,
};