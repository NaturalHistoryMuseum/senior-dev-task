import styles from "./Loader.module.css";

interface ILoader {
  visible: boolean;
  message: string;
}
export const Loader = ({ visible, message }: ILoader) => {
  return !visible ? null : (
    <div className={styles.loader}>
      <p aria-hidden={!visible}>{message}</p>
    </div>
  );
};
