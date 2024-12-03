import './Notification.css'

function Notification({content1,content2,className}) {
  return (
    <div className={`notification ${className}`}>
      <div className="heading-logo">
        <img className='logo1' src="logo1.png" alt="logo" />
        <span className='now'>now</span>
      </div>
      <div className='notification-details'>
      <p className='noti-head'>{content1}</p>
      <p className='noti-content'>{content2}</p>
      </div>
    </div>
  )
}

export default Notification
