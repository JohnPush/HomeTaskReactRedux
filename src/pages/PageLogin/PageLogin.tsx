import styles from './PageLogin.module.css';
import Login from '../../components/Login/Login';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user.context';

export function PageLogin() {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

	if (!userContext) {
        return (
            <div className={styles['pageLogin']}>
                <Login />
            </div>
        );
    }

	const { getCurrentUser } = userContext;

    if (!getCurrentUser) {
        return (
            <div className={styles['pageLogin']}>
                <Login />
            </div>
        );
    }

    const { loggedInUser } = getCurrentUser();

    if (loggedInUser) {
        navigate('/');
        return null;
    }

	return (
		<div className={styles['pageLogin']}>
			<Login />
		</div>
	);
}
