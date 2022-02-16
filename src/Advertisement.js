import React from 'react'
import "./Advertisement.css"

function Advertisement() {
  return (
    <div className="adver">
      <h5>Được tài trợ</h5>
      <iframe
        src="https://shopee.vn/-L%C6%B0u-ELCOOCP--5----COOC50--500K--Smart-TV-Full-HD-Coocaa-40Inch-Wifi---40S7G---Android-11--Vi%E1%BB%81n-m%E1%BB%8Fng--Mi%E1%BB%85n-ph%C3%AD-l%E1%BA%AFp-%C4%91%E1%BA%B7t-i.131201661.12317262877?utm_source=facebook-ca&utm_medium=seller&utm_campaign=s131201661_ss_vn_fbca_mini1-feb-22&utm_content=minispike1-Salemass-Dynamic&fbclid=IwAR2UY0UxEFw1VvAu5WMYScK850PzPlbAQB56H7LvbJcLrCN9uAbxbVRbJRY"
        width="340"
        height="110"
        style={{border: 'none', overflow: 'hidden'}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}

export default Advertisement