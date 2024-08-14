import React from 'react'
import './Map.css'
function Map() {
  return (
    <div>
      <address id="address">
        KIET GROUP  OF INSTITUTIONS,MURADNAGAR
      </address>
      <div className='responsive'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8932140579336!2d77.49584577520697!3d28.752605078618345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1723654070807!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Map
