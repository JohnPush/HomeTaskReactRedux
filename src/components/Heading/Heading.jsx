import './Heading.css';

function Heading({ heading, subheading }) {
	return (
		<div className="container">
			<h1 className="heading">{heading}</h1>
			<p className="subheading">{subheading}</p>
		</div>
	);
}

export default Heading;
