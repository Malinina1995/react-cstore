import React, { Component } from "react";

export function FullInfo({show}) {
  let classes = 'welcomeAccordion-fullInfo';
  
  classes += show ? ' show' : '';

  return (
    <div className={classes}>
      <div className="welcomeAccordion-fullInfo-item">
        <div className="icon welcomeAccordion-fullInfo-item-first" />
        <div className="text">
          <span>Экспертная поддержка</span>
          <p>
            Наши квалифицированные специалисты ответят на все вопросы, связанные
            с продукцией Apple, подробно и доступно.
          </p>
        </div>
      </div>
      <div className="welcomeAccordion-fullInfo-item">
        <div className="icon welcomeAccordion-fullInfo-item-second" />
        <div className="text">
          <span>Премиальный сервис</span>
          <p>
            Мы являемся авторизованным торговым представителем Apple, работающим
            на уровне премиум-класса.
          </p>
        </div>
      </div>
      <div className="welcomeAccordion-fullInfo-item">
        <div className="icon welcomeAccordion-fullInfo-item-third" />
        <div className="text">
          <span>Доступная информация</span>
          <p>
            Самая актуальная и полезная информация о товарах Apple доступна на
            нашем сайте в любое время.
          </p>
        </div>
      </div>
      <div className="welcomeAccordion-fullInfo-item">
        <div className="icon welcomeAccordion-fullInfo-item-fourth" />
        <div className="text">
          <span>Широкая география</span>
          <p>
            Курьерская доставка охватывает более 80 городов России. Также мы
            ждем вас в 30 магазинах 24 городов России.
          </p>
        </div>
      </div>
    </div>
  );
}
