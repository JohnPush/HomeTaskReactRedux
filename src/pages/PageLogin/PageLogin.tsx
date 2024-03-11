import styles from './PageLogin.module.css';
import Login from '../../components/Login/Login';

export function PageLogin() {
	return (
		<div className={styles['pageLogin']}>
			<Login />
		</div>
	);
}
