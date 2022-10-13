
import { connect } from 'react-redux';
import { ChangeEvent, FC } from 'react';

import { setTheme } from 'store/actions/gameActions';
import { AppDispatch, RootState } from 'store';
import "./styles.scss"

interface ISwitchBottonProps {
    theme: string;
    setThemRdx: (theme: string) => void
}

const setBooleanTheme = (value: string) => {
    if(value === "dark") return false;
    if(value === "light") return true;
}

const SwitchBotton: FC<ISwitchBottonProps> = ({
    theme,
    setThemRdx
}) => {

    const changeTheme = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {

        if(checked) {
            setThemRdx("light")
        } else {
            setThemRdx("dark")
        }
    }

    return (
        <>
            <input
                type="checkbox"
                id="hide-checkbox"
                name={theme}
                checked={setBooleanTheme(theme)}
                onChange={changeTheme}
            />
            <label htmlFor="hide-checkbox" className="toggle">
                <span className="toggle-button"></span>
            </label>
        </>
    )
};

const mapStateToProps = ({ gameReducer }: RootState) => ({
	theme: gameReducer?.theme ?? "",
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setThemRdx: (theme: string) => dispatch(setTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(SwitchBotton)