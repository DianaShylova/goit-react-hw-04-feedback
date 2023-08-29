import PropTypes from "prop-types";
import css from "./Section.modules.css";

export const Section = ({ title, children }) => {
    return (
        <section>
            {title && <h2 className={css.feedback__title}>{title}</h2>}
            {children}
        </section>

    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
};