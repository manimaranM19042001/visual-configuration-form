import { FC, ReactElement } from 'react';
// @ts-ignore
export const Component: FC<any> = ({ arrOfObject }): ReactElement => {
    return (
        <>
            {arrOfObject.map((element: any, index: number) => {
                if (element.childrens) {
                    return (
                        <>
                            <div key={index}>
                                <h2 style={{ color: 'blue' }}>This is an accordion : {element.title}</h2>
                                {<Component arrOfObject={element.childrens}/>}
                                <br />
                            </div>

                        </>
                    )
                }
                else {
                    return (
                        <>
                            <div key={index}>
                                <h2>This is an element : {element.title}</h2>
                                <p>This is the body : {element.title}</p>
                                <br />
                            </div>

                        </>
                    )
                }
            })}
        </>
    )
}