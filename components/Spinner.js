const Spinner = ({styles}) => {
  return (
    <div className={styles.spinner}>
                <div className="spinner-border m-5" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
  );
};

export default Spinner;
