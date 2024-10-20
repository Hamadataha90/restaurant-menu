import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import motion

const MenuContainer = ({ filterbyCategory, allCategory }) => {
  return (
    <Container className="my-1">
      <h1 className="text-center mb-3">قائمة الطعام</h1>
      <div className="custom-hr-container">
        <hr className="custom-hr" />
      </div>

      {allCategory.length >= 1 ? (
        <div className="menu-categories text-center mb-2 d-flex justify-content-center flex-wrap">
          {/* Render Category Buttons with onClick Handlers */}
          {allCategory.map((cat, index) => (
            <motion.button
              key={index}
              onClick={() => filterbyCategory(cat)}
              className="category-btn mx-2 my-1"
              initial={{ rotate: 0 }} // Initial rotation
              whileHover={{ rotate: 10 }} // Rotate on hover
              transition={{ duration: 0.2 }} // Transition duration
            >
              {cat}
            </motion.button>
          ))}
        </div>
      ) : (
        <h3 className="text-center">لا يوجد طعام متاح</h3>
      )}
    </Container>
  );
};

export default MenuContainer;
