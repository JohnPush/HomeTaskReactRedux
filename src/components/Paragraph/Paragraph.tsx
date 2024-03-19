import styles from './Paragraph.module.css';

interface ParagraphProps {
	paragraph: string;
}

function Paragraph({ paragraph, ...props }: ParagraphProps) {
	return <div className={styles['paragraph']} {...props}>{paragraph}</div>;
}

export default Paragraph;
