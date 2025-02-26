import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './products.css'

const clothes = [
    { id:1, name: "White T-shirt", price: '$18', img: '/src/components/Products/img/img-1.png', color: 'White', size: 'S', type: 'T-shirt'},
    { id: 2, name: "Grey Sweater", price: '$22', img: '/src/components/Products/img/img-2.png', color: 'Grey', size: 'M', type: 'Sweater' },
    { id: 3, name: "White Hoddie", price: '$19', img: '/src/components/Products/img/img-3.png', color: 'White', size: 'L', type: 'Hoodie' },
    { id: 4, name: "Beige Hoodie", price: '$16', img: '/src/components/Products/img/img-4.png', color: 'Beige', size: 'XL', type: 'Hoodie' },
    { id: 5, name: "Black Hoodie", price: '$21', img: '/src/components/Products/img/img-5.png', color: 'Black', size: 'S', type: 'Hoodie' },
    { id: 6, name: "Black Hoodie Nope", price: '$18', img: '/src/components/Products/img/img-6.png', color: 'Black', size: 'M', type: 'Hoodie' },
    { id: 7, name: "White Hoddie Let ALL", price: '$20', img: '/src/components/Products/img/img-7.png', color: 'White', size: 'S', type: 'Hoodie' },
    { id: 8, name: "Black Hoddie Be Kind", price: '$24', img: '/src/components/Products/img/img-8.png', color: 'Black', size: 'XL', type: 'Hoodie' },
    { id: 9, name: "Black t-shirt", price: '$24', img: '/src/components/Products/img/img-9.png', color: 'Black', size: 'L', type: 'T-shirt' },
    { id: 10, name: "Black t-shirt Symptoms", price: '$16', img: '/src/components/Products/img/img-10.png', color: 'Black', size: 'M', type: 'T-shirt' },
    { id: 11, name: "White T-shirt Fight", price: '$28', img: '/src/components/Products/img/img-11.png', color: 'White', size: 'S', type: 'T-shirt' },
    { id: 12, name: "White T-shirt Paris", price: '$23', img: '/src/components/Products/img/img-12.png', color: 'White', size: 'M', type: 'T-shirt' },
    { id: 13, name: "White T-shirt We Free", price: '$19', img: '/src/components/Products/img/img-13.png', color: 'White', size: 'L', type: 'T-shirt' },
    { id: 14, name: "Black T-shirt Girl", price: '$29', img: '/src/components/Products/img/img-14.png', color: 'Black', size: 'S', type: 'T-shirt' },
    { id: 15, name: "White T-shirt Girl", price: '$29', img: '/src/components/Products/img/img-15.png', color: 'White', size: 'XL', type: 'T-shirt' },
    { id: 16, name: "White T-shirt Relax", price: '$24', img: '/src/components/Products/img/img-16.png', color: 'White', size: 'M', type: 'T-shirt' },
]

const Products = ({ cart, addToCart, filters = { maxPrice: '', size: '', color: '', type: '' } }) => {

    const [likedProducts, setLikedProducts] = useState([]);

    const filteredClothes = clothes.filter(item => {
        const price = parseInt(item.price.replace('$', ''));
        return(
            (!filters.maxPrice || price <= parseInt(filters.maxPrice)) &&
            (!filters.size || item.size.includes(filters.size)) &&
            (!filters.color || item.color.includes(filters.color)) &&
            (!filters.type || item.type.includes(filters.type))
        );
    });

    const toggleLike = (id) => {
        setLikedProducts((prev) =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <Container className='my-5'>
            <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
                {filteredClothes.map(item => (
                    <Col key={item.id}>
                        <Card className='h-100 text-center'>
                            <Card.Img src={item.img}></Card.Img>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.price} </Card.Text>
                                <Card.Footer>Size: {item.size}</Card.Footer>
                                <Button 
                                    variant='light'
                                    onClick={() => addToCart(item)}
                                >
                                        <FontAwesomeIcon icon={faCartPlus} size='2x'/>
                                
                                </Button>

                                <Button 
                                variant="link"
                                className='heart-button'
                                onClick={() => toggleLike(item.id)}
                                >
                                <FontAwesomeIcon 
                                    icon={faHeart} 
                                    size='2x' 
                                    color={likedProducts.includes(item.id) ? 'red' : 'gray'} 
                                />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products