const Navbar_top = (props) => {
    return(
      <div>
        <nav className="navbar nav_bar_top" style={navStyle}>
            <a className=" position-relative d-inline-block" style={vertical_align_nav_elements_trade_seeder}><h4>TravelSeeder</h4></a>
            <div>
              <a href="#" className=" d-inline-block" style={vertical_align_nav_elements} ><img src='./assets/phone.png' style={image_size}></img><b>1800-123-5555</b></a>
              <a href="#" className=" d-inline-block" style={vertical_align_nav_elements}><img src='./assets/travel_agent.png' style={image_size}></img><b>Travel Agent?Join Us</b></a>
              <a href="#" className=" d-inline-block" style={vertical_align_nav_elements}><img src='./assets/blog.png' style={{width:'35%',marginRight:'1%'}}></img><b>Blog</b></a>
              <a href="#" className=" d-inline-block" style={vertical_align_nav_elements}><b>Login</b></a>
            </div>
        </nav>

        <nav className="navbar navbar_edited">

            <div className="nav_bar_list">
                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle drop_btn_edit dropdown_change_in_color" data-toggle="dropdown" style={{border: '1px #49b795 solid',borderRadius: '14.25px'}}>Holiday Packages</button>
                    <div className="dropdown-menu dropdown_menu_edited_holidays">
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle drop_btn_edit" data-toggle="dropdown">Hotels</button>
                    <div className="dropdown-menu dropdown_menu_edited" >
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle drop_btn_edit" data-toggle="dropdown">Flight</button>
                    <div className="dropdown-menu dropdown_menu_edited">
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle drop_btn_edit" data-toggle="dropdown">Activities</button>
                    <div className="dropdown-menu dropdown_menu_edited">
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle drop_btn_edit" data-toggle="dropdown">Transport</button>
                    <div className="dropdown-menu dropdown_menu_edited">
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle drop_btn_edit" data-toggle="dropdown">Visa</button>
                    <div className="dropdown-menu dropdown_menu_edited">
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

                <div className="dropdown destination_guides">
                    <button type="button" className="btn dropdown-toggle drop_btn_edit" data-toggle="dropdown">Destination guides</button>
                    <div className="dropdown-menu dropdown_menu_edited">
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
}



const navStyle ={
  background: '#F2F2F2',
}

const image_size = {
  width:'15%',
  marginRight:'1%'
}

const vertical_align_nav_elements_trade_seeder = {
  marginLeft: '2%'
}

const vertical_align_nav_elements = {
    left: '45%',
    fontSize:'12px',
    color: 'black',
}
