import styles from './Paragraph.module.css';

function Paragraph({ paragraph }) {
	return <div className={styles['paragraph']}>{paragraph}</div>;
}

export default Paragraph;
