
import { FC } from 'react';
import "./styles.scss"

interface ISwitchBottonProps {}

const SwitchBotton: FC<ISwitchBottonProps> = ({}) => {
    return (
        <>
            <input type="checkbox" id="hide-checkbox" />
            <label htmlFor="hide-checkbox" className="toggle">
                <span className="toggle-button"></span>
            </label>
        </>
    )
}

export default SwitchBotton