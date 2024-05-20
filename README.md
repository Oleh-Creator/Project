<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juni Stars</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="./img/School.png">
    <script src="https://kit.fontawesome.com/6d3dedaef2.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
  />
</head>
<body>
    <div class="wrap">
<div class="RegistBox" id="RegistBox">
    <div class="RegistItem">
        <div class="RegistLine">
        <p>Реєстраційна форма</p>
        <br>
        <br>
    </div>
    <div class="RegistIt">
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="name">
</div>
    <br>
    <div class="RegistIt">
        <label for="surname">Прізвище:</label>
        <input type="text" id="surname" name="surname">
    </div>
    <br>
    <div class="RegistIt">
        <label for="name">Дата народження:</label>
        <input type="date" class="form-control" id="dob" name="dob" required>
    </div>
    <br>
    <div class="RegistIt">
        <label for="email">Email:</label>
        <input type="text">
    </div>
    <br>
    <div class="RegistIt">
        <label for="number">Номер телефону:</label>
        <input type="text">
    </div>
    
    <br>
    <div class="RegistIt">
        <label for="name">День проведення заняття:</label>
        <input type="date" class="form-control" id="dob" name="dob" required>
    </div>
    <br>
    <button class="RegistBut" id="RegistBut">Підтвердити</button>
    </div>

</div>
<div class="TestBox">
    <div class="TestBoxLeft"><p class="TestBoxLeftText">Яка у вас мета?</p>
        <p class="TestBoxLeftText2">Якісь конкретні інтереси?</p>
        <p class="TestBoxLeftText3">Коли вам буде зручно займатись?</p>
    </div>
    <div class="TestBoxRight">
        <div class="TestBoxRightItemsBox">
            <div class="TestBoxRightItem"><div class="TextBox"><i class="fa-solid fa-money-bill"></i><p>Кар'єра і бізнес</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox"><i class="fa-solid fa-pen"></i><p>Уроки для дітей</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox" style="width: 195px;"><i class="fa-solid fa-pen"></i><p>Іспити та навчання</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox" style="width: 235px;"><i class="fa-solid fa-suitcase"></i><p>Культура/подорожі/хобі</p></div></div>
            <br>
            <br>
            <button class="TestBoxButton">Підтвердити</button>
        </div>
        <div class="TestBoxRightItemsBox2">
            <div class="TestBoxRightItem"><div class="TextBox"><p>Розмовна англійська</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox"><p>Бізнес англійська</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox" style="width: 195px;"><p>Англійська інтенсив</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox" style="width: 235px;"><p>Англійська для початківців</p></div></div>
            <br>
            <br>
            <button class="TestBoxButton TestBoxButton2">Підтвердити</button>
        </div>
        <div class="TestBoxRightItemsBox3">
            <div class="TestBoxRightItem"><div class="TextBox"><p>Понеділок</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox"><p>Вівторок</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox" style="width: 195px;"><p>Середа</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox" style="width: 235px;"><p>Четвер</p></div></div>
            <br>
            <div class="TestBoxRightItem"><div class="TextBox" style="width: 235px;"><p>пятниця</p></div></div>
            <br>
            <br>
            <button class="TestBoxButton TestBoxButton3">Підтвердити</button>
        </div>
    </div>
</div>
<div class="TablCont">
    <table>
        <caption>Графік роботи</caption>
        <thead>
          <tr>
            <th>День тиждня:</th>
            <th>Роботчий час:</th>
            <th>Обідня перерва:</th>
          </tr>
        </thead>
        <tr>
          <td>Понеділок</td>
          <td>8:00 - 16:00</td>
          <td>12:00 - 13:00</td>
        </tr> 
        <tr>
          <td>Вівторок</td>
          <td>9:00 - 17:00</td>
          <td>13:00 - 14:00</td>
        </tr>
        <tr>
          <td>Середа</td>
          <td>11:00 - 19:00</td>
          <td>15:00 - 16:00</td>
        </tr> 
        <tr>
          <td>Четверг</td>
          <td>9:00 - 18:00</td>
          <td>13:30 - 14:30</td>
        </tr> 
        <tr>
          <td>П'ятниця</td>
          <td>9:00 - 13:00</td>
          <td>12:00 - 13:30</td>
        </tr> 
        </table>
