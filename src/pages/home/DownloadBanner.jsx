import './DownloadBanner.css'

const DownloadBanner = () => {
  return (
    <div className='download-banner'>
      <div className="laughing-div">
        <img src="laughing.png" alt="laughing" />
      </div>
      <div className="download-banner-right">
        <p className='logo-para'>
            <img src="logo1.png" alt="logo1" />
            ing is more
        </p>
        <p style={{"fontSize":"34px","fontWeight":"500","backgroundColor":"#03081F","color":"white","paddingLeft":"250px","paddingRight":"40px","paddingTop":"10px","paddingBottom":"10px","borderRadius":"35px","marginTop":"-50px","marginLeft":"-50px"}}>
        <span style={{"color":"#FC8A06","textDecoration":"underline"}}>Personalised</span> & Instant
        </p>
        <p style={{"fontWeight":"400","fontSize":"16px"}}>Download the Order.uk app for faster ordering</p>
        <img className='grp' src="group.png" alt="group" />
      </div>
    </div>
  )
}

export default DownloadBanner
