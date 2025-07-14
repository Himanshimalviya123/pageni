import i1 from "../images/i1.webp"
import i2 from "../images/i2.webp"
const Footer=()=>{
    return(
        <>
        
        <p>TITANIC WATCHES</p>
        <div id="foot">
        <div id="footer">
            <div><h3>COLLECTION</h3>
            <p>Titan Automatics<br/>Police Batman<br/>Stellar<br/>Raga Power Pearls<br/>Nebula Jewels<br/>Grandmaster<br/>Maritime</p><br/>
            </div>
            <div><h3>CUSTOMER SERVICE</h3>
            <p>Payment Option<br/>Track order<br/>Encircle program<br/>Find Titan World Stores</p></div>
            <div><h3>CONTACT US</h3>
            <p>1800-266-0123<br/>customercare@titan.co.in<br/>Help & Contact<br/>FAQs</p></div>
            <div><h3>ABOUT TITAN</h3>
            <p>Brands Protection<br/>Coporate<br/>Careeses<br/>Blog</p></div>
        </div>
        <div><h3>Download Titan World App</h3>
        <img src={i1}/>
        <img src={i2}/>
        <h5>Follow Us With</h5></div>
        </div>
        </>
    )
}
export default Footer;