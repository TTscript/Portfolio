import classes from './NameAndContacts.module.scss';

export const NameAndContacts = () => {
  return (
      <section className={classes.nameAndContacts}>
          <h2 className="visually-hidden">Name and contacts</h2>
          <h3>Timur Tokumov</h3>
          <div className="profession-block">
              <div className={classes.rhombuses}>
                  <div className={classes.rhombus}></div>
                  <div className={classes.rhombus}></div>
                  <div className={classes.rhombus}></div>
                  <div className={classes.rhombus}></div>
              </div>
              <p data-profession="profession">Front-end Developer</p>
          </div>
          <p id="phone" data-phone="phone"><a href="tel:+77761133222">+7-776-113-32-22</a></p>
          <p data-address="address">Nur-Sultan, <br /> Kazakhstan 010000</p>
      </section>
  )
}
