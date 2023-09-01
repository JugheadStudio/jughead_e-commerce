import React, { useEffect, useState } from 'react';
import axios from 'axios'

// Bootstrap
import { Container, Row, Col, Button, Form, Accordion } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';

function ProductComponent() {

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [stock, setStock] = useState("");
  const [productCollection, setProductCollection] = useState("");
  const [material, setMaterial] = useState("");
  const [style, setStyle] = useState("");

  const [stockS, setStockS] = useState("");
  const [stockMd, setStockMd] = useState("");
  const [stockLg, setStockLg] = useState("");
  const [stockXl, setStockXl] = useState("");
  const [stockXxl, setStockXxl] = useState("");
  const [stockXxxl, setStockXxxl] = useState("");

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productCollectionSet, setProductCollectionSet] = useState("");
  const [productMaterial, setProductMaterial] = useState("");
  const [productStyle, setProductStyle] = useState("");

  const [productStock, setProductStock] = useState("");
  const [productStockS, setProductStockS] = useState("");
  const [productStockMd, setProductStockMd] = useState("");
  const [productStockLg, setProductStockLg] = useState("");
  const [productStockXl, setProductStockXl] = useState("");
  const [productStockXxl, setProductStockXxl] = useState("");
  const [productStockXxxl, setProductStockXxxl] = useState("");

  const [clothingProducts, setClothingProducts] = useState([]);
  const [printProducts, setPrintProducts] = useState([]);
  const [accessoryProducts, setAccessoryProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(result => {
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].category === 'Clothing') {
            setClothingProducts(prevArray => [...prevArray, result.data[i]]);
          }
        }
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].category === 'Prints') {
            setPrintProducts(prevArray => [...prevArray, result.data[i]]);
          }
        }
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].category === 'Accessories') {
            setAccessoryProducts(prevArray => [...prevArray, result.data[i]]);
          }
        }
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = () => {
    const payload = {
      name: name,
      price: price,
      category: category,
      productCollection: productCollection,
      style: style,
      material: material,
      stock: {
        s: stockS,
        md: stockMd,
        lg: stockLg,
        xl: stockXl,
        xxl: stockXxl,
        xxxl: stockXxxl
      }
    }

    console.log(payload)

    try {
      const response = axios.post('http://localhost:3001/api/product', payload);
      console.log('Product data submitted:', response);
    } catch (error) {
      console.error('Error submitting product data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:3001/api/product/' + id);
      const updatedProducts = clothingProducts.filter(product => product._id !== id);
      setClothingProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updateProduct = async (productId) => {
    const payload = {};

    if (productName !== '') payload.name = productName;
    if (productPrice !== '') payload.price = productPrice;
    if (productStockS !== '') payload.stock.s = productStockS;
    if (productCategory !== '') payload.category = productCategory;

    try {
      await axios.patch(`http://localhost:3001/api/product/${productId}`, payload);
      console.log('Product updated successfully');

      // Fetch updated product data from the server
      axios.get('http://localhost:3001/api/products')
        .then(result => {
          setClothingProducts(result.data);
        })
        .catch(err => console.log(err));

      // Clear form fields
      setProductName('');
      setProductPrice('');
      setProductStockS('');
      setProductCategory('');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (

    <div>

      <Tabs defaultActiveKey="clothing" id="uncontrolled-tab-example" className="mb-3" fill>
        <Tab eventKey="clothing" title="Clothing" className='product-tab'>

          <Container>

            <Row>
              <Col className='text-end'>
                <Button variant="primary" className='btn-teal mt-30 mb-30' onClick={handleShow}>
                  Add Product
                </Button>
              </Col>

              <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>New Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form onSubmit={handleSubmit}>

                    <Row>
                      <Col>
                        <h5>Product Information</h5>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={4}>
                        <Form.Group controlId="name">
                          <Form.Label>Product Name*</Form.Label>
                          <Form.Control type="text" name="name" placeholder={'e.g. Black Hoody'} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group controlId="price">
                          <Form.Label>Price*</Form.Label>
                          <Form.Control type="text" name="price" placeholder={'e.g. 500'} onChange={(e) => setPrice(e.target.value)} required pattern="^\d+(\.\d{1,2})?$" />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group controlId="category">
                          <Form.Label>Category*</Form.Label>
                          <Form.Control as="select" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required >
                            <option value="">Select a category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Prints">Prints</option>
                            <option value="Accessories">Accessories</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={4}>
                        <Form.Label>Collection</Form.Label>
                        <Form.Control as="select" name="collection" onChange={(e) => setProductCollection(e.target.value)}  >
                          <option value="">Select a Collection</option>
                          <option value="Spring">Spring</option>
                          <option value="Summer">Summer</option>
                          <option value="Fall">Fall</option>
                          <option value="Winter">Winter</option>
                        </Form.Control>
                      </Col>
                      <Col xs={4}>
                        <Form.Label>Fabric</Form.Label>
                        <Form.Control as="select" name="material" onChange={(e) => setMaterial(e.target.value)} >
                          <option value="">Select a fabric</option>
                          <option value="100% Cotton">100% Cotton</option>
                          <option value="Not Cotton">Not Cotton</option>
                        </Form.Control>
                      </Col>
                      <Col xs={4}>
                        <Form.Label>Style</Form.Label>
                        <Form.Control as="select" name="style" onChange={(e) => setStyle(e.target.value)} >
                          <option value="">Select a style</option>
                          <option value="Relax">Relax</option>
                          <option value="Baggy">Baggy</option>
                          <option value="Slim">Slim</option>
                        </Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col className='mt-20'>
                        <h5>Stock in Sizes</h5>
                      </Col>
                    </Row>

                    <Row>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Small*</Form.Label>
                          <Form.Control type="number" name="stockS" placeholder={'e.g. 100'} onChange={(e) => setStockS(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Medium</Form.Label>
                          <Form.Control type="number" name="stockMd" placeholder={'e.g. 100'} onChange={(e) => setStockMd(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Large</Form.Label>
                          <Form.Control type="number" name="stockLg" placeholder={'e.g. 100'} onChange={(e) => setStockLg(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>X Large</Form.Label>
                          <Form.Control type="number" name="stockXl" placeholder={'e.g. 100'} onChange={(e) => setStockXl(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>XX Large</Form.Label>
                          <Form.Control type="number" name="stockXxl" placeholder={'e.g. 100'} onChange={(e) => setStockXxl(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>XXX Large</Form.Label>
                          <Form.Control type="number" name="stockXxxl" placeholder={'e.g. 100'} onChange={(e) => setStockXxxl(e.target.value)} />
                        </Form.Group>
                      </Col>

                    </Row>

                    <Row>
                      <Col className='text-end'>
                        <Button variant="secondary" className='mt-20 mr-15' onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" className='mt-20' type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Modal.Body>
              </Modal>

            </Row>

            <Row className='justify-content-center product-table'>
              <Col>
                <p>Product Name</p>
              </Col>

              <Col>
                <p>Price</p>
              </Col>

              <Col>
                <p>Stock</p>
              </Col>

              <Col>
                <p>Category</p>
              </Col>

              <Col>
                <p>Actions</p>
              </Col>
            </Row>

            <Row>
              <Accordion defaultActiveKey="0">

                {clothingProducts.map((product) => (

                  <Accordion.Item eventKey={product._id} key={product._id}>
                    <Accordion.Header>

                      <Container>
                        <Row>
                          <Col className='text-center'>
                            <p id="name">{product.name}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="price">${product.price}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="stock">{product.stock.s}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="category">{product.category}</p>
                          </Col>
                          <Col className='text-center'>
                            <span className="btn btn-danger" onClick={() => handleDelete(product._id)} >
                              Delete
                            </span>
                          </Col>
                        </Row>
                      </Container>

                    </Accordion.Header>
                    <Accordion.Body>
                      <Container>
                        <Form key={product._id}>
                          <Row className="mb-3">
                            <Col>
                              <Form.Control type="text" id="name" placeholder={product.name} value={productName} onChange={(e => setProductName(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="number" id="price" placeholder={product.price} value={productPrice} onChange={(e => setProductPrice(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="number" id="stock" placeholder={product.stock.s} value={productStockS} onChange={(e => setProductStockS(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="text" id="category" placeholder={product.category} value={productCategory} onChange={(e => setProductCategory(e.target.value))} />
                            </Col>
                            <Col className='text-end'>
                              <Button variant="success" onClick={() => updateProduct(product._id)}>
                                Update
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </Container>

                    </Accordion.Body>
                  </Accordion.Item>

                ))}

              </Accordion>
            </Row>
          </Container>

        </Tab>

        <Tab eventKey="prints" title="Prints" className='product-tab'>

          <Container>

            <Row>
              <Col className='text-end'>
                <Button variant="primary" className='btn-teal mt-30 mb-30' onClick={handleShow}>
                  Add Product
                </Button>
              </Col>

              <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>New Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form onSubmit={handleSubmit}>

                    <Row>
                      <Col>
                        <h5>Product Information</h5>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={4}>
                        <Form.Group controlId="name">
                          <Form.Label>Product Name*</Form.Label>
                          <Form.Control type="text" name="name" placeholder={'e.g. Black Hoody'} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group controlId="price">
                          <Form.Label>Price*</Form.Label>
                          <Form.Control type="text" name="price" placeholder={'e.g. 500'} onChange={(e) => setPrice(e.target.value)} required pattern="^\d+(\.\d{1,2})?$" />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group controlId="category">
                          <Form.Label>Category*</Form.Label>
                          <Form.Control as="select" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required >
                            <option value="">Select a category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Prints">Prints</option>
                            <option value="Accessories">Accessories</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={4}>
                        <Form.Label>Collection</Form.Label>
                        <Form.Control as="select" name="collection" onChange={(e) => setProductCollection(e.target.value)}  >
                          <option value="">Select a Collection</option>
                          <option value="Spring">Spring</option>
                          <option value="Summer">Summer</option>
                          <option value="Fall">Fall</option>
                          <option value="Winter">Winter</option>
                        </Form.Control>
                      </Col>
                      <Col xs={4}>
                        <Form.Label>Fabric</Form.Label>
                        <Form.Control as="select" name="material" onChange={(e) => setMaterial(e.target.value)} >
                          <option value="">Select a fabric</option>
                          <option value="100% Cotton">100% Cotton</option>
                          <option value="Not Cotton">Not Cotton</option>
                        </Form.Control>
                      </Col>
                      <Col xs={4}>
                        <Form.Label>Style</Form.Label>
                        <Form.Control as="select" name="style" onChange={(e) => setStyle(e.target.value)} >
                          <option value="">Select a style</option>
                          <option value="Relax">Relax</option>
                          <option value="Baggy">Baggy</option>
                          <option value="Slim">Slim</option>
                        </Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col className='mt-20'>
                        <h5>Stock in Sizes</h5>
                      </Col>
                    </Row>

                    <Row>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Small*</Form.Label>
                          <Form.Control type="number" name="stockS" placeholder={'e.g. 100'} onChange={(e) => setStockS(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Medium</Form.Label>
                          <Form.Control type="number" name="stockMd" placeholder={'e.g. 100'} onChange={(e) => setStockMd(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Large</Form.Label>
                          <Form.Control type="number" name="stockLg" placeholder={'e.g. 100'} onChange={(e) => setStockLg(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>X Large</Form.Label>
                          <Form.Control type="number" name="stockXl" placeholder={'e.g. 100'} onChange={(e) => setStockXl(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>XX Large</Form.Label>
                          <Form.Control type="number" name="stockXxl" placeholder={'e.g. 100'} onChange={(e) => setStockXxl(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>XXX Large</Form.Label>
                          <Form.Control type="number" name="stockXxxl" placeholder={'e.g. 100'} onChange={(e) => setStockXxxl(e.target.value)} />
                        </Form.Group>
                      </Col>

                    </Row>

                    <Row>
                      <Col className='text-end'>
                        <Button variant="secondary" className='mt-20 mr-15' onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" className='mt-20' type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Modal.Body>
              </Modal>

            </Row>

            <Row className='justify-content-center product-table'>
              <Col>
                <p>Product Name</p>
              </Col>

              <Col>
                <p>Price</p>
              </Col>

              <Col>
                <p>Stock</p>
              </Col>

              <Col>
                <p>Category</p>
              </Col>

              <Col>
                <p>Actions</p>
              </Col>
            </Row>

            <Row>
              <Accordion defaultActiveKey="0">

                {printProducts.map((product) => (

                  <Accordion.Item eventKey={product._id} key={product._id}>
                    <Accordion.Header>

                      <Container>
                        <Row>
                          <Col className='text-center'>
                            <p id="name">{product.name}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="price">${product.price}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="stock">{product.stock.s}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="category">{product.category}</p>
                          </Col>
                          <Col className='text-center'>
                            <span className="btn btn-danger" onClick={() => handleDelete(product._id)} >
                              Delete
                            </span>
                          </Col>
                        </Row>
                      </Container>

                    </Accordion.Header>
                    <Accordion.Body>
                      <Container>
                        <Form key={product._id}>
                          <Row className="mb-3">
                            <Col>
                              <Form.Control type="text" id="name" placeholder={product.name} value={productName} onChange={(e => setProductName(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="number" id="price" placeholder={product.price} value={productPrice} onChange={(e => setProductPrice(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="number" id="stock" placeholder={product.stock} value={productStock} onChange={(e => setProductStock(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="text" id="category" placeholder={product.category} value={productCategory} onChange={(e => setProductCategory(e.target.value))} />
                            </Col>
                            <Col className='text-end'>
                              <Button variant="success" onClick={() => updateProduct(product._id)}>
                                Update
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </Container>

                    </Accordion.Body>
                  </Accordion.Item>

                ))}

              </Accordion>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="accessories" title="Accessories" className='product-tab'>
          <Container>

            <Row>
              <Col className='text-end'>
                <Button variant="primary" className='btn-teal mt-30 mb-30' onClick={handleShow}>
                  Add Product
                </Button>
              </Col>

              <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>New Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form onSubmit={handleSubmit}>

                    <Row>
                      <Col>
                        <h5>Product Information</h5>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={4}>
                        <Form.Group controlId="name">
                          <Form.Label>Product Name*</Form.Label>
                          <Form.Control type="text" name="name" placeholder={'e.g. Black Hoody'} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group controlId="price">
                          <Form.Label>Price*</Form.Label>
                          <Form.Control type="text" name="price" placeholder={'e.g. 500'} onChange={(e) => setPrice(e.target.value)} required pattern="^\d+(\.\d{1,2})?$" />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group controlId="category">
                          <Form.Label>Category*</Form.Label>
                          <Form.Control as="select" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required >
                            <option value="">Select a category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Prints">Prints</option>
                            <option value="Accessories">Accessories</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={4}>
                        <Form.Label>Collection</Form.Label>
                        <Form.Control as="select" name="collection" onChange={(e) => setProductCollection(e.target.value)}  >
                          <option value="">Select a Collection</option>
                          <option value="Spring">Spring</option>
                          <option value="Summer">Summer</option>
                          <option value="Fall">Fall</option>
                          <option value="Winter">Winter</option>
                        </Form.Control>
                      </Col>
                      <Col xs={4}>
                        <Form.Label>Fabric</Form.Label>
                        <Form.Control as="select" name="material" onChange={(e) => setMaterial(e.target.value)} >
                          <option value="">Select a fabric</option>
                          <option value="100% Cotton">100% Cotton</option>
                          <option value="Not Cotton">Not Cotton</option>
                        </Form.Control>
                      </Col>
                      <Col xs={4}>
                        <Form.Label>Style</Form.Label>
                        <Form.Control as="select" name="style" onChange={(e) => setStyle(e.target.value)} >
                          <option value="">Select a style</option>
                          <option value="Relax">Relax</option>
                          <option value="Baggy">Baggy</option>
                          <option value="Slim">Slim</option>
                        </Form.Control>
                      </Col>
                    </Row>

                    <Row>
                      <Col className='mt-20'>
                        <h5>Stock in Sizes</h5>
                      </Col>
                    </Row>

                    <Row>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Small*</Form.Label>
                          <Form.Control type="number" name="stockS" placeholder={'e.g. 100'} onChange={(e) => setStockS(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Medium</Form.Label>
                          <Form.Control type="number" name="stockMd" placeholder={'e.g. 100'} onChange={(e) => setStockMd(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>Large</Form.Label>
                          <Form.Control type="number" name="stockLg" placeholder={'e.g. 100'} onChange={(e) => setStockLg(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>X Large</Form.Label>
                          <Form.Control type="number" name="stockXl" placeholder={'e.g. 100'} onChange={(e) => setStockXl(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>XX Large</Form.Label>
                          <Form.Control type="number" name="stockXxl" placeholder={'e.g. 100'} onChange={(e) => setStockXxl(e.target.value)} />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="stock">
                          <Form.Label>XXX Large</Form.Label>
                          <Form.Control type="number" name="stockXxxl" placeholder={'e.g. 100'} onChange={(e) => setStockXxxl(e.target.value)} />
                        </Form.Group>
                      </Col>

                    </Row>

                    <Row>
                      <Col className='text-end'>
                        <Button variant="secondary" className='mt-20 mr-15' onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" className='mt-20' type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Modal.Body>
              </Modal>

            </Row>

            <Row className='justify-content-center product-table'>
              <Col>
                <p>Product Name</p>
              </Col>

              <Col>
                <p>Price</p>
              </Col>

              <Col>
                <p>Stock</p>
              </Col>

              <Col>
                <p>Category</p>
              </Col>

              <Col>
                <p>Actions</p>
              </Col>
            </Row>

            <Row>
              <Accordion defaultActiveKey="0">

                {accessoryProducts.map((product) => (

                  <Accordion.Item eventKey={product._id} key={product._id}>
                    <Accordion.Header>

                      <Container>
                        <Row>
                          <Col className='text-center'>
                            <p id="name">{product.name}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="price">${product.price}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="stock">{product.stock.s}</p>
                          </Col>
                          <Col className='text-center'>
                            <p id="category">{product.category}</p>
                          </Col>
                          <Col className='text-center'>
                            <span className="btn btn-danger" onClick={() => handleDelete(product._id)} >
                              Delete
                            </span>
                          </Col>
                        </Row>
                      </Container>

                    </Accordion.Header>
                    <Accordion.Body>
                      <Container>
                        <Form key={product._id}>
                          <Row className="mb-3">
                            <Col>
                              <Form.Control type="text" id="name" placeholder={product.name} value={productName} onChange={(e => setProductName(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="number" id="price" placeholder={product.price} value={productPrice} onChange={(e => setProductPrice(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="number" id="stock" placeholder={product.stock.s} value={productStockS} onChange={(e => setProductStockS(e.target.value))} />
                            </Col>
                            <Col>
                              <Form.Control type="text" id="category" placeholder={product.category} value={productCategory} onChange={(e => setProductCategory(e.target.value))} />
                            </Col>
                            <Col className='text-end'>
                              <Button variant="success" onClick={() => updateProduct(product._id)}>
                                Update
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </Container>

                    </Accordion.Body>
                  </Accordion.Item>

                ))}

              </Accordion>
            </Row>
          </Container>
        </Tab>
      </Tabs>

    </div>
  );
}

export default ProductComponent;