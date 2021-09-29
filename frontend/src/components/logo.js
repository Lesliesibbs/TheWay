import React from 'react'
import Image from 'next/image';

const Logo = (props) => {
    return (
		<div styling={props.styling}>
			<Image
				src={props.src}
				alt={props.alt}
				layout={props.layout} // required
				objectFit={props.objectFit} // change to suit your needs
				className={props.style} // just an example
			/>
		</div>
	);
}

export default Logo
