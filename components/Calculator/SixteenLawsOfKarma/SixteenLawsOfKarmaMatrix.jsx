const SixteenLawsOfKarmaMatrix = ({ date, name }) => {
  useEffect(() => {
    const matrixId = document.getElementById('sixteen-laws');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;

  return <div id="sixteen-laws" className={styles.sixteen_laws_of_matrix_matrix_wrapper}></div>;
};

export default SixteenLawsOfKarmaMatrix;
