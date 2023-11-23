import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap"
import './navigation.css'
function Navigation(){
return(
        <div>
        <Navbar expand='lg' className="nav">
        
                <Container fluid className="d-flex  w-100" >
                     <Navbar.Brand   href="/">
                        <h3 className="logo"><i class="bi bi-chat-square-heart-fill mx-2  "></i><span className="t-span">T</span>he <span className="s-span">S</span>tore</h3>
                     </Navbar.Brand>
                     <Navbar.Toggle area-controls="basic-navbar-nav"/>
                     <Navbar.Collapse id="basic-navbar-nav" className=" align-items-center justify-content-center gap-5 w-100">
                       <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Carts</Nav.Link>
                        <Nav.Link href="/">Brands</Nav.Link>
                        <Nav.Link href="/">Popular</Nav.Link>

                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/">Mobiles</NavDropdown.Item>
                          <NavDropdown.Item href="/">Laptops</NavDropdown.Item>
                          <NavDropdown.Item href="/">Clothing</NavDropdown.Item>
                          <NavDropdown.Item href="/">Electronics</NavDropdown.Item>
                        </NavDropdown>
                       </Nav>
                       
                      <div className="last-nav"> <input type="text" className="form-control " className='search' placeholder="search something" />
                      <button className="main-btn rounded-3 "><i class="bi bi-person-hearts mx-2 "></i>Create Profile</button>
                      </div>
                     </Navbar.Collapse>   
                </Container>
        </Navbar>
        </div>
)
}
export default Navigation;