import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div className="footer">
        <table className="footerTable">
          <thead>
            <tr>
              <th>AJ Jewellery</th>
              <th>Products</th>
              <th>Useful Links</th>
              <th>Contacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Jewelry is a symbol</td>
              <td>Jhumkas</td>
              <td>Profie Page</td>
              <td>
                <i className="fa-solid fa-house" />
                <span className="footerResponsive">
                  {" "}
                  &nbsp;Your Address buddy
                </span>
              </td>
            </tr>
            <tr>
              <td>of love, a timeless</td>
              <td>Rings</td>
              <td>Cart Page</td>
              <td>
                <i className="fa-solid fa-envelope" />
                <span className="footerResponsive">
                  &nbsp;gaurangrastogi209
                </span>
              </td>
            </tr>
            <tr>
              <td>gift that can be passed</td>
              <td>Chains</td>
              <td>Product Page</td>
              <td>
                <i className="fa-solid fa-phone" />
                <span className="footerResponsive"> &nbsp;+91 6393056856</span>
              </td>
            </tr>
            <tr>
              <td>down through generations."</td>
              <td style={{ textDecoration: "underline" }}>See More</td>
              <td>HomePage</td>
              <td>
                <i className="fa-brands fa-github" />
                <span className="footerResponsive">&nbsp;gaurangrastogi</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Footer