import React from 'react';

import footer_logo from './img/footer_logo.png';

import icon_facebook from './img/icon_facebook.png';
import icon_tweetter from './img/icon_tweetter.png';
import icon_youtube from './img/icon_youtube.png';
import icon_instagram from './img/icon_instagram.png';


export const AskodsFooter = () => {
    return(
        <>
        <div className="footer-wrapper askods-footer">
        <div className="footer-block footer-logo-block">
            <div className="footer-logo footer-block-central">
                <img src={footer_logo} className="footer-logo" alt="logo" />
            </div>
            <div className="social-info footer-block-central">
                <ul>
                    <li>
                      <a href="https://www.facebook.com/askods/?ref=aymt_homepage_panel" target="_blank" rel="noopener noreferrer">
                        <img src={icon_facebook} alt="askods-social" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/ASKO_DS" target="_blank" rel="noopener noreferrer">
                          <img src={icon_tweetter} alt="askods-social"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCMSyunAkGI8GBNFJto82pMA" target="_blank" rel="noopener noreferrer">
                          <img src={icon_youtube} alt="askods-social" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/sk_askods/" target="_blank" rel="noopener noreferrer">
                          <img src={icon_instagram} alt="askods-social" />
                      </a>
                    </li>
                </ul>
                      </div>
              </div>
        <div className="footer-block footer-info-block">
            <p>Публічна інформація</p>
            <ul>
              <li><a href="https://www.nfp.gov.ua/" target="_blank" rel="noopener noreferrer"> Нацкомфінпослуг</a></li>
              <li><a href="https://askods.com/doc/upload/osago_offer.pdf" target="_blank" rel="noopener noreferrer"> Оферти</a></li>
              <li><a href="https://askods.com/doc/upload/privacy_policy.pdf" target="_blank" rel="noopener noreferrer"> Конфіденційність</a></li>
            </ul>
        </div>
        <div className="footer-block footer-info-block" >
            <p>Страхові послуги</p>
                    <ul>
                        <li><a href="https://askods.com/ua/lichnoe-strahovanie" target="_blank" rel="noopener noreferrer">Особисте страхування</a></li>
                        <li><a href="https://askods.com/ua/imuschestvo" target="_blank" rel="noopener noreferrer">Майно</a></li>
                        <li><a href="https://askods.com/ua/osago" target="_blank" rel="noopener noreferrer">Автоцивілка</a></li>
                       </ul>
        </div>
       
        <div className="footer-block footer-info-block">
          <p>Калькулятор онлайн</p>
                <ul>
                  <li>
                    <a href="https://askods.com/ua/kalkulyator-online/avtopaket" target="_blank" rel="noopener noreferrer">Автопакет</a>
                  </li>
                  <li>
                    <a href="https://askods.com/ua/kalkulyator-online/kasko" target="_blank" rel="noopener noreferrer">Калькулятор КАСКО</a>
                  </li>
                  <li>
                    <a href="https://askods.com/ua/kalkulyator-online/kalkulyator-osago" target="_blank" rel="noopener noreferrer">Калькулятор Автоцивілка</a>
                  </li>
                  <li>
                    <a href="https://askods.com/ua/kalkulyator-online/kalkulyator-zhile-ekonom" target="_blank" rel="noopener noreferrer">Калькулятор Житло Економ</a>
                  </li>
                  <li>
                    <a href="https://askods.com/ua/kalkulyator-online/kalkulyator-zhile-ekonom-plus" target="_blank" rel="noopener noreferrer">Калькулятор Житло Економ Плюс</a>
                  </li>
                </ul>
        </div>
       
        <div className="footer-block footer-contacts">
        <div className="askods-item">
							<h1>0-800-50-15-60</h1>
							<p>безкоштовна багатоканальна телефонна лінія</p>
						</div>
						<div className="askods-item">
							<h1>050-450-15-60</h1>
							<p>вартість дзвінків відповідно до тарифів Вашого оператора</p>
						</div>
              </div>
          </div>
            
      <div className="footer-copyright">
      <span className="copyright">&copy; 2019 
        <a href={`https:\\askods.com`} target="_blank" rel="noopener noreferrer">
          
          Страхова компанія АСКО ДС
        </a></span>
      </div>
      </>
    )
}