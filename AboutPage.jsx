
import React from 'react';
import HouseCard from './HouseCard';

const AboutPage = () => {
  
  const houses = [
    {
      name: 'Cozy Cottage',
      description: 'A charming cottage in the countryside in huston.',
      price: 150000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ&s'
    },
    {
      name: 'Modern Loft',
      description: 'A sleek and stylish loft in the city center. a charming cottage',
      price: 250000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tDPx5DO4sjWLGGevXgPqujPEyrW66cRuQkVHohXojaRaI1T5-9ECCebajbykIKGs2eI&usqp=CAU'
    },
    {
      name: 'Beach House',
      description: 'A luxurious beachfront property with stunning views.',
      price: 500000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tDPx5DO4sjWLGGevXgPqujPEyrW66cRuQkVHohXojaRaI1T5-9ECCebajbykIKGs2eI&usqp=CAU'
    },
    {
        name: 'Green cottage',
        description: 'A charming cottage in the countryside in huston.',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ&s'
      },
      {
        name: 'Country House',
        description: 'A sleek and stylish loft in the city center. a charming cottage',
        price: 250000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tDPx5DO4sjWLGGevXgPqujPEyrW66cRuQkVHohXojaRaI1T5-9ECCebajbykIKGs2eI&usqp=CAU'
      },
      {
        name: 'Huston Loft',
        description: 'A luxurious beachfront property with stunning views.',
        price: 500000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tDPx5DO4sjWLGGevXgPqujPEyrW66cRuQkVHohXojaRaI1T5-9ECCebajbykIKGs2eI&usqp=CAU'
      },
      {
            name: 'Breezy Cottage',
            description: 'A charming cottage in the countryside in huston.',
            price: 150000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ&s'
      },
      {
            name: 'Glow House',
            description: 'A sleek and stylish loft in the city center. a charming cottage',
            price: 250000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ&s'
      },
      {
            name: 'Beach House',
            description: 'A luxurious beachfront property with stunning views.',
            price: 500000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tDPx5DO4sjWLGGevXgPqujPEyrW66cRuQkVHohXojaRaI1T5-9ECCebajbykIKGs2eI&usqp=CAU'
      },
      {
            name: 'Paradise Loft',
            description: 'A charming cottage in the countryside in huston.',
            price: 150000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ&s'
      },
      {
            name: 'Eden Ville',
            description: 'A sleek and stylish loft in the city center. a charming cottage',
            price: 250000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99t_8bQSCEimMqBrecbl4pHDAy0xGECIITQ&s'
      },
      {
            name: 'Stamet House',
            description: 'A luxurious beachfront property with stunning views.',
            price: 500000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tDPx5DO4sjWLGGevXgPqujPEyrW66cRuQkVHohXojaRaI1T5-9ECCebajbykIKGs2eI&usqp=CAU'
      }
  ];

  return (
    <div style={styles.container}>
      <h2>About Our Houses</h2>
      <div style={styles.cardContainer}>
        {houses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
    </div>
  );
};

const styles = {
    container: {
      padding: '30px'
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '100px'
    }
  }

export default AboutPage;