</div>

        <header>
            <a href="#"  style="font-size: 25px; font-weight: 800;">Juni Stars</a>
            <div class="headerItemsBox">
                <a href="#" class="HeadIt lng" onclick="scrollToElement4()">Контакти</a>
                <a href="#" class="HeadIt" onclick="scrollToElement2()">Педагоги</a>
                <a href="#" class="HeadIt"  onclick="scrollToElement1()">Навчання</a>
                <a href="#" class="HeadIt" onclick="scrollToElement5()">Про нас</a>
            </div>
            
        </header>
        <div class="FirstBox">
            <div class="FirstBoxItems">
            <div class="LogoLine">
                <div class="LogoBox" style="font-size: 30px; font-weight: 700;"><p>Juni Stars</p></div>
            </div>
            <br>
            <div class="FirstInfBox">
                <p>Найуспішніша школа 
                    вивчення іноземної мови
                    у Львові</p>
            </div>
            <br>
            <button onclick="scrollToElement4()">Зателефонувати</button>
            <br>
            <button class="FurstBut2">Фільтр</button>
            <br>
            <button class="FurstBut3">Пройти тест</button>
            <button class="FurstBut4" style="background-color: gray; display: none;">Тест пройдено </button>
            </div>
            <div class="RightBox" id="RightBox">
                <br>
               <div class="RightBoxLog"><p>Предмет</p></div>
               <br>
               <p>Виберіть який предмет ви хочете вивчати</p>
               <br>
               <div class="RightBoxItems">
                <div class="ItemsLine">
                    <div class="RightBoxItem"><p>Англійська</p></div>
                    <div class="RightBoxItem"><p>Математика</p></div>
                </div>
                <div class="ItemsLine">
                    <div class="RightBoxItem"><p>Українська мова</p></div>
                    <div class="RightBoxItem"><p>Література</p></div>
                </div>
               </div>
            </div>
            <div class="RightBox2" >
                <br>
               <div class="RightBoxLog"><p>Ціна</p></div>
               <br>
               <p>Виберіть яка ціна вас влаштує</p>
               <br>
               <div class="RightBoxItems">
                <div class="ItemsLine">
                    <div class="RightBoxItem2"><p>до 500</p></div>
                    <div class="RightBoxItem2"><p>до 800</p></div>
                </div>
                <div class="ItemsLine">
                    <div class="RightBoxItem2"><p>до 1000</p></div>
                    <div class="RightBoxItem2"><p>до 1500</p></div>
                </div>
               </div>
            </div>
            <div class="RightBox3" >
                <br>
               <div class="RightBoxLog"><p>Країна</p></div>
               <br>
               <p>Виберіть яка ціна вас влаштує</p>
               <br>
               <div class="RightBoxItems">
                <div class="ItemsLine">
                    <div class="RightBoxItem3"><p>Україна</p></div>
                    <div class="RightBoxItem3"><p>Польща</p></div>
                </div>
                <div class="ItemsLine">
                    <div class="RightBoxItem3"><p>Англія</p></div>
                    <div class="RightBoxItem3"><p>США</p></div>
                </div>
               </div>
            </div>
            <div class="RightBox4" >
                <br>
               <div class="RightBoxLog"><p>Година</p></div>
               <br>
               <p>Виберіть коли вам зручно займатися</p>
               <br>
               <div class="RightBoxItems">
                <p>Вдень:</p>
                <br>
                <div class="ItemsLine">
                    <div class="RightBoxItem4"><p>9-12</p></div>
                    <div class="RightBoxItem4"><p>12-15</p></div>
                    <div class="RightBoxItem4"><p>15-18</p></div>
                </div>
                <br>
                <p>У вечері і вночі:</p>
                <br>
                <div class="ItemsLine">
                    <div class="RightBoxItem4"><p>18-21</p></div>
                    <div class="RightBoxItem4"><p>21-24</p></div>
                    <div class="RightBoxItem4"><p>0-3</p></div>
                </div>
                <br>
                <p>Вранці:</p>
                <br>
                <div class="ItemsLine">
                    <div class="RightBoxItem4"><p>3-6</p></div>
                    <div class="RightBoxItem4"><p>6-9</p></div>
                </div>
               </div>
            </div>
        </div>
    
        <div class="ItemsBox">
            <div class="Item " onclick="scrollToElement1()">
                <img src="./img/Item1Background.png" alt="" class="ItImg">
                <br>
                <p>Новітня методика</p>
            </div>
            <div class="Item" onclick="scrollToElement2()">
                <img src="./img/Item2Background.png" alt="" class="ItImg">
                <br>
                <p>Найкращі вчителі</p>
            </div>
            <div class="Item" onclick="scrollToElement3()">
                <img src="./img/item3Background.png" alt="" class="ItImg">
                <br>
                <p>Веселі уроки</p>
            </div>
        </div>
        <br>
        <div class="MetodikBox" id="MetodikBox">
            <p style="font-size: 20px; font-weight: 800;">Персоналізація навчання відповідно до інтересів дитини</p>
            <div class="MetodikBoxItemLine">
                <div class="MetodikBoxItem" id="MetodikBoxItem1">
                    <img src="./img/Gamepad.png" alt="">
                    <p class="MetodikBoxItemLogo">Ігри</p>
                    <br>
                    <div class="MetodikBoxItemInfBox" id="MetodikBoxItemInfBox1">
                    <p>Дитина обожнює грати в ігри? Нехай тепер це захоплення стане корисним.</p>
                </div>
                <button class="MetodikBoxItemBut">Зарезервувати урок</button>
                <button class="MetodikBoxItemBut2">Скасувати реєстрацію</button>
                </div>

                <div class="MetodikBoxItem" id="MetodikBoxItem1">
                    <img src="./img/Animals.png" alt="">
                    <p class="MetodikBoxItemLogo">Тварини</p>
                    <br>
                    <div class="MetodikBoxItemInfBox" id="MetodikBoxItemInfBox1">
                    <p>Дитина любить дізнаватися цікавинки про тварин? Тоді разом з нами вона вирушить вивчати тварин англійською.</p>
                </div>
                <button class="MetodikBoxItemBut">Зарезервувати урок</button>
                <button class="MetodikBoxItemBut2">Скасувати реєстрацію</button>
                </div>

                <div class="MetodikBoxItem" id="MetodikBoxItem1">
                    <img src="./img/Lego.png" alt="">
                    <p class="MetodikBoxItemLogo">Конструктори</p>
                    <br>
                    <div class="MetodikBoxItemInfBox" id="MetodikBoxItemInfBox1">
                    <p>У вашій квартирі всюди деталі конструктора? Ваша дитина вивчатиме англійську з LEGO.</p>
                </div>
                <button class="MetodikBoxItemBut">Зарезервувати урок</button>
                <button class="MetodikBoxItemBut2">Скасувати реєстрацію</button>
                </div>
            </div>
            
            <div class="MetodikBoxItemLine">
                <div class="MetodikBoxItem" id="MetodikBoxItem1">
                    <img src="./img/Paint.png" alt="">
                    <p class="MetodikBoxItemLogo">Художник</p>
                    <br>
                    <div class="MetodikBoxItemInfBox" id="MetodikBoxItemInfBox1">
                    <p>Ваша дитина занурена у малювання ? Давайте спрямуємо цю енергію в корисне! Разом з учителем, вона буде вивчати світ через малювання та англійську мову.</p>
                </div>
                <button class="MetodikBoxItemBut">Зарезервувати урок</button>
                <button class="MetodikBoxItemBut2">Скасувати реєстрацію</button>
                </div>

                <div class="MetodikBoxItem" id="MetodikBoxItem1">
                    <img src="./img/Car.png" alt="">
                    <p class="MetodikBoxItemLogo">Машинки</p>
                    <br>
                    <div class="MetodikBoxItemInfBox" id="MetodikBoxItemInfBox1">
                    <p>Ваша дитина занурена у світ машинок, і місця на полицях вже немає? Давайте використаємо цю енергію продуктивно! </p>
                </div>
                <button class="MetodikBoxItemBut">Зарезервувати урок</button>
                <button class="MetodikBoxItemBut2">Скасувати реєстрацію</button>
                </div>

                <div class="MetodikBoxItem" id="MetodikBoxItem1">
                    <img src="./img/Music.png" alt="">
                    <p class="MetodikBoxItemLogo">Музика</p>
                    <br>
                    <div class="MetodikBoxItemInfBox" id="MetodikBoxItemInfBox1">
                    <p>Ваша дитина любить слухати музику? з нами вона зможе слухати музику та вивчати англійську з її допомогою.</p>
                </div>
                <button class="MetodikBoxItemBut">Зарезервувати урок</button>
                <button class="MetodikBoxItemBut2">Скасувати реєстрацію</button>
                </div>
            </div>
        </div>
