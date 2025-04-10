import {useState} from "react";
import {Button, Form, Row, Col } from "react-bootstrap";
import "./Consultation.css"

const FormOne = () => (
    <Form className="Buyer-Form">
        <Form.Group className="Form-Group-1 mb-3">
            <Form.Label style={{ fontSize: '35px' }}>Buyer Consultation</Form.Label>
            <br/>
            <Form.Label style={{ fontSize: '20px' }}>Thinking of buying a property? We can Help</Form.Label>
            <br/>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
            <Row lg={2}>
            <Col>
                <Form.Label>
                    First Name
                </Form.Label> 
            </Col>
            <Col>
                <Form.Label>
                    Last Name
                </Form.Label>
            </Col>
            </Row>
            
            <Row lg={2}>
                <Col>
                <Form.Control placeholder="Enter First Name" />
                </Col>
                <Col>
                <Form.Control placeholder="Enter Last Name" />
                </Col>
                
            </Row>
            
           
            
            
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>
                Email Address
            </Form.Label>

            <Form.Control  placeholder="Enter Email Address" />
            <Form.Label>
                Phone Number
            </Form.Label>

            <Form.Control  placeholder="Enter Phone Number" />

        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>
                Type of Property
            </Form.Label>
            <Form.Check type="checkbox" label="Single" />
            <Form.Check type="checkbox" label="2-4 Family" />
            <Form.Check type="checkbox" label="Duplex" />
            <Form.Check type="checkbox" label="Condo" />
            <Form.Check type="checkbox" label="Townhouse" />
            <Form.Check type="checkbox" label="Coop" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>
                Other Information
            </Form.Label>
            <br />
            <Form.Control as="textarea" rows={3}/>
        </Form.Group>

        <div className = "Submit-Button">
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </div>
    </Form>
  );
  
  // Form 2
  const FormTwo = () => (
    <Form className="Seller-Form">
        <Form.Group className="Form-Group-1 mb-3">
            <Form.Label style={{ fontSize: '35px' }}>Seller Consultation</Form.Label>
            <br/>
            <Form.Label style={{ fontSize: '20px' }}>Thinking of Selling a property? We can Help</Form.Label>
            <br/>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
            <Row lg={2}>
            <Col>
                <Form.Label>
                    First Name
                </Form.Label> 
            </Col>
            <Col>
                <Form.Label>
                    Last Name
                </Form.Label>
            </Col>
            </Row>
            
            <Row lg={2}>
                <Col>
                <Form.Control placeholder="Enter First Name" />
                </Col>
                <Col>
                <Form.Control placeholder="Enter Last Name" />
                </Col>
                
            </Row>
            
           
            
            
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>
                Email Address
            </Form.Label>

            <Form.Control  placeholder="Enter Email Address" />
            <Form.Label>
                Phone Number
            </Form.Label>

            <Form.Control  placeholder="Enter Phone Number" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>
                Type of Property
            </Form.Label>
            <Form.Check type="checkbox" label="Single" />
            <Form.Check type="checkbox" label="2-4 Family" />
            <Form.Check type="checkbox" label="Duplex" />
            <Form.Check type="checkbox" label="Condo" />
            <Form.Check type="checkbox" label="Townhouse" />
            <Form.Check type="checkbox" label="Coop" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>
                Other Information
            </Form.Label>
            <br />
            <Form.Control as="textarea" rows={3}/>
        </Form.Group>

        <div className = "Submit-Button">
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </div>
    </Form>
  );



function Consultation(){
    const [currentPage, setCurrentPage] = useState(1);

    const forms = [<FormOne />, <FormTwo />, ];

    const goToPreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      // Handle next button click
      const goToNextPage = () => {
        if (currentPage < forms.length) {
          setCurrentPage(currentPage + 1);
        }
      };

    return (
        <div>
            <div className="Consultation-Div">
                <button className = "Buyer-Seller-Button" onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Buyer
                </button>
                <button className = "Buyer-Seller-Button" onClick={goToNextPage} disabled={currentPage === forms.length}>
                    Seller
                </button>
            </div>
            <div>{forms[currentPage - 1]}</div> {/* Render the current form */}

            <div>
                Page {currentPage} of {forms.length}
            </div>
        </div>
      );
};

export default Consultation;