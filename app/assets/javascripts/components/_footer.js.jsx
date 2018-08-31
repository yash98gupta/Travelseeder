const Footer = (props) => {
    return(
      <div className="footer">
        <div className="footer_div">
          <ul className="m0 p0">
            <li className="footer_li"><a href="#" className="footer_li_a">About Us</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Team</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">We are hiring</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Testimonials</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Blog</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Travelogues</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Terms ans Conditions</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Privacy Policy</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Cancellation</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Travel Agent? Join Us</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">FAQ</a></li>
            <li className="footer_li"><a href="#" className="footer_li_a">Contact Us</a></li>
          </ul>
        </div>

        <div className="contact_details_div">
          <a className="contact_details_footer"><img src="./assets/call_svg.png" className="icons_call"></img>1800 123 5555</a>
          <a className="contact_details_footer"><img src="./assets/mail_svg.svg" className="icons_mail"></img>customercare@travelseeder.com</a>
        </div>

        <div className="footer_corporate">
          <p className="footer_address" style={{fontSize:'15px',marginBottom:'5px'}}><b>Corporate Office :</b></p>
          <div>
            <p className="footer_address">Travel Seeder Private Limited</p>
            <p className="footer_address">Address: Plot No -29,3rd & 4th Floor,</p>
            <p className="footer_address">Dynamic House,Maruti Industrial Complex, Sector 18,</p>
            <p className="footer_address">Gurugram-122015,Haryana</p>
            <p className="footer_address">Landline: 1800 123 5555</p>
          </div>
        </div>

        <div className="footer_connect_with_us_div">
          <p className="footer_connect_with_us_p"><h4>Connect with us on:</h4></p>
          <div style={{textAlign:'center'}}>
            <a href="#" className="connect_with_us_a"><i class="fab fa-facebook-f"></i></a>
            <a href="#" className="connect_with_us_a"><i class="fab fa-twitter-square"></i></a>
            <a href="#" className="connect_with_us_a"><i class="fab fa-pinterest"></i></a>
            <a href="#" className="connect_with_us_a"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" className="connect_with_us_a"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <div>
          <div className="footer_icons_last">
            <a href="#" className="footer_font_awesome"><i className="fab fa-cc-visa" style={{fontSize:'50px',color:'white'}}></i></a>
            <a href="#" className="footer_font_awesome"><i className="fab fa-cc-mastercard" style={{fontSize:'50px',color:'white'}}></i></a>
            <a href="#" className="footer_font_awesome"><i className="fab fa-paypal" style={{fontSize:'50px',color:'white'}}></i></a>
          </div>
        </div>

        <div className="footer_made_with_love_div">
          <p className="footer_copyright">Made with <i class="fas fa-heart" style={{color:'red'}}></i> in india</p>
        </div>

        <div className="footer_copyright_div">
          <p className="footer_copyright">All rights reserved <i class="far fa-copyright"></i> 2018</p>
        </div>
      </div>
    )
}