<br>
        <div class="PedagpgsBox" id="PedagpgsBox">
<p style="font-size: 20px; font-weight: 800;">Найкращі педагоги!</p>
<br>
<div class="PedagpgsItemsBox">
<div class="PedagogsItem">
    <img src="./img/Pedagog1.png" alt="">
    <div class="PedagogInfBox">
    <p>Мар'яна Володимирівна</p>
    <br>
    <p>Досвід: 8 років</p>
    <p>Рівень C2</p>
    <br>
    <button class="PedagogsButton">Розклад</button>
</div>
</div>
<div class="PedagogsItem">
    <img src="./img/Pedagog2.png" alt="">
    <div class="PedagogInfBox">
    <p>Уляна Миколаївна</p>
    <br>
    <p>Досвід: 6 років</p>
    <p>Рівень C1</p>
    <br>
    <button class="PedagogsButton">Розклад</button>
</div>
</div>
<div class="PedagogsItem">
    <img src="./img/Pedagog3.png" alt="">
    <div class="PedagogInfBox">
    <p>Мирослава Степанівна</p>
    <br>
    <p>Досвід: 5 років</p>
    <p>Рівень C1</p>
    <br>
    <button class="PedagogsButton">Розклад</button>
</div>
</div>
<div class="PedagogsItem">
    <img src="./img/Pedagog4.png" alt="">
    <div class="PedagogInfBox">
    <p>Світлана Богданівна</p>
    <br>
    <p>Досвід: 4 роки</p>
    <p>Рівень B2</p>
    <br>
    <button class="PedagogsButton">Розклад</button>
