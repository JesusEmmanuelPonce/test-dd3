import { ReactNode } from 'react';
import { FC, useEffect, useState } from 'react';

import "./styles.scss";

interface IClassName {
    overlayModal?: string;
    contentModal?: string;
}

export interface ICustomModalProps {
    open: boolean;
    children: ReactNode;
    className?: IClassName;
}

const CustomModal: FC<ICustomModalProps> = ({
    open,
    children,
    className,
}) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        const hiddenModal = () => {
            setShowModal(false);
        };

        const seeModal = () => {
            setShowModal(true);
        };

        const timer = setTimeout(() => {
            if(open) seeModal();
            if(!open) hiddenModal();
        }, 400);

        return () => {
            clearTimeout(timer);
        }

    }, [open]);

    return (
        <> 
            { showModal ?
                <div
                    className={`${open ? `${className?.overlayModal} customModal` : "customModal hiddenModal"}`}
                >
                    <div className={`${className?.contentModal} customModal__body`} >
                        {children}
                    </div>
                </div> : undefined
            }
        </>
    )
}

export default CustomModal