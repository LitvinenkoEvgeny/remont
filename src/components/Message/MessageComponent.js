import React from 'react';
import './message.sass';

const MessageComponent = (props) => {
  return (
    <div className="MessageComponent message">
      <h2 className="message__header">
        <span className="small">статус: </span>
        <span className="big">Успешно отправлено</span>
        <div className="border bottom">
          <div></div>
        </div>
      </h2>

      <div className="text">
        <div className="message__text">
          <p>Мы получили ваш запрос и в ближайшее время свяжемся с вами</p>
        </div>

        {/* <GoToButton goTo='firstForm' changeView={changeView} /> */}

      </div>


    </div>
    ) }

export default MessageComponent;
