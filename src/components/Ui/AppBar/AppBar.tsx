
import { FC } from 'react';
import Question from 'resources/icons/Question';

import Chart from 'resources/images/chart.png';
import SwitchBotton from '../SwitchBotton';
import "./styles.scss"

interface IAppBarProps {}

const AppBar: FC<IAppBarProps> = ({}) => {
  return (
    <div className='appBar'>
        <button>
            <Question className='iconGray' />
        </button>

        <span>WORDLE</span>

        <div>
            <button>
                <picture>
                    <img src={Chart} alt="" />
                </picture>
            </button>

            <SwitchBotton />
        </div>
    </div>
  )
}

export default AppBar