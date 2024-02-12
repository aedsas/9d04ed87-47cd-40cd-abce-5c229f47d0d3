import styles from './loading-dots.module.scss';

const LoadingDots = ({ color = '#000' }: { color?: string }) => {
  return (
    <span className={styles.loading + ' mb-4'}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;
