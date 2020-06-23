import React from 'react'

const Footer: React.FC = () => (
  <footer>
    <div className="footer--links">
      <h3>Produkte</h3>
      <ul className="footer--link-list">
        <li><a target="_blank" href="https://crewmeister.com/de/zeiterfassung/mobil/">Stempeluhr App</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/zeiterfassung/zeiterfassungsterminal/">Terminal</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/zeiterfassung/">Zeiterfassung</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/schichtplaner/">Schichtplaner</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/urlaubsplaner/">Urlaubsplaner</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/excel-zeiterfassung/">Excel Zeiterfassung</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/preise/?_crewSize=5&amp;_paymentPeriod=yearly&amp;_productIds[0]=1">Preise</a></li>
      </ul>
    </div>

    <div className="footer--links">
      <h3>Informationen</h3>
      <ul className="footer--link-list">
        <li><a target="_blank"  href="https://crewmeister.com/de/magazin/">Magazin</a></li>
        <li><a target="_blank"  href="https://crewmeister.com/de/kontakt/">Kontakt</a></li>
        <li><a target="_blank"  href="https://crewmeister.com/de/karriere/">Karriere</a></li>
        <li><a target="_blank"  href="https://crewmeister.com/de/agb/">AGB</a></li>
        <li><a target="_blank"  href="https://crewmeister.com/de/datenschutz/">Datenschutz</a></li>
        <li><a target="_blank"  href="https://crewmeister.com/de/impressum/">Impressum</a></li>
        <li><a target="_blank" href="https://crewmeister.com/en/">English website</a></li>
        <li><a href="https://crewmeister.com/blog" target="_blank">Blog</a></li>
        <li><a href="https://crewmeister.uservoice.com/knowledgebase" target="_blank">Hilfe und Wissensdatenbank</a></li>
      </ul>
    </div>

    <div className="footer--links">
      <h3>Kundenmeinungen/ Branchen</h3>
      <ul className="footer--link-list">
        <li><a target="_blank" href="https://crewmeister.com/de/branchen/gebaeudereinigung/">Zeiterfassung Gebäudereinigung</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/handwerk/">Zeiterfassung Handwerk</a></li>
        <li><a target="_blank" href="https://crewmeister.com/de/branchen/vereine/">Zeiterfassung Vereine</a></li>
      </ul>

      <h3>Soziale Medien</h3>
      <ul className="footer--link-list">
        <li><a href="//www.facebook.com/crewmeister" target="_blank"><span className="icon-facebook-square"></span> Facebook</a></li>
        <li><a href="//twitter.com/crewmeister_com" target="_blank"><span className="icon-twitter-square"></span> Twitter</a></li>
        <li><a href="//www.linkedin.com/company/crewmeister" target="_blank"><span className="icon-linkedin-square"></span> LinkedIn</a></li>
        <li><a href="//www.xing.com/companies/crewmeister" target="_blank"><span className="icon-xing-square"></span> Xing</a></li>
      </ul>
    </div>

    <div className="footer--links">
      <ul className="footer--link-list">
        <img alt="made with love in Germany" src="https://d33wubrfki0l68.cloudfront.net/eeee739497abc1932e3d90eec18a6757013b31e1/26723/images/de/testimonials/mwl1.png"/>
      </ul>
    </div>
  </footer>
)

export default Footer
