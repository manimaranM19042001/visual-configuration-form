import { FC, ReactElement } from 'react';
// @ts-ignore
export const RecursionComponent: FC<any> = ({ arrOfObject }): ReactElement => {
    return (
        <>

            {arrOfObject.map((element: any, index: number) => {
                if (element.childrens) {
                    return (
                        <>
                            <h2 style = {{color : 'blue'}}>This is an accordion : {element.title}</h2>
                            {<RecursionComponent arrOfObject={element.childrens} />}
                            <br />
                        </>
                    )
                }
                else {
                    return (
                        <>
                            <h2>This is an element : {element.title}</h2>
                            <p>This is the body : {element.title}</p>
                            <br />
                        </>
                    )
                }
            })}
        </>
    )
}