</div>
</div>
</div>
<br>
<div class="PedagpgsItemsBox">
    <div class="PedagogsItem">
        <img src="./img/Pedagog5.png" alt="">
        <div class="PedagogInfBox">
        <p>Іван Володимирович</p>
        <br>
        <p>Досвід: 9 років</p>
        <p>Рівень C1</p>
        <br>
        <button class="PedagogsButton">Розклад</button>
    </div>
    </div>
    <div class="PedagogsItem">
        <img src="./img/Pedagog6.png" alt="">
        <div class="PedagogInfBox">
        <p>Оксана Михайлівна</p>
        <br>
        <p>Досвід: 1 років</p>
        <p>Рівень B2</p>
        <br>
        <button class="PedagogsButton">Розклад</button>
    </div>
    </div>
    <div class="PedagogsItem">
        <img src="./img/Pedagog7.png" alt="">
        <div class="PedagogInfBox">
        <p>Уліяна Максимівна</p>
        <br>
        <p>Досвід: 8 років</p>
        <p>Рівень C2</p>
        <br>
        <button class="PedagogsButton">Розклад</button>
    </div>
    </div>
    <div class="PedagogsItem">
        <img src="./img/Pedagog8.png" alt="">
        <div class="PedagogInfBox">
        <p>Мар'яна Романівга</p>
        <br>
        <p>Досвід: 5 років</p>
        <p>Рівень C1</p>
        <br>
        <button class="PedagogsButton">Розклад</button>
    </div>
    </div>
    </div>
        </div>

        <div class="AboutBox" id="AboutBox">
            <p style="font-size: 20px; font-weight: 800;">Чим ми займаємося ?</p>
            <div class="AboutBoxItemsBox">
                <div class="AboutBoxInf">
                    <li>Загальний курс англійської мови: 
                        Від початкового до просунутого рівня, допомагаємо оволодіти всіма  аспектами мови: граматика, словниковий запас, розмовна мова та аудіювання.</li>
                        <br>
                        <li>Підготовка до іспитів: 
                            Ми готуємо студентів до міжнародних іспитів, таких як IELTS, TOEFL, Cambridge English. Наші курси спеціально розроблені для того, щоб ви отримали найвищі бали.</li>
                            <br>
                            <li>Бізнес англійська: 
                                Спеціалізовані курси для тих, хто хоче покращити своїнавички ділового спілкування, включаючи ведення переговорів, ділове листування та презентації англійською.</li>
                                <br>
                                <li>Дитячі курси: 
                                    Розроблені для дітей різного віку, щоб навчання було цікавим та захоплюючим, з урахуванням особливостей дитячої психології та розвитку.</li>
                </div>
                <img src="./img/About.png" alt="">
            </div>
        </div>
        <div class="VideoBox" id="VideoBox">
            <div class="VideoBoxLogoBox"><p style="font-size: 20px; font-weight: 800;">Всі вчителі навчають. Кращі викладачі надихають</p></div>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/OtWciKwlaG8?si=yeXZxWaO8z9mBpVP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                  <div class="swiper-slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/henIVlCPVIY?si=dhUp5akUR0_qQ8kJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                  <div class="swiper-slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/juKd26qkNAw?si=Umj2nFHlexcr_8xd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                  <div class="swiper-slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/topBLaz4zgk?si=aiQDeIjYTS0289ru" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                  <div class="swiper-slide"><iframe width="560" height="315" src="https://www.youtube.com/embed/_N7rHxjbHgM?si=fzY1NVHq-TM8GFwa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                  <div class="swiper-slide"><img src="./img/video.png" alt=""></div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
        </div>
