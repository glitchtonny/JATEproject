
import React from 'react';

const HouseCard = ({ house }) => {
  return (
    <div style={styles.card}>
      <img src={house.image} alt={house.name} style={styles.image} />
      <div style={styles.info}>
        <h3>{house.name}</h3>
        <p>{house.description}</p>
        <p>Price: ${house.price}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '2px solid black',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: 'lightblue',

  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: '4px'
  },
  info: {
    marginTop: '10px'
  }
};

export default HouseCard;
