
import { FC } from 'react';
import { connect } from 'react-redux';

import Score from 'resources/icons/Score';
import Question from 'resources/icons/Question';
import SwitchBotton from '../SwitchBotton';
import { AppDispatch, RootState } from 'store';
import { setOpenInstructions, setOpenScore } from 'store/actions/gameActions';
import "./styles.scss"

interface IAppBarProps {
    theme: string;
    openScore: boolean;
    openInstructions: boolean;
    setOpenScoreRdx: (value: boolean) => void;
    setOpenInstructionsRdx: (value: boolean) => void;
}

const AppBar: FC<IAppBarProps> = ({
    theme,
    openScore,
    openInstructions,
    setOpenScoreRdx,
    setOpenInstructionsRdx
}) => {

  return (
    <div className={`appBar ${theme === "light" ? "lightAppBar" : "darkAppBar"}`}>
        <button
            type='button'
            onClick={() => setOpenInstructionsRdx(!openInstructions)}
        >
            <Question className={`iconBtn ${theme === "light" ? "lightBtn" : "darkBtn"}`} />
        </button>

        <span className={`appBar__title ${theme === "light" ? "darkTitle" : "lightTitle"}`}>
            WORDLE
        </span>

        <div className='appBar__score'>
            <button
                type='button'
                onClick={() => setOpenScoreRdx(!openScore)}
            >
                <Score className={`iconBtn ${theme === "light" ? "lightBtn" : "darkBtn"}`} />
            </button>

            <SwitchBotton />
        </div>
    </div>
  )
}

const mapStateToProps = ({ gameReducer }: RootState) => ({
	theme: gameReducer?.theme ?? "",
    openScore: gameReducer?.openScore ?? false,
    openInstructions: gameReducer?.openInstructions ?? false,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setOpenScoreRdx: (value: boolean) => dispatch(setOpenScore(value)),
    setOpenInstructionsRdx: (value: boolean) => dispatch(setOpenInstructions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)