import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import motion

const MenuItems = ({ menuItems }) => {
  return (
    <Container>
      {menuItems.length >= 1 ? (
        menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }} // Initial scale
            animate={{ scale: 1 }}  // Final scale
            transition={{ duration: 0.3 }} // Transition duration
          >
            <Card className="mt-4 d-flex flex-row justify-content-between">
              <Card.Img
                className="img-item"
                variant="top"
                src={item.imgUrl}
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <div className="d-flex flex-row justify-content-between">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </div>
                <Card.Text className='text-muted mt-4'>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <h3 className="text-center">لا يوجد أصناف</h3>
      )}
    </Container>
  );
};

export default MenuItems;
