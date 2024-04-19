import styles from './Input.module.css';
import cn from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isValid?: boolean;
	showIconSearch?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ isValid = true, showIconSearch = false, placeholder, value, className, ...props },
	ref
) {
	return (
		<div
			className={cn(styles['inputForm'], className, {
				[styles['inputFormSearch']]: showIconSearch,
				[styles['inputFormLogin']]: !showIconSearch
			})}
		>
			{showIconSearch && (
				<div className={styles.inputSearch__icon}>
					<img src="/search-normal.svg" alt="иконка поиска" />
				</div>
			)}
			<input
				ref={ref}
				placeholder={placeholder}
				value={value}
				className={cn(styles['input'], className, {
					[styles['inputContent']]: isValid,
					[styles['invalid']]: !isValid
				})}
				{...props}
			/>
		</div>
	);
});

export default Input;
