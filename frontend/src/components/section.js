import React from "react";

const Section = (props) => {
	return (
        <section className={props.class}>
            {props.children}
        </section>
    );
};

export default Section;
