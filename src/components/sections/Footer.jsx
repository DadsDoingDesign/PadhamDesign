import { footerContent, navItems, contactContent } from '@/data/siteContent';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__top">
        <div className="footer__brand">
          <p className="footer__wordmark">Padham Design</p>
          <p className="footer__tagline">Custom Interiors</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer__nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="footer__nav-link">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${contactContent.email}`} className="footer__contact-link">
            {contactContent.email}
          </a>
          <a href={`tel:${contactContent.phone}`} className="footer__contact-link">
            {contactContent.phone}
          </a>
          <p className="footer__address">
            {contactContent.address.street}<br />
            {contactContent.address.city}, {contactContent.address.state} {contactContent.address.zip}
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()}{footerContent.copyright}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
