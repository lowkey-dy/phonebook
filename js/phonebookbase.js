const phoneDataBase = [
    { id:'10057101', surname:'Абдрахманов', name:'Нур Далхаевич', phone:'+7(923)201-42-62', light:'369', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10015216', surname:'Абдуллаев', name:'Угур Айдын оглы', phone:'+7(913)496-00-36', light:'1420', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10065259', surname:'Абдурахманов', name:'Осман Ифрамиевич', phone:'+7(988)309-85-68', light:'1323', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10047837', surname:'Абдурашидов', name:'Ильяс Магомедович', phone:'+7(905)090-08-87', light:'467', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10007835', surname:'Адаменко', name:'Константин Сергеевич', phone:'+7(913)508-03-88', light:'2012', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10256564', surname:'Акавов', name:'Ильяс Яндарханович', phone:'+7(958)222-11-00', light:'789', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10005806', surname:'Алшынбаев', name:'Жомарт Батырханович', phone:'+7(913)162-52-79', light:'1535', photo:'img/zhom.jpg', prof:'Бурильщик шпуров (Бригадир)'},  
    { id:'10065426', surname:'Амангельдиев', name:'Арсланби Муратбекович', phone:'+7(923)206-88-50', light:'497', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10064473', surname:'Андреев', name:'Николай Юрьевич', phone:'+7(913)491-87-54', light:'10', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10024844', surname:'Анисимов', name:'Иван Евгеньевич', phone:'+7(902)944-45-67', light:'1293', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10005668', surname:'Аскеров', name:'Алибала Аскер оглы', phone:'+7(923)343-11-90', light:'1806', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10015611', surname:'Ахметов', name:'Фидан Фаилович', phone:'+7(913)497-17-02', light:'2015', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10040694', surname:'Байназаров', name:'Наиль Фатихович', phone:'+7(913)163-66-95', light:'1058', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10024477', surname:'Баранов', name:'Виталий Федорович', phone:'+7(906)902-60-60', light:'441', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10007279', surname:'Башкирцев', name:'Максим Викторович', phone:'+7(913)163-34-40', light:'561', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10058153', surname:'Бетту', name:'Леонид Андреевич', phone:'+7(983)505-31-78', light:'2913', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10047621', surname:'Бикмурзин', name:'Вячеслав Владимирович', phone:'+7(913)501-45-88', light:'1064', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10259422', surname:'Бимирзаев', name:'Дастан Абдуллаевич', phone:'+7(906)900-77-49', light:'2280', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10252493', surname:'Бокатов', name:'Владимир Алексеевич', phone:'+7(913)500-23-97', light:'1348', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10263533', surname:'Бородин', name:'Виктор Андреевич', phone:'+7(983)256-44-79', light:'1243', photo:'img/no-avatar2.png', prof:'Дробильщик'},                                        
    { id:'10065807', surname:'Бучнев', name:'Сергей Валерьевич', phone:'+7(905)979-34-02', light:'991', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10024060', surname:'Быстрыкин', name:'Антон Михайлович', phone:'+7(913)493-84-68', light:'1700', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10025385', surname:'Ванжа', name:'Алексей Юрьевич', phone:'+7(913)166-19-61', light:'815', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10021266', surname:'Василенко', name:'Андрей Васильевич', phone:'+7(913)505-95-09', light:'384', photo:'img/vasil.jpg', prof:'Бурильщик шпуров'},
    { id:'10012277', surname:'Вдовиченко', name:'Александр Сергеевич', phone:'+7(913)167-78-40', light:'520', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10043962', surname:'Венидиктов', name:'Игорь Николаевич', phone:'+7(960)541-61-56', light:'201', photo:'img/golum.jpg', prof:'Сменный механик'},                                        
    { id:'10254243', surname:'Волченко', name:'Никита Андреевич', phone:'+7(913)523-34-64', light:'431', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10253298', surname:'Воронин', name:'Николай Владимирович', phone:'+7(983)455-17-98', light:'806', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10031424', surname:'Вшивков', name:'Иван Сергеевич', phone:'+7(987)628-51-31', light:'473', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10033256', surname:'Гаврилин', name:'Николай Владимирович', phone:'+7(987)852-35-80', light:'847', photo:'img/niko.jpg', photo:'img/niko.jpg', prof:'ГРОЗ'},
    { id:'10043925', surname:'Гарицкий', name:'Александр Александрович', phone:'+7(913)490-17-19', light:'185', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10040449', surname:'Гасымов', name:'Вусаль Фикрет оглы', phone:'+7(905)090-66-00', light:'526', photo:'img/vusal.jpg', photo:'img/vusal.jpg', prof:'Заместитель начальника участка'},                                        
    { id:'10258874', surname:'Гатиев', name:'Артур Хетагович', phone:'+7(913)497-20-08', light:'608', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10032863', surname:'Герасимов', name:'Александр Александрович', phone:'+7(995)619-06-25', light:'', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10064154', surname:'Герасимчук', name:'Артём Валериевич', phone:'+7(923)576-26-33', light:'903', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10066983', surname:'Гончаров', name:'Алексей Данович', phone:'+7(913)160-09-21', light:'135', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10006198', surname:'Горбунов', name:'Иван Николаевич', phone:'+7(913)503-56-68', light:'230', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10269954', surname:'Гордиенко', name:'Илья Александрович', phone:'+7(913)504-54-57', light:'254', photo:'img/no-avatar2.png', prof:'Дробильщик'},                                        
    { id:'10049176', surname:'Горлин', name:'Алексей Михайлович', phone:'+7(923)204-72-05', light:'2305', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10015860', surname:'Гроо', name:'Александр Александрович', phone:'+7(913)496-02-90', light:'1969', photo:'img/no-avatar2.png', prof:'Машинист ПСМ'},
    { id:'10048268', surname:'Гудиев', name:'Тамерлан Эльбрусович', phone:'+7(913)167-69-46', light:'440', photo:'img/gudi.jpg', prof:'Начальник участка'},
    { id:'10016266', surname:'Гуреев', name:'Константин Владимирович', phone:'+7(905)998-33-81', light:'420', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10050572', surname:'Гусев', name:'Кирилл Михайлович', phone:'+7(908)032-42-88', light:'654', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10047124', surname:'Гущин', name:'Виталий Александрович', phone:'+7(913)506-89-89', light:'982', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10025645', surname:'Давлетов', name:'Альберт Робертович', phone:'+7(987)622-63-33', light:'2279', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10048083', surname:'Дажисан', name:'Владимир Михайлович', phone:'+7(906)903-60-40', light:'1552', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10259162', surname:'Даровских', name:'Евгений Сергеевич', phone:'+7(987)022-73-60', light:'1952', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10056650', surname:'Дильмухаметов', name:'Азат Азаматович', phone:'+7(917)785-24-28', light:'1816', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10024517', surname:'Доброхотов', name:'Александр Геннадьевич', phone:'+7(913)494-64-36', light:'456', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10066162', surname:'Довгаль', name:'Алексей Дмитриевич', phone:'+7(950)967-77-75', light:'1737', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10253275', surname:'Дружинин', name:'Александр Михайлович', phone:'+7(913)525-77-25', light:'616', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10029214', surname:'Духович', name:'Кирилл Викторович', phone:'+7(908)033-56-53', light:'132', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10254228', surname:'Евстафьев', name:'Александр Александрович', phone:'+7(913)735-73-75', light:'1428', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10253463', surname:'Евтов', name:'Алексей Андреевич', phone:'+7(950)125-43-47', light:'720', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10024750', surname:'Егоров', name:'Димитрий Анатольевич', phone:'+7(923)203-14-17', light:'1066', photo:'img/egorov.jpg', prof:'ГРОЗ'},  
    { id:'10252299', surname:'Емельянов Александр', name:'Владиславович', phone:'+7(901)621-48-13', light:'1485', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10259270', surname:'Емельянов Алексей', name:'Владиславович', phone:'+7(913)055-16-76', light:'598', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10251589', surname:'Железняков', name:'Михаил Александрович', phone:'+7(913)506-38-02', light:'2392', photo:'img/no-avatar2.png', prof:'Машинист ПСМ'},
    { id:'10268473', surname:'Загузин', name:'Сергей Викторович', phone:'+7(983)283-09-46', light:'39', photo:'img/zaguz.jpg', prof:'Сменный механик'},
    { id:'10064915', surname:'Зайцев Андрей', name:'Сергеевич', phone:'+7(913)161-77-34', light:'2738', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10056657', surname:'Зайцев Владимир', name:'Александрович', phone:'+7(913)530-96-15', light:'1021', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10250189', surname:'Закирьянов Анфир', name:'Ильдарович', phone:'+7(913)496-06-75', light:'1484', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10250190', surname:'Закирьянов Данияр', name:'Ильдарович', phone:'+7(905)998-35-18', light:'1327', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10263224', surname:'Золотухин', name:'Владимир Владимирович', phone:'+7(983)261-14-23', light:'960', photo:'img/gold.jpg', prof:'ГРОЗ'},
    { id:'10035633', surname:'Иваненко', name:'Виталий Александрович', phone:'+7(906)901-17-77', light:'33', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10256824', surname:'Иванов', name:'Вячеслав Андреевич', phone:'+7(902)944-48-32', light:'705', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10253321', surname:'Ижбяков', name:'Александр Сергеевич', phone:'+7(913)491-56-72', light:'1219', photo:'img/no-avatar2.png', prof:'Машинист ПСМ'},  
    { id:'10024715', surname:'Ильясов', name:'Дим Уралович', phone:'+7(913)497-19-25', light:'41', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10057462', surname:'Исаев', name:'Герейхан Абдуселимович', phone:'+7(905)977-69-15', light:'931', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10259160', surname:'Исянгулов', name:'Владлен Ильдусович', phone:'+7(917)751-02-58', light:'908', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10025059', surname:'Капитанчук', name:'Валерий Васильевич', phone:'+7(950)968-02-73', light:'2229'},
    { id:'10066286', surname:'Казанин', name:'Александр Петрович', phone:'+7(913)505-77-81', light:'1714', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10052680', surname:'Казанцев', name:'Игорь Владимирович', phone:'+7(902)915-63-74', light:'1312', photo:'img/no-avatar2.png', prof:'Машинист буровой установки'},
    { id:'10067073', surname:'Карпинский', name:'Алексей Андреевич', phone:'+7(902)552-15-68', light:'1194', photo:'img/no-avatar2.png', prof:'Дробильщик'},  
    { id:'10042352', surname:'Кашкаров', name:'Денис Тимофеевич', phone:'+7(923)202-23-51', light:'1435', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10007928', surname:'Квартников', name:'Александр Владимирович', phone:'+7(913)168-09-60', light:'1306', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10031225', surname:'Клименко', name:'Александр Станиславович', phone:'+7(913)160-41-48', light:'1072', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10041293', surname:'Клюшников', name:'Александр Сергеевич', phone:'+7(913)164-79-86', light:'1974', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10270067', surname:'Кобелев', name:'Михаил Валерьевич', phone:'+7(913)521-38-74', light:'265', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10014519', surname:'Ковтан', name:'Максим Васильевич', phone:'+7(913)496-38-39', light:'5039', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10259439', surname:'Коков', name:'Денис Владимирович', phone:'+7(923)599-23-83', light:'973', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10256311', surname:'Колесников', name:'Виктор Петрович', phone:'+7(913)503-44-56', light:'155', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10065653', surname:'Кондиков', name:'Григорий Иванович', phone:'+7(913)508-29-69', light:'848', photo:'img/no-avatar2.png', prof:'Машанист ПСМ'},
    { id:'10005033', surname:'Коногоров', name:'Владимир Андреевич', phone:'+7(913)491-19-95', light:'996', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10065661', surname:'Коробко', name:'Дмитрий Владимирович', phone:'+7(913)163-66-12', light:'672', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10038215', surname:'Корольков', name:'Алексей Валерьевич', phone:'+7(913)504-63-20', light:'811', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10057645', surname:'Красничкин', name:'Олег Иванович', phone:'+7(908)219-74-66', light:'715', photo:'img/no-avatar2.png', prof:'Сменный механик'},                                        
    { id:'10017216', surname:'Кривонос', name:'Николай Вячеславович', phone:'+7(962)075-30-00', light:'439', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10259158', surname:'Кудзиев Алан', name:'Роландович', phone:'+7(988)838-32-39', light:'2107', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10021919', surname:'Кудзиев Георгий', name:'Георгиевич', phone:'+7(913)526-04-89', light:'764', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10035541', surname:'Кузнецов', name:'Владимир Александрович', phone:'+7(965)089-76-07', light:'956', photo:'img/no-avatar2.png', prof:'Токарь'},
    { id:'10256257', surname:'Кунучаков', name:'Аймир Сергеевич', phone:'+7(983)370-90-83', light:'683', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10256244', surname:'Купцов', name:'Денис Александрович', phone:'+7(982)534-63-40', light:'2651', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10065360', surname:'Курманалиев', name:'Ахмед Эрмамбетович', phone:'+7(906)900-90-07', light:'2328', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10065261', surname:'Лачинов', name:'Джалалдин Эседович', phone:'+7(923)323-33-03', light:'1397', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10037910', surname:'Лебедев', name:'Александр Леонидович', phone:'+7(913)491-74-42', light:'23', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10253888', surname:'Левченко', name:'Дмитрий Владимирович', phone:'+7(905)093-66-96', light:'6188', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10025186', surname:'Лещенко', name:'Антон Андреевич', phone:'+7(913)161-03-42', light:'458', photo:'img/lesh.jpg', photo:'img/lesh.jpg', prof:'Бурильщик шпуров'},  
    { id:'10013331', surname:'Лисовский', name:'Роман Борисович', phone:'+7(913)163-10-77', light:'328', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10059004', surname:'Литовченко', name:'Евгений Олегович', phone:'+7(906)904-32-72', light:'327', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10056908', surname:'Лушников', name:'Антон Геннадьевич', phone:'+7(905)090-55-66', light:'637', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10013835', surname:'Лысюк', name:'Антон Сергеевич', phone:'+7(902)949-09-77', light:'1924', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10255994', surname:'Мальцев', name:'Алексей Васильевич', phone:'+7(962)809-60-85', light:'', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10040508', surname:'Марьясов', name:'Сергей Константинович', phone:'+7(902)949-18-23', light:'2263', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10047613', surname:'Матренин', name:'Евгений Владимирович', phone:'+7(913)505-28-74', light:'1954', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10010481', surname:'Микаилов', name:'Эдуард Микаилович', phone:'+7(913)530-59-17', light:'758', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10059219', surname:'Миляев', name:'Владимир Анатольевич', phone:'+7(913)530-95-90', light:'1738', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10057799', surname:'Несмашный', name:'Денис Павлович', phone:'+7(913)504-54-20', light:'1183', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10007217', surname:'Нечитайленко', name:'Евгений Сергеевич', phone:'+7(913)574-75-14', light:'65', photo:'img/nechit.jpg', prof:'Бурильщик шпуров'},
    { id:'10253451', surname:'Никитин', name:'Александр Александрович', phone:'+7(982)178-17-27', light:'444', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10041512', surname:'Новиков', name:'Дмитрий Анатольевич', phone:'+7(913)167-09-28', light:'839', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10046334', surname:'Новосельский', name:'Андрей Станиславович', phone:'+7(913)506-38-77', light:'515', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10008112', surname:'Новосельцев', name:'Владимир Владимирович', phone:'+7(913)501-85-37', light:'650', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10033894', surname:'Ноздрев', name:'Игорь Николаевич', phone:'+7(913)165-03-80', light:'37', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10005908', surname:'Осипов', name:'Александр Сергеевич', phone:'+7(913)500-64-62', light:'821', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10065173', surname:'Оспанов', name:'Бауыржан Тахир-Улы', phone:'+7(913)497-98-96', light:'728', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10257197', surname:'Павлов', name:'Станислав Владимирович', phone:'+7(914)424-32-62', light:'148', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10251850', surname:'Пашкевич', name:'Антон Евгеньевич', phone:'+7(902)948-21-01', light:'1747', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10067017', surname:'Петлицин', name:'Дмитрий Владимирович', phone:'+7(902)014-33-59', light:'1201', photo:'img/petl.jpg', prof:'Бурильщик шпуров'},
    { id:'10038063', surname:'Петров', name:'Артём Владимирович', phone:'+7(902)915-85-84', light:'295', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10054598', surname:'Петрушкин', name:'Владимир Николаевич', phone:'+7(906)901-51-08', light:'692', photo:'img/no-avatar2.png', prof:'Токарь'},
    { id:'10047118', surname:'Пиканов', name:'Семен Иванович', phone:'+7(923)202-02-74', light:'2256', photo:'img/pikanov.jpg', prof:'Сменный механик'},  
    { id:'10263025', surname:'Плеханов', name:'Иван Александрович', phone:'+7(983)276-05-29', light:'2723', photo:'img/no-avatar2.png', prof:'Дробильщик'},                                        
    { id:'10016399', surname:'Политов', name:'Вячеслав Николаевич', phone:'+7(913)165-77-61', light:'615', photo:'img/slava.jpg', prof:'Бурильщик шпуров'},
    { id:'10054858', surname:'Поповичук', name:'Денис Владимирович', phone:'+7(913)531-93-42', light:'274', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10031902', surname:'Порошин', name:'Сергей Анатольевич', phone:'+7(923)205-99-00', light:'448', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10024986', surname:'Раджабов', name:'Али Русланович', phone:'+7(905)092-45-82', light:'158', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10056413', surname:'Рзаев', name:'Джанур Вахид оглы', phone:'+7(913)505-07-03', light:'854', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10065423', surname:'Рождественский', name:'Александр Владимирович', phone:'+7(913)495-72-15', light:'992', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10067714', surname:'Руднев', name:'Сергей Николаевич', phone:'+7(913)490-57-90', light:'1889', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10024748', surname:'Садулаев', name:'Дмитрий Александрович', phone:'+7(913)493-76-05', light:'506', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10049406', surname:'Садыков', name:'Марсель Анварович', phone:'+7(905)999-26-26', light:'2610', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10254231', surname:'Салманов', name:'Самир Алик оглы', phone:'+7(913)500-69-92', light:'1311', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10055667', surname:'Самойлов', name:'Павел Вячеславович', phone:'+7(985)151-85-07', light:'141', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10031103', surname:'Саракуев', name:'Мурат Мустафаевич', phone:'+7(961)020-40-18', light:'1383', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10065369', surname:'Саркулов', name:'Амангельды Курманович', phone:'+7(923)208-29-00', light:'2212', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10031196', surname:'Семенов', name:'Николай Александрович', phone:'+7(913)500-53-55', light:'2174', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10254227', surname:'Семенюк', name:'Александр Юрьевич', phone:'+7(913)495-90-87', light:'2326', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10047418', surname:'Синеговский', name:'Павел Сергеевич', phone:'+7(913)499-52-56', light:'1300', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10056671', surname:'Сокольских', name:'Алексей Сергеевич', phone:'+7(913)161-35-55', light:'2167', photo:'img/sokol2.jpg', prof:'Заместитель начальника участка'},  
    { id:'10067758', surname:'Стоянец', name:'Александр Иванович', phone:'+7(915)387-76-17', light:'25', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10064958', surname:'Сулейманов', name:'Загидин Джанбулатович', phone:'+7(923)347-79-77', light:'1947', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10024615', surname:'Султанбек', name:'уулу Санжарбек', phone:'+7(904)899-08-60', light:'361', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10043944', surname:'Тамразов', name:'Махмуд Тамраз оглы', phone:'+7(913)496-32-21', light:'647', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10010394', surname:'Терентьев', name:'Максим Александрович', phone:'+7(913)494-20-21', light:'160', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10031076', surname:'Ткаченко', name:'Иван Иванович', phone:'+7(982)359-61-17', light:'219', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},  
    { id:'10035259', surname:'Трембак', name:'Сергей Иванович', phone:'+7(916)881-25-92', light:'228', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10016039', surname:'Туйгунов', name:'Ильнур Гараевич', phone:'+7(923)347-28-27', light:'536', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10057951', surname:'Тулубаев', name:'Вадим Гадиятович', phone:'+7(987)495-74-60', light:'1406', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10253450', surname:'Тютюньков', name:'Александр Игоревич', phone:'+7(913)162-32-74', light:'721', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10251845', surname:'Улуханов', name:'Алибей Шабан оглы', phone:'+7(905)093-33-43', light:'1725', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10025004', surname:'Фатуллаев', name:'Вугар Шакир оглы', phone:'+7(913)162-62-12', light:'1195', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10269597', surname:'Фахретдинов', name:'Юнир Газизович', phone:'+7(917)747-86-11', light:'516', photo:'img/no-avatar2.png', prof:'Дробильщик'},                                        
    { id:'10065925', surname:'Федоров', name:'Евгений Русланович', phone:'+7(902)944-37-11', light:'1942', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10061230', surname:'Фесенко', name:'Юрий Иванович', phone:'+7(913)160-85-42', light:'1637', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10056592', surname:'Филобок', name:'Артур Александрович', phone:'+7(905)978-30-00', light:'582', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10046335', surname:'Фомин', name:'Виктор Евгеньевич', phone:'+7(913)525-59-22', light:'775', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10046532', surname:'Фролов', name:'Дмитрий Алексеевич', phone:'+7(913)495-27-47', light:'195', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10256248', surname:'Харитонов', name:'Алексей Алексеевич', phone:'+7(910)076-50-51', light:'419', photo:'img/hari.jpg', prof:'ГРОЗ'},                                        
    { id:'10024134', surname:'Харченко', name:'Евгений Игоревич', phone:'+7(913)167-66-20', light:'836', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10271170', surname:'Цирк', name:'Александр Викторович', phone:'+7(983)267-99-63', light:'115', photo:'img/no-avatar2.png', prof:'Дробильщик'},
    { id:'10056699', surname:'Цомартов', name:'Алан Цараевич', phone:'+7(989)131-74-20', light:'841', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10250590', surname:'Чернов', name:'Владимир Викторович', phone:'+7(923)323-28-08', light:'690', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10021033', surname:'Черноморец', name:'Владислав Анатольевич', phone:'+7(913)491-40-88', light:'306', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10032039', surname:'Черных', name:'Иван Александрович', phone:'+7(913)500-40-20', light:'674', photo:'img/no-avatar2.png', prof:'ГРОЗ'},                                        
    { id:'10032366', surname:'Чижик', name:'Игорь Андреевич', phone:'+7(913)508-57-94', light:'27', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10250054', surname:'Шабашов', name:'Николай Александрович', phone:'+7(904)899-57-92', light:'988', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10030870', surname:'Шевчук ', name:'Вадим Владимирович', phone:'+7(902)948-37-47', light:'2003', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},
    { id:'10042292', surname:'Шубин', name:'Руслан Леонидович', phone:'+7(923)207-91-47', light:'567', photo:'img/shub.jpg', prof:'Бурильщик шпуров'},
    { id:'10005499', surname:'Шульдешов', name:'Алексей Игоревич', phone:'+7(913)506-97-44', light:'307', photo:'img/no-avatar2.png', prof:'ГРОЗ'},  
    { id:'10008385', surname:'Юдин', name:'Сергей Олегович', phone:'+7(913)490-90-88', light:'1187', photo:'img/no-avatar2.png', prof:'Бурильщик шпуров'},                                        
    { id:'10015356', surname:'Яковлев', name:'Вадим Сергеевич', phone:'+7(913)505-89-27', light:'1141', photo:'img/no-avatar2.png', prof:'ГРОЗ'},
    { id:'10055604', surname:'Ярапов Дмитрий Сергеевич', phone:'+7(902)552-32-82', light:'619', photo:'img/im.jpg', prof:'Заместитель начальника участка'},
    { id:'', surname:'', name:'', phone:'', light:''},
    { id:'', surname:'', name:'', phone:'', light:''},
];

const base = [
    'Абдрахманов',   
    'Абдуллаев',                                         
    'Абдурахманов', 
    'Абдурашидов', 
    'Адаменко',
    'Акавов', 
    'Алшынбаев',   
    'Амангельдиев',
    'Андреев',
    'Анисимов', 
    'Аскеров', 
    'Ахметов', 
    'Байназаров',   
    'Баранов',                                         
    'Башкирцев', 
    'Бетту',
    'Бикмурзин', 
    'Бимирзаев', 
    'Бокатов',   
    'Бородин',                                         
    'Бучнев', 
    'Быстрыкин', 
    'Ванжа', 
    'Василенко', 
    'Вдовиченко',   
    'Венидиктов',
    'Волченко', 
    'Воронин', 
    'Вшивков', 
    'Гаврилин', 
    'Гарицкий',   
    'Гасымов',                                         
    'Гатиев', 
    'Герасимов', 
    'Герасимчук', 
    'Гончаров', 
    'Горбунов',
    'Гордиенко',                                         
    'Горлин', 
    'Гроо', 
    'Гудиев', 
    'Гуреев', 
    'Гусев',   
    'Гущин',                                         
    'Давлетов', 
    'Дажисан', 
    'Даровских', 
    'Дильмухаметов', 
    'Доброхотов',   
    'Довгаль',
    'Дружинин', 
    'Духович', 
    'Евстафьев', 
    'Евтов', 
    'Егоров',   
    'Емельянов Александр',                                         
    'Емельянов Алексей',
    'Железняков', 
    'Загузин', 
    'Зайцев Андрей', 
    'Зайцев Владимир',   
    'Закирьянов Анфир',                                         
    'Закирьянов Данияр', 
    'Золотухин', 
    'Иваненко',
    'Иванов', 
    'Ижбяков',   
    'Ильясов',                                         
    'Исаев', 
    'Исянгулов',
    'Капитанчук', 
    'Казанин', 
    'Казанцев',
    'Карпинский',  
    'Кашкаров',                                         
    'Квартников', 
    'Клименко', 
    'Клюшников', 
    'Кобелев', 
    'Ковтан',   
    'Коков',                                        
    'Колесников', 
    'Кондиков', 
    'Коногоров', 
    'Коробко', 
    'Корольков',   
    'Красничкин',                                         
    'Кривонос', 
    'Кудзиев Алан',
    'Кудзиев Георгий', 
    'Кузнецов', 
    'Кунучаков',  
    'Купцов',                                         
    'Курманалиев', 
    'Лачинов', 
    'Лебедев', 
    'Левченко', 
    'Лещенко',   
    'Лисовский',                                         
    'Литовченко', 
    'Лушников', 
    'Лысюк',
    'Мальцев', 
    'Марьясов',   
    'Матренин',                                         
    'Микаилов', 
    'Миляев', 
    'Несмашный', 
    'Нечитайленко', 
    'Никитин',   
    'Новиков',                                         
    'Новосельский', 
    'Новосельцев', 
    'Ноздрев', 
    'Осипов', 
    'Оспанов',   
    'Павлов',                                         
    'Пашкевич', 
    'Петлицин', 
    'Петров', 
    'Петрушкин', 
    'Пиканов',
    'Плеханов',                                         
    'Политов', 
    'Поповичук', 
    'Порошин', 
    'Раджабов', 
    'Рзаев',   
    'Рождественский',                                         
    'Руднев', 
    'Садулаев', 
    'Садыков', 
    'Салманов', 
    'Самойлов',
    'Саракуев',                                         
    'Саркулов', 
    'Семенов', 
    'Семенюк', 
    'Синеговский', 
    'Сокольских',   
    'Стоянец',                                         
    'Сулейманов', 
    'Султанбек', 
    'Тамразов', 
    'Терентьев', 
    'Ткаченко',   
    'Трембак',                                         
    'Туйгунов', 
    'Тулубаев',
    'Тютюньков', 
    'Улуханов', 
    'Фатуллаев',   
    'Фахретдинов',                                         
    'Федоров', 
    'Фесенко', 
    'Филобок', 
    'Фомин',
    'Фролов',   
    'Харитонов',                                         
    'Харченко', 
    'Цирк', 
    'Цомартов', 
    'Чернов', 
    'Черноморец',   
    'Черных',                                         
    'Чижик', 
    'Шабашов', 
    'Шевчук ', 
    'Шубин', 
    'Шульдешов',   
    'Юдин',                                         
    'Яковлев', 
    'Ярапов Дмитрий Сергеевич',    
    
];












