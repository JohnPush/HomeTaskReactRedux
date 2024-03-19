import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	textButton: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ onClick, textButton, ...props }, ref) {
	return (
		<button ref={ref} className={styles.button} onClick={onClick} {...props}>
			{textButton}
		</button>
	);
});

export default Button;
