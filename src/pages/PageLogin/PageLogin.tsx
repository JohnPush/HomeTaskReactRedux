import styles from './PageLogin.module.css';
import Login from '../../components/Login/Login';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user.context';

export function PageLogin() {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (userContext && userContext.getCurrentUser) {
            const { loggedInUser } = userContext.getCurrentUser();
            if (loggedInUser) {
                navigate('/');
            }
        }
    }, [userContext, navigate]);

	return (
		<div className={styles['pageLogin']}>
			<Login />
		</div>
	);
}