<div class="MotBox">
    <div class="MotBoxItems">
    <p style="font-size: 40px; font-weight: 800;">Навчання з любов'ю в Україні !</p>
    <br>
    <img src="./img/Ukr.png" alt="">
</div>
</div>
<br>
<footer id="footer">
    <div class="ContactsBox">
        <p style="font-size: 20px; font-weight: 800;">Наші контакти:</p>
        <br>
        <div class="social">
        <a href="https://www.instagram.com/junistars.ua?igsh=MXJxd2hwd3Q3cWo1Ng=="><i class="fa-brands fa-instagram inst" style="cursor: pointer; font-size: 30px;"></i></a>
        <a href="https://web.telegram.org/k/#@junistars1"><i class="fa-brands fa-telegram tel"  style="cursor: pointer; font-size: 30px;"></i></a>
    </div>
        <br>
        <p class="contact">Email: Lovecandlesua@gmail.com</p>
        <br>
        <p>Номер телефону: +380968609158</p>
    </div>
    <div class="AdresBox">
        <p style="font-size: 20px; font-weight: 800;">Адреси:</p>
        <br>
        <p>Львів:</p>
        <p> Патона 15</p>
        <p>Хвильового 31</p>
        <br>
        <p>Івано-Франківськ:</p>
        <p>В’ячеслава Чорновола 81</p>
    </div>
</footer>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script src="main.js"></script>
</body>
</html>
