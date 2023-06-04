import React from 'react'

import icon from "../img/about/quality 1.svg"
import icon2 from "../img/about/about2.svg"
import icon3 from "../img/about/about3.svg"
import team from "../img/about/team.png"

function About() {
  return (
    <section className="about">
    <div className="container">
        <div className="about">
            <div className="about-advantage">
                <h2 className="about-advantage__title">Что для нас важно</h2>
                <div className="about-advantage__desc">
                    <div className="desc-text">
                        <img className="desc-text__pic" src={icon} alt="#!"></img>
                        <h3 className="desc-text__title">Качество</h3>
                        <p className="desc-text__subtitle">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества
                        </p>
                    </div>
                    <div className="desc-text">
                        <img className="desc-text__pic" src={icon2} alt="#!"></img>
                        <h3 className="desc-text__title">Скорость</h3>
                        <p className="desc-text__subtitle">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах
                        </p>
                    </div>
                    <div className="desc-text">
                        <img className="desc-text__pic" src={icon3} alt="#!"></img>
                        <h3 className="desc-text__title">Ответственность</h3>
                        <p className="desc-text__subtitle">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                    </div>
                </div>
                <h2 className="about-advantage__title">Команда мечты Womazing</h2>
                <div className="about__team">
                    <div className="about__team-image">
                        <img src={team} alt='team'></img>
                    </div>
                    <div className="about__team-text">
                        <h3 className="text__title">Для каждой</h3>
                        <p className="text__subtitle">Каждая девушка идеальна. Однако мы схожи в миллионе мелочей.</p>
                        <p className="text__subtitle">Womazing ищет эти мелочи и создает прекраные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                        <a className="text__link" href="#!">Подробнее о бренде</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About