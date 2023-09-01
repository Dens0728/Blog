import styles from 'styles/contact.module.css'
import Social from 'components/social'

const Contact = () => (
  <div className={styles.stack}>
    <h3 className={styles.heading}>Contact</h3>
    <Social iconsSize='30px' />
    <address>cube@web.mail.address</address>
  </div>
)

export default Contact
