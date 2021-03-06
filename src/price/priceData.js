export const priceData = {
  firstTable: {
    header: 'СТОИМОСТЬ КОМПЛЕКСНОГО РЕМОНТА КВАРТИР',
    subheader: 'Спектр услуг комплексного ремонта квартир «под ключ». Цена за квадратный метр. Дизайн-проект предоставляется бесплатно.',
    tableHead: ['Тип ремонта', 'Стоимость работ (м²)', 'Стоимость материалов (м²)', 'Общая стоимость (м²)'],
    tableRows: [
      {
        repairType: 'Косметический ремонт',
        price: '2720 руб.',
        materialCost: '2000 руб.',
        totalPrice: '4720 руб.'
      }, {
        repairType: 'Капитальный ремонт',
        price: '3900 руб.',
        materialCost: '2500 руб.',
        totalPrice: '6400 руб.'
      }, {
        repairType: 'Индивидуальный ремонт',
        price: '4240 руб.',
        materialCost: '3800 руб.',
        totalPrice: '8240 руб.'
      }
    ]
  },

  secondTable: {
    header: 'СТОИМОСТЬ КОМПЛЕКСНОГО РЕМОНТА КОММЕРЧЕСКОЙ НЕДВИЖИМОСТИ',
    subheader: 'Услуги по ремонту коммерческой недвижимости «под ключ» с материалами для юридических лиц.',
    tableHead: ['Тип недвижимости', 'Тип ремонта', 'Стоимость работ (м²)', 'Стоимость материалов (м²)', 'Общая стоимость (м²)'],
    tableRows: [
      {
        realEstateType: 'Ремонт офисов',
        rowspan: 3,
        repairType: 'Косметический',
        price: '920 руб.',
        materialCost: '750 руб.',
        totalPrice: '1670 руб.'
      }, {
        repairType: 'Капитальный',
        price: '2450 руб.',
        materialCost: '1500 руб.',
        totalPrice: '3950 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '4890 руб.',
        materialCost: '3500 руб.',
        totalPrice: '8390 руб.'
      }, {
        realEstateType: 'Ремонт магазинов',
        rowspan: 3,
        repairType: 'Косметический',
        price: '750 руб.',
        materialCost: '600 руб.',
        totalPrice: '1350 руб.'
      }, {
        repairType: 'Капитальный',
        price: '1900 руб.',
        materialCost: '700 руб.',
        totalPrice: '2600 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '4500 руб.',
        materialCost: '3500 руб.',
        totalPrice: '8000 руб.'
      }, {
        realEstateType: 'Ремонт ресторанов и кафе',
        rowspan: 3,
        repairType: 'Косметический',
        price: '1300 руб.',
        materialCost: '1100 руб.',
        totalPrice: '2400 руб.'
      }, {
        repairType: 'Капитальный',
        price: '3150 руб.',
        materialCost: '1700 руб.',
        totalPrice: '4850 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '6900 руб.',
        materialCost: '4200 руб.',
        totalPrice: '11100 руб.'
      }, {
        realEstateType: 'Ремонт салонов красоты',
        rowspan: 3,
        repairType: 'Косметический',
        price: '1150 руб.',
        materialCost: '750 руб.',
        totalPrice: '1900 руб.'
      }, {
        repairType: 'Капитальный',
        price: '2200 руб.',
        materialCost: '1500 руб.',
        totalPrice: '3700 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '5500 руб.',
        materialCost: '3500 руб.',
        totalPrice: '9000 руб.'
      }, {
        realEstateType: 'Ремонт автосалонов',
        rowspan: 3,
        repairType: 'Косметический',
        price: '700 руб.',
        materialCost: '500 руб.',
        totalPrice: '1200 руб.'
      }, {
        repairType: 'Капитальный',
        price: '1900 руб.',
        materialCost: '1500 руб.',
        totalPrice: '3400 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '3500 руб.',
        materialCost: '2800 руб.',
        totalPrice: '6300 руб.'
      }, {
        realEstateType: 'Ремонт отелей и хостелов',
        rowspan: 3,
        repairType: 'Косметический',
        price: '1300 руб.',
        materialCost: '1000 руб.',
        totalPrice: '2300 руб.'
      }, {
        repairType: 'Капитальный',
        price: '3150 руб.',
        materialCost: '1800 руб.',
        totalPrice: '4950 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '6800 руб.',
        materialCost: '4100 руб.',
        totalPrice: '10900 руб.'
      }, {
        realEstateType: 'Ремонт медицинских кабинетов',
        rowspan: 3,
        repairType: 'Косметический',
        price: '900 руб.',
        materialCost: '1000 руб.',
        totalPrice: '1900 руб.'
      }, {
        repairType: 'Капитальный',
        price: '2950 руб.',
        materialCost: '1650 руб.',
        totalPrice: '3600 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '5900 руб.',
        materialCost: '4150 руб.',
        totalPrice: '10050 руб.'
      }, {
        realEstateType: 'Ремонт учебных аудитоий',
        rowspan: 3,
        repairType: 'Косметический',
        price: '750 руб.',
        materialCost: '650 руб.',
        totalPrice: '1400 руб.'
      }, {
        repairType: 'Капитальный',
        price: '2000 руб.',
        materialCost: '1400 руб.',
        totalPrice: '3400 руб.'
      }, {
        repairType: 'Индивидуальный',
        price: '4500 руб.',
        materialCost: '3350 руб.',
        totalPrice: '7860 руб.'
      }
    ]
  },

  firstAccordion: {
    header: 'СТОИМОСТЬ УСЛУГ',
    subheader: 'Расценки на услуги по ремонту - стены, полы, потолок. Замена электропроводки и водоснабжения.',
    accordions: [
      {
        name: 'Стены',
        items: [
          {
            name: 'МОНТАЖ СТЕН',
            items: [
              'Выравнивание стен гипсовыми смесями — 350 руб./м²',
              'Установка маяков — 90 руб./м²',
              'Штукатурка стен (песчано-цементная) — 400 руб./м²',
              'Устройство откосов — 350 руб./м.п.',
              'Покраска откосов в 2 слоя (водоэмульсия) — 280 руб./м.п.',
              'Выравнивание стен по периметру (верх, низ) — 300 руб./м.п.',
              'Протяжка углов, выравнивание — 250 руб./м.п.',
              'Прокладка углов (внутренних) сеткой — 160 руб./м.п.',
              'Установка декор. уголка (перфорированного) — 180 руб./м.п.',
              'Нанесение венецианской штукатурки первый слой — 700 руб./м²',
              'Нанесение венецианской штукатурки второй слой и последующие — 300 руб./м²',
              'Декоративная штукатурка/покраска — 700 руб./м²',
              'Заделка штробы — 160 руб./м.п.',
              'Шпатлевка стен первый слой — 130 руб./м²',
              'Шпатлевка стен второй слой и последующие — 110 руб./м²',
              'Финишная шпатлевка — 120 руб./м²',
              'Оклейка малярной сетки — 180 руб./м²',
              'Монтаж сетки «рабица» — 150 руб./м²',
              'Грунтовка стен — 90 руб./м²',
              'Грунтовка бетоноконтактом — 60 руб./м²',
              'Шлифовка (ошкуривание) стен — 80 руб./м.п.',
              'Оклейка обоев (бумажные) без подбора — 190 руб./м²',
              'Оклейка обоев (бумажные) с подбором — 220 руб./м²',
              'Оклейка обоев (винил, шелкография) без подбора — 230 руб./м²',
              'Оклейка обоев (винил, шелкография) с подбором — 260 руб./м²',
              'Оклейка обоев шириной от 70 см. — 190 руб./м²',
              'Оклейка стекло-обоев — 160 руб./м²',
              'Оклейка бамбуковых обоев — 350 руб./м²',
              'Оклейка 2-х уровневых обоев с бордюром посередине — 350 руб./м²',
              'Нанесение жидких обоев с подготовкой — 400 руб./м²',
              'Оклейка стен самоклеющимися обоями — 190 руб./м²',
              'Монтаж потолочного бордюра — 150 руб./м.п.',
              'Покраска стен водоэмульсионной краской в 2 слоя — 130 руб./м²',
              'Покраска стен масляной краской в 2 слоя — 200 руб./м²',
              'Покраска стен водоэмульсионной краской в 2 цвета и более — 280 руб./м²',
              'Покраска батарей 1 ребро — 170 руб./шт.',
              'Покраска труб — 170 руб./м.п.',
              'Нанесение шагрени — 190 руб./м²',
              'Обшивка стен гкл (с направляющими) — 690 руб./м²',
              'Обшивка стен гкл (без направляющих) — 420 руб./м²',
              'Оклейка стеклоткани на стену под шпатлевку — 160 руб./м²',
              'Обшивка вагонкой, пластиковой панелью — 450 руб./м²',
              'Укладка плитки без подбора — 700 руб./м²',
              'Укладка плитки с подбором — 850 руб./м²',
              'Укладка плитки мелкая (10х10, 15х15) — 950 руб./м²',
              'Укладка плитки «панно» — 1030 руб./м²',
              'Укладка плитки без швов — 980 руб./м²',
              'Штукатурка стен (полукруглых, эллипсных и т. д) — 600 руб./м²',
              'Укладка мозаичной плитки — 1200 руб./м²',
              'Укладка декоративной плитки — 900 руб./м²',
              'Укладка плитки по диагонали — 900 руб./м²',
              'Укладка плитки из керамогранита — 700 руб./м²',
              'Укладка декоративного бордюра — 220 руб./м.п.',
              'Подготовка насечки — 140 руб./м.п.',
              'Подрезка плитки — 180 руб./м.п.',
              'Подрезка плитки из керамогранита, мозаика — 280 руб./м.п.',
              'Затирка швов — 80 руб./м²',
              'Монтаж экрана под ванну — 800 руб./шт.',
              'Отверстия в плитке сверло (трубы вода) — 240 руб./шт.',
              'Монтаж короба для труб (ГКЛ, ПГП) — 790 руб./м.п.',
              'Гидроизоляция по периметру ванны — 220 руб./м.п.',
              'Замуровка ванны — 1150 руб./шт.',
              'Монтаж лючка — 300 руб./шт.',
              'Замуровка окна — 500 руб./шт.',
              'Монтаж опалубки — 340 руб./м.п.',
              'Укладка кирпича (1\\2 кирпича) — 600 руб./м²',
              'Укладка кирпича (в кирпич) — 800 руб./м²',
              'Укладка пазгребневых плит и других блоков — 450 руб./м²',
              'Монтаж перегородок гкл (с шумоизоляцией) — 890 руб./м²'
            ]
          }, {
            name: 'ДЕМОНТАЖ СТЕН',
            items: [
              'Демонтаж старых обоев — 50 руб./м²',
              'Размывка стен — 100 руб./м²',
              'Зачистка стен от масляной краски — 160 руб./м²',
              'Зачистка швов в плитке — 180 руб./м²',
              'Демонтаж штукатурки — 155 руб./м²',
              'Демонтаж настенной плитки — 160 руб./м²',
              'Демонтаж пластиковой панели, вагонки — 70 руб./м²',
              'Демонтаж перегородок из гкл, фанеры — 230 руб./м²',
              'Демонтаж перегородок (кирпич, ацэид, гипсолит) — 400 руб./м²',
              'Демонтаж бетонных перегородок, толщиной до 100 мм (не несущая конструкция) — 2400 руб./м.п.',
              'Подрезка проема под дверную коробку (кирпич) — 1400 руб./м.п.',
              'Подрезка проема под дверную коробку (бетон) — 4000 руб./м.п.'
            ]
          }
        ]
      }, {
        name: 'Полы',
        items: [
          {
            name: 'МОНТАЖ ПОЛОВ',
            items: [
              'Монтаж регулируемых полов — 800 руб./м²',
              'Монтаж лаг — 240 руб./м²',
              'Настил половой доски — 400 руб./м²',
              'Настил фанеры, дсп/оргалита — 250 руб./м²',
              'Тепло/звукоизоляция пола — 180 руб./м²',
              'Укладка ламината — 240 руб./м²',
              'Укладка паркетной доски — 390 руб./м²',
              'Укладка паркета штучного — 900 руб./м²',
              'Настил линолеума, ковролина — 150 руб./м²',
              'Укладка плитки простой без подбора — 790 руб./м²',
              'Укладка плитки простой с подбором — 850 руб./м²',
              'Укладка плитки по диагонали — 900 руб./м²',
              'Укладка плитки мозаика — 1200 руб./м²',
              'Укладка плитки мелкой (10х10, 15х15) — 930 руб./м²',
              'Укладка плитки без швов — 1030 руб./м²',
              'Укладка тротуарной плитки — 580 руб./м²',
              'Укладка плитки из керамогранита — 750 руб./м²',
              'Укладка мраморной плитки — 1690 руб./м²',
              'Укладка плитки под камень — 1150 руб./м²',
              'Монтаж керамического плинтуса — 200 руб./м.п.',
              'Монтаж полового плинтуса (пластик) — 80 руб./м.п.',
              'Монтаж полового плинтуса (дерево) — 200 руб./м.п.',
              'Отверстие под унитаз — 350 руб./шт.',
              'Покраска полов в 2 слоя — 180 руб./м²',
              'Устройство стяжки пола до 5 см — 380 руб./м²',
              'Заливка самовыравнивающей стяжки — 250 руб./м²',
              'Монтаж арматуры, сетки под стяжку — 150 руб./м²',
              'Грунтовка под стяжку — 40 руб./м²',
              'Засыпка керамзита — 110 руб./м²',
              'Гидроизоляция (стеклоизол и пр.) — 450 руб./м²',
              'Монтаж подиума под ванну, душ, кабину — 1500 руб./м²',
              'Монтаж порожка — 300 руб./шт.',
              'Укладка плитки на ступени (керамика) — 790 руб./м.п.',
              'Укладка плитки на ступени (керамогранит) — 890 руб./м.п.'
            ]
          }, {
            name: 'ДЕМОНТАЖ ПОЛОВ',
            items: [
              'Демонтаж линолеума, ковролина — 40 руб./м²',
              'Демонтаж плинтуса — 100 руб./м.п.',
              'Демонтаж стяжки — 200 руб./м²',
              'Демонтаж битума, клеевой основы — 400 руб./м²',
              'Демонтаж напольной плитки — 130 руб./м²',
              'Демонтаж пола под сантехкабиной — 600 руб./м²',
              'Демонтаж лаг — 100 руб./м²',
              'Демонтаж плинтуса с арматурой — 600 руб./м.п.'
            ]
          }
        ]
      },
      {
        name: 'Потолки',
        items: [
          {
            name: 'МОНТАЖ ПОТОЛКОВ',
            items: [
              'Выравнивание потолка гипсовыми смесями — 400 руб./м²',
              'Установка маяков — 120 руб./м²',
              'Грунтовка потолка — 40 руб./м²',
              'Грунтовка бетоноконтактом — 60 руб./м²',
              'Шпатлевка потолка первый слой — 160 руб./м²',
              'Шпатлевка потолка второй слой и последующие — 130 руб./м²',
              'Финишная шпатлевка потолка — 150 руб./м²',
              'Проклейка стеклоткани под шпатлевку — 140 руб./м²',
              'Ошкуривание потолка — 80 руб./м²',
              'Армирование потолка сеткой 50х50 мм — 250 руб./м²',
              'Обработка потолка антисептическим раствором — 120 руб./м²',
              'Монтаж подвесного потолка зеркального — 800 руб./м²',
              'Монтаж подвесных потолков типа «армстронг» — 450 руб./м²',
              'Монтаж реечных потолков — 700 руб./м²',
              'Монтаж потолка из гкл — 690 руб./м²',
              'Монтаж потолка из гкл (2 слоя) — 900 руб./м²',
              'Устройство гидроизоляции — 450 руб./м²',
              'Устройство 2-х уровневого потолка из гкл — 900 руб./м²',
              'Устройство 2-х уровневого фигурного потолка — 900 руб./м²',
              'Дополнительный уровень после второго — 900 руб./м²',
              'Монтаж потолочного плинтуса — 120 руб./м.п.',
              'Покраска потолочного плинтуса — 110 руб./м.п.',
              'Монтаж потолочной розетки (декоративной) — 500 руб./шт.',
              'Заделка плинтуса акрилом/силиконом — 60 руб./м.п.',
              'Подготовка и покраска лепнины — 480 руб./м.п.',
              'Венецианская штукатурка первый слой — 750 руб./м²',
              'Венецианская штукатурка второй слой и последующие — 360 руб./м²',
              'Монтаж светового карниза — 300 руб./м.п.',
              'Оклейка обоев (бумажные) без подбора — 250 руб./м²',
              'Оклейка обоев (бумажные) с подбором — 280 руб./м²',
              'Оклейка виниловых обоев — 300 руб./м²',
              'Покраска потолка 2 слоя (водоэмульсионка) — 180 руб./м²',
              'Покраска потолка 2 слоя (масляная краска) — 300 руб./м²',
              'Покраска потолка в 2 цвета и более — 300 руб./м²',
              'Заделка рустов (стыков плит) — 150 руб./м.п.',
              'Проклейка серпянкой рустов, трещин по периметру — 80 руб./м.п.',
              'Монтаж 2-х уровневого карниза — 350 руб./м.п.'
            ]
          }, {
            name: 'ДЕМОНТАЖ ПОТОЛКОВ',
            items: [
              'Размывка потолка — 100 руб./м²',
              'Зачистка потолка (водоэмульсионка) — 120 руб./м²',
              'Зачистка потолка (масло) — 175 руб./м²',
              'Демонтаж обоев — 70 руб./м²',
              'Демонтаж подвесных потолков — 100 руб./м²',
              'Демонтаж потолочного плинтуса — 35 руб./м.п.',
              'Демонтаж плитки из полистирола — 65 руб./м²',
              'Демонтаж лепнины — 80 руб./м.п.'
            ]
          }

        ]
      }, {
        name: 'Сантехника',
        items: [
          {
            name: 'МОНТАЖ САНТЕХНИКИ',
            items: [
              'Монтаж труб (металлопласт) — 450 руб./м.п.',
              'Монтаж труб (полипропилен) — 570 руб./м.п.',
              'Монтаж труб (канализация пвх) — 560 руб./м.п.',
              'Монтаж труб (оцинковка, медные) — 980 руб./м.п.',
              'Установки гребенки в сборе — 950 руб./шт.',
              'Установка крана под гребенку — 430 руб./шт.',
              'Штробление стен под трубы в кирпиче, гипсолите, пеноблоке — 850 руб./м.п.',
              'Штробление стен под трубы в бетоне — 1200 руб./м.п.',
              'Монтаж ванны — 2200 руб./шт.',
              'Монтаж унитаза — 1000 руб./шт.',
              'Замена, поворот крестовины (унитаз) — 800 руб./шт.',
              'Монтаж биде — 2450 руб./шт.',
              'Монтаж унитаза (подвесного на каркасе) — 3000 руб./шт.',
              'Замена бочка (унитаз) — 800 руб./шт.',
              'Замена слива — 450 руб./шт.',
              'Монтаж писсуара — 1200 руб./шт.',
              'Монтаж раковины «тюльпан» — 1600 руб./шт.',
              'Монтаж «мойдодыра» — 1450 руб./шт.',
              'Монтаж «мойдодыра» с зеркальным шкафом — 1800 руб./шт.',
              'Монтаж раковины — 1200 руб./м.п.',
              'Монтаж раковины «колокольчик» — 1700 руб./шт.',
              'Монтаж мойки — 1400 руб./шт.',
              'Монтаж полотенцесушителя — 1500 руб./шт.',
              'Монтаж перемычки — 6500 руб./шт.',
              'Монтаж фильтра мелкой очистки с подключением к канализации — 1600 руб./шт.',
              'Монтаж, замена смесителя «елочка» — 650 руб./шт.',
              'Монтаж шарового крана, вентиля — 260 руб./шт.',
              'Монтаж терморегулирующего вентиля — 880 руб./шт.',
              'Монтаж редуктора — 1100 руб./шт.',
              'Монтаж фильтров грубой очистки — 460 руб./шт.',
              'Монтаж соединительной муфты — 120 руб./шт.',
              'Монтаж сгона — 200 руб./шт.',
              'Монтаж уголка 90 градусов — 170 руб./шт.',
              'Монтаж ниппеля — 100 руб./шт.',
              'Монтаж уголка (цанговый крепежный) — 280 руб./шт.',
              'Монтаж водоизмерителей — 1270 руб./шт.',
              'Монтаж душ. кабины — 3500 руб./шт.',
              'Монтаж душевой кабины с гидромассажем — 3500 руб./шт.',
              'Подключение стиральной машины — 1500 руб./шт.',
              'Подключение посудомоечной машины — 2000 руб./шт.',
              'Монтаж радиатора, батареи — 3800 руб./шт.',
              'Установка водонагревателя — 3800 руб./шт.',
              'Установка фитинга — 190 руб./шт.',
              'Пайка труб — 190 руб./шт.',
              'Нарезка резьбы на стояковую подводку — 950 руб./шт.',
              'Установка заглушек на трубопроводе — 180 руб./шт.',
              'Установка кронштейнов — 300 руб./шт.',
              'Устранение, течи, подгонка оборудования — 850 руб./шт.',
              'Устранение засоров — 900 руб.'
            ]
          }, {
            name: 'ДЕМОНТАЖ САНТЕХНИКИ',
            items: [
              'Демонтаж с/т точки (кроме ванны и душевой кабины) — 600 руб./шт.',
              'Демонтаж водопроводных труб — 260 руб./м.п.',
              'Демонтаж канализационных труб — 290 руб./м²',
              'Демонтаж чугунных труб — 480 руб./м²',
              'Демонтаж ванны — 850 руб./шт.',
              'Демонтаж душевой кабины — 1300 руб./шт.',
              'Демонтаж джакузи — 1690 руб./шт.',
              'Демонтаж водонагревателя — 850 руб./шт.',
              'Демонтаж полотенцесушителя — 610 руб./шт.',
              'Демонтаж радиатора, батареи — 600 руб./шт.'
            ]
          }
        ]
      }, {
        name: 'Электромонтаж',
        items: [
          {
            name: 'ДЕМОНТАЖНЫЕ РАБОТЫ',
            items: [
              'Демонтаж провода — 40 руб./м.п.',
              'Демонтаж электрической точки — 80 руб./шт.',
              'Демонтаж люстры, светильника, бра — 270 руб./шт',
              'Демонтаж точки электрической (розетка, выключатель) — 80 руб./шт.',
              'Демонтаж распаечной коробки — 110 руб./шт.',
              'Демонтаж электропроводки открытой — 40 руб./м.п.',
              'Демонтаж выключателя автоматического — 100 руб./шт.',
              'Демонтаж прибора учета (счетчика) электроэнергии — 430 руб./шт.',
              'Демонтаж короба (гофры) — 40 руб./м.п.',
              'Подрезка проема под дверную коробку (кирпич) — 1400 руб./м.п.',
              'Подрезка проема под дверную коробку (бетон) — 4000 руб./м.п.'
            ]
          }, {
            name: 'ШТРОБЛЕНИЕ СТЕН И ПОТОЛКА',
            items: ['Штробление бетона — 300 руб./м.п.', 'Штробление кирпича — 200 руб./м.п.', 'Штробление гипсолита, гипсокартона — 150 руб./м.п.', 'Штробление потолка — 400 руб./м.п.']
          }, {
            name: 'ПРОКЛАДКА КАБЕЛЯ',
            items: ['Укладка провода в гофре — 80 руб./м.п.', 'Укладка открытой проводки — 60 руб./м.п.', 'Укладка проводки в короб — 100 руб./м.п.', 'Монтаж выключателя силового (пакетного) — 500 руб./шт.']
          }, {
            name: 'МОНТАЖ АВТОМАТА/СЧЕТЧИКА/ЭЛЕКТОТОЧКИ',
            items: [
              'Монтаж однофазного автомата — 500 руб./шт.',
              'Монтаж двухфазного автомата — 500 руб./шт.',
              'Монтаж трёххфазного автомата — 500 руб./шт.',
              'Монтаж дифференциального автомата — 500 руб./шт.',
              'Монтаж УЗО — 500 руб./шт.',
              'Монтаж электрощита — 1900 руб./шт.',
              'Монтаж счетчика — 2000 руб./шт.',
              'Устройство ниши под электрощит — 1500 руб./шт.',
              'Установка накладной электроточки (розетка, выключатель) — 250 руб./шт.',
              'Установка скрытой электроточки — 550 руб./шт.',
              'Установка накладной телефонной розетки — 250 руб./шт.',
              'Установка внутренней телефонной розетки — 500 руб./шт.',
              'Установка накладной компьютерной розетки — 250 руб./шт.',
              'Установка внутренней компьютерной розетки — 500 руб./шт.',
              'Установка накладной розетки под электроплиту — 660 руб./шт.',
              'Установка внутренней розетки под электроплиту — 460 руб./шт.',
              'Монтаж подрозетника с заделкой гипсом — 100 руб./шт.'
            ]
          }, {
            name: 'УСТАНОВКА ЛЮСТРЫ/СВЕТИЛЬНИКА/БРА',
            items: [
              'Установка люстры тип «Тарелка» — 650 руб./шт.',
              'Установка простой люстры на крюк — 800 руб./шт.',
              'Установка сложной люстры на крюк — 1000 руб./шт.',
              'Установка простой люстры потолочного крепления — 600 руб./шт.',
              'Установка сложной люстры потолочного крепления — 900 руб./шт.',
              'Установка светильника дневного света на стену — 550 руб./шт.',
              'Установка светильника дневного света на потолок — 650 руб./шт.',
              'Установка встроенного галогенного, точечного светильника — 420 руб./шт.',
              'Разборка/сборка светильника — 200 руб./шт.',
              'Установка бра — 380 руб./шт.',
              'Разборка/сборка бра — 350 руб./шт.',
              'Монтаж светодиодной ленты — 150 руб./м.п.'
            ]
          }, {
            name: 'МОНТАЖ РАСПАЯЧНОЙ КОРОБКИ',
            items: ['Монтаж распаячной коробки в бетонную стену — 600 руб./шт.', 'Монтаж распаячной коробки в кирпичную стену — 490 руб./шт.', 'Монтаж распаячной коробки в гипсокартонную стену — 380 руб./шт.', 'Монтаж накладной распаячной коробки — 300 руб./шт.']
          }, {
            name: 'МОНТАЖ ТЕПЛОГО ПОЛА',
            items: ['Монтаж тёплого пола — 450 руб./м²', 'Монтаж датчика тёплого пола — 600 руб./шт.']
          }
        ]
      }, {
        name: 'Кондиционирование',
        items: [
          {
            name: 'МОНТАЖ КОНДИЦИОНЕРА',
            items: ['5 метров трассы, одно отверстие в стене, внешний блок под окном, внутренний блок около окна — 9000 руб./шт.', 'Дополнительное штробление стен для трассы (свыше 5 метров) — 800 руб./м.п.']
          }, {
            name: 'ОБСЛУЖИВАНИЕ КОНДИЦИОНЕРА',
            items: ['Чистка внутреннего и внешнего блока, диагностика, дозаправка фреоном (R410, R22) — 3500 руб./шт.']
          }
        ]
      }, {
        name: 'Дополнительные работы',
        items: [
          {
            name: 'СПИСОК',
            items: ['Подъем материала 1 тонна — 1500 руб.', 'Вынос мусора 1 тонна — 1000 руб.', 'Предоставление контейнера для мусора — 4000 руб.', 'Доставка материала по Москве — 1000 руб.', 'Выезд замерщика — бесплатно']
          }
        ]
      }
    ]
  }
};
