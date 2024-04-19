import styles from './PageLogin.module.css';
import Heading from '../../components/Heading/Heading';
import Login from '../../components/Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';


export function PageLogin() {
  	const profiles = useSelector((state: RootState) => state.user.profile);
  	const isUserLoggedIn = profiles?.some(profile => profile.isLogined);
  	const navigate = useNavigate();

    useEffect(() => {
        if (isUserLoggedIn) {
            navigate('/');
        }
    }, [isUserLoggedIn, navigate]);

	return (
		<div className={styles['pageLogin']} >
            <div className={styles['containerHeading']}>
				<Heading heading="Вход" />
				<Login />
			</div>
		</div>
	);
}
