import { useState } from 'react';
import { Button, Offcanvas, Form, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

const Navbar = ({ cart, setFilters }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const [filters, setLocalFilters] = useState({
        maxPrice: '',
        size: '',
        color: '',
        type: ''
    });

    // Funciones de control de filtros
    const handleShow = () => setShowFilters(true);
    const handleClose = () => setShowFilters(false);

    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilters(filters);
        handleClose();
    };

    const clearFilters = () => {
        const initialFilters = {
            maxPrice: '',
            size: '',
            color: '',
            type: ''
        };
        setFilters(initialFilters);
        setLocalFilters(initialFilters);
    };

    // Agrupar productos en el carrito
    const groupedCart = cart.reduce((acc, item) => {
        const existingItem = acc.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);

    return (
        <nav className="bg-black d-flex align-items-center p-3">
            <div className='logo me-auto'></div>
            <div className='nav-button'>
                <Button variant='dark' className='mx-2' onClick={handleShowCart}>
                    <FontAwesomeIcon icon={faCartShopping} size='2x' />
                    <span>{cart.length}</span>
                </Button>
                <Button variant='dark' className='mx-2' onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} size='2x' />
                </Button>
            </div>

            {/* Filtros */}
            <Offcanvas show={showFilters} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Max.Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="maxPrice"
                                placeholder="Max. price"
                                value={filters.maxPrice}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Size</Form.Label>
                            <Form.Select
                                name='size'
                                value={filters.size}
                                onChange={handleChange}
                            >
                                <option value="">Select size...</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Select
                                name='color'
                                value={filters.color}
                                onChange={handleChange}
                            >
                                <option value="">Select color...</option>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                                <option value="Beige">Beige</option>
                                <option value="Grey">Grey</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                name='type'
                                value={filters.type}
                                onChange={handleChange}
                            >
                                <option value="">Select type...</option>
                                <option value="T-shirt">T-shirt</option>
                                <option value="Hoodie">Hoodie</option>
                                <option value="Sweater">Sweater</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit">Filter Products</Button>
                        <Button
                            variant='secondary'
                            className='mx-4'
                            onClick={clearFilters}
                            type="button"
                        >
                            Clear Filters
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>

            {/* Carrito */}
            <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {groupedCart.length === 0 ? (
                        <p>Your cart is empty!</p>
                    ) : (
                        <ul>
                            {groupedCart.map((item, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <Card.Img
                                        src={item.img}
                                        alt={item.name}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            objectFit: 'cover',
                                            marginRight: '10px'
                                        }}
                                    />
                                    <span>{item.name} - {item.price} x {item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <Button variant="secondary" onClick={handleCloseCart}>Close</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    );
};

export default Navbar;

