import { FC } from 'react'
import "./styles.scss";

interface IKeyboardProps{}

const Keyboard:FC <IKeyboardProps> = ({}) => {
  return (
    <div className='keyboard'>
        <div className="keyboard__firstRow">
            <button
                type="button"
                value="q"
                onClick={(e: any) => console.log(e.target.value)}
            >
                q
            </button>
            <button
                type="button"
                value="w"
                onClick={(e: any) => console.log(e.target.value)}
            >
                w
            </button>
            <button
                type="button"
                value="e"
                onClick={(e: any) => console.log(e.target.value)}
            >
                e
            </button>
            <button
                type="button"
                value="r"
                onClick={(e: any) => console.log(e.target.value)}
            >
                r
            </button>
            <button
                type="button"
                value="t"
                onClick={(e: any) => console.log(e.target.value)}
            >
                t
            </button>
            <button
                type="button"
                value="y"
                onClick={(e: any) => console.log(e.target.value)}
            >
                y
            </button>
            <button
                type="button"
                value="u"
                onClick={(e: any) => console.log(e.target.value)}
            >
                u
            </button>
            <button
                type="button"
                value="i"
                onClick={(e: any) => console.log(e.target.value)}
            >
                i
            </button>
            <button
                type="button"
                value="o"
                onClick={(e: any) => console.log(e.target.value)}
            >
                o
            </button>
            <button
                type="button"
                value="p"
                onClick={(e: any) => console.log(e.target.value)}
            >
                p
            </button>
        </div>
        <div className="keyboard__secondRow">
            <button
                type="button"
                value="a"
                onClick={(e: any) => console.log(e.target.value)}
            >
                a
            </button>
            <button
                type="button"
                value="s"
                onClick={(e: any) => console.log(e.target.value)}
            >
                s
            </button>
            <button
                type="button"
                value="d"
                onClick={(e: any) => console.log(e.target.value)}
            >
                d
            </button>
            <button
                type="button"
                value="f"
                onClick={(e: any) => console.log(e.target.value)}
            >
                f
            </button>
            <button
                type="button"
                value="g"
                onClick={(e: any) => console.log(e.target.value)}
            >
                g
            </button>
            <button
                type="button"
                value="h"
                onClick={(e: any) => console.log(e.target.value)}
            >
                h
            </button>
            <button
                type="button"
                value="j"
                onClick={(e: any) => console.log(e.target.value)}
            >
                j
            </button>
            <button
                type="button"
                value="k"
                onClick={(e: any) => console.log(e.target.value)}
            >
                k
            </button>
            <button
                type="button"
                value="l"
                onClick={(e: any) => console.log(e.target.value)}
            >
                l
            </button>
            <button
                type="button"
                value="ñ"
                onClick={(e: any) => console.log(e.target.value)}
            >
                ñ
            </button>
        </div>
        <div className="keyboard__thirdRow">
            <button
                type="button"
                value=""
                onClick={(e: any) => console.log(e.target.value)}
            >
                ENTER
            </button>
            <button
                type="button"
                value="z"
                onClick={(e: any) => console.log(e.target.value)}
            >
                q
            </button>
            <button
                type="button"
                value="x"
                onClick={(e: any) => console.log(e.target.value)}
            >
                x
            </button>
            <button
                type="button"
                value="c"
                onClick={(e: any) => console.log(e.target.value)}
            >
                c
            </button>
            <button
                type="button"
                value="v"
                onClick={(e: any) => console.log(e.target.value)}
            >
                v
            </button>
            <button
                type="button"
                value="b"
                onClick={(e: any) => console.log(e.target.value)}
            >
                b
            </button>
            <button
                type="button"
                value="n"
                onClick={(e: any) => console.log(e.target.value)}
            >
                n
            </button>
            <button
                type="button"
                value="m"
                onClick={(e: any) => console.log(e.target.value)}
            >
                m
            </button>
            <button
                type="button"
                value=""
                onClick={(e: any) => console.log(e.target.value)}
            >
                {"<-"}
            </button>
        </div>
    </div>
  )
}

export default Keyboard