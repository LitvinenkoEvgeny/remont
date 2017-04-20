import React from 'react';

import GoToButton from '../Common/GoToVnStar';

const FirstViewPres = ({header, subHeader, changeView}) => {
  return (
    <div className="FirstViewPres">
      {/*<h2>*/}
        {/*<span className="small">Заголовок</span>*/}
        {/*<span className="big">РАССЧИТАТЬ СТОИМОСТЬ РЕМОНТА</span>*/}
        {/*<div className="border bottom">*/}
          {/*<div></div>*/}
        {/*</div>*/}
      {/*</h2>*/}

      <div className="text">
        <p>Для расчета стоимости комплексного ремонта или квадратных метров площади квартиры достаточно воспользоваться
          нашим онлайн калькулятором. </p>

        <GoToButton goTo='firstForm' changeView={changeView} />

      </div>


    </div>
  );
};

export default FirstViewPres;
