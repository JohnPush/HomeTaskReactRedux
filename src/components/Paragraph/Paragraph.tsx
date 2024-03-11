import styles from './Paragraph.module.css';
import { ReactNode } from 'react';

interface ParagraphProps {
	paragraph: ReactNode;
}

function Paragraph({ paragraph, ...props }: ParagraphProps) {
	return <div className={styles['paragraph']} {...props}>{paragraph}</div>;
}

export default Paragraph;
