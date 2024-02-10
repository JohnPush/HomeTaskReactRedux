import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(function Input(
	{ isValid, showIconSearch, placeholder, value, className, ...props },
	ref
) {
	return (
		<div
			className={cn(className, {
				[styles['inputSearch']]: showIconSearch,
				[styles['inputLogin']]: !showIconSearch
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
				className={cn(className, {
					[styles['inputContent']]: !isValid,
					[styles['invalid']]: isValid
				})}
				{...props}
			/>
		</div>
	);
});

export default Input;
