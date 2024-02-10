import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button({ onClick, textButton }, ref) {
	return (
		<button ref={ref} className={styles.button} onClick={onClick}>
			{textButton}
		</button>
	);
});

export default Button;
