import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar = ({ filterbySearch }) => {
  const [search, setSearch] = React.useState('');

  const onSearch = () => {
    filterbySearch(search); // Call the search function with the search term
    setSearch('')
  };

  return (
    <Navbar bg="dark" expand="md">
      <Container>
        <Navbar.Brand href="#" className='text-white'>
          <img src='logo.png' alt='logo' className='logo' />
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={onSearch}>
          <FormControl
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <Button type="button" onClick={() => onSearch()} className='mx-2' variant="outline-success">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
