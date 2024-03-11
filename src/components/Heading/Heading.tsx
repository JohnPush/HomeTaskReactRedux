import styles from './Heading.module.css';
import { HTMLAttributes, ReactNode } from 'react';


interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	heading: ReactNode;
}

function Heading({ heading, ...props }: HeadingProps) {
	return <h1 className={styles['heading']} {...props}>{heading}</h1>;
}

export default Heading;