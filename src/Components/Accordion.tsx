//Accordion.tsx
import { ColorPicker, DropdownMenuItemType, Label, Slider } from "@fluentui/react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    AccordionList, Card
} from "@tremor/react";
import { ColorPickerComponent } from "./ColorPicker";
import { DropdownControlledExample } from "./DropDown";
import { SpinButtonTopPositionExample } from "./Number";
import NumberInput from "./NumberInput";
import { SliderBasicExample } from "./Slider";
import { RangeComponent } from "./SliderRange";
import TextInput from "./TextInput";
// import ReactSlider from "react-slider";
import { ToggleBasicExample } from "./Toggle";
import Data from '../charts.json'
import { useEffect, useState } from "react";
export default (props: any) => {
    const forDisplay = [
        // { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
        { key: 'auto', text: 'Auto' },
        { key: 'margin', text: 'Margin' },
        // { key: 'padding', text: 'Padding', disabled: true },
        { key: 'padding', text: 'Padding' }
        // { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider }
    ];
    const forDensity = [
        { key: 'all', text: "All" },
        { key: 'none', text: 'None' }
    ]

    type TXAxisLabelDisplay = 'auto' | 'rotated' | 'stepped' | 'off'; // need to discuss
    type TXAxisLabelDensity = 'all' | 'nth' | 'nthAndLast' | 'first' | 'last' | 'firstAndLast';
    interface IXAxisLabelOptions {
        enabled: boolean;
        fontColor: string;
        /** @remarks don't consume it directly. Since the font size can be null, use AxisService.getXAxisOptions() to get the font size. * */
        fontSize: number | any;
        display: TXAxisLabelDisplay;
        density: TXAxisLabelDensity;
        step: number; // Step count. Max 3 steps
        rotation: number; // Rotation angle. When Label rotation = Auto, The labels will switch between 0 or -25 degree rotation based on the space available
        interval: number; // Nth label. To show axis labels in a particular interel. (i.e) 1,5,10,15,20,25
        wordWrap: boolean;
        maxHeight: number;
        maxWidth: number;
        padding: number | any; // Denotes bottom padding
        offset: number;
    }

    interface IXAxisTitleOptions {
        enabled: boolean;
        fontColor: string;
        /** @remarks don't consume it directly. Since the font size can be null, use AxisService.getXAxisOptions() to get the font size. * */
        fontSize: number | any;
        text: string;
    }
    interface IXAxisOptions {
        enabled: boolean;
        label: IXAxisLabelOptions;
        title: IXAxisTitleOptions;
        categoryWidth: string;
        innerPadding: number;
        maxHeight?: number | any;
        maxWidth?: number;
        minWidth?: number;
        axisLineWidth: number;
        maxCategoryCount?: number | any; // By default it will be undefined.
        offset?: number | any; // Denotes max label height in px (applied to main chart having AC, PY..). By default null.
        isDefaultValue?: boolean;
    }

    const [source, setSource] = useState<IXAxisOptions>({
        "enabled": false,
        "label": {
            "enabled": true,
            "fontColor": "#607E5C",
            "fontSize": null,
            "display": "auto",
            "density": "all",
            "step": 2,
            "rotation": 0,
            "interval": 1,
            "wordWrap": true,
            "maxHeight": 30,
            "maxWidth": 25,
            "padding": null,
            "offset": 0
        },
        "title": {
            "enabled": false,
            "fontColor": "#605E5C",
            "fontSize": null,
            "text": ""
        },
        "categoryWidth": "auto",
        "innerPadding": 30,
        "maxHeight": null,
        "minWidth": 18,
        "axisLineWidth": 1,
        "maxCategoryCount": null,
        "offset": null,
        "isDefaultValue": true
    }
    )
    // const[bool,setBool]=useState<any>()
    // function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
    //     console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    //     setBool(checked)
    //     setSource({...source,enabled:bool})
    //     console.log(source)
    // }
    return (
        <Card maxWidth="max-w-3xl">
            <AccordionList //The AccordionList is optional
                shadow={true}
                marginTop="mt-0"
            >
                <Accordion
                    expanded={false}
                    shadow={true}
                    marginTop="mt-0">
                    <AccordionHeader><h3 style={{margin: 0 }}>X-Axis</h3> </AccordionHeader>
                    <div style={{ backgroundColor: '#c8cbcf' }}>
                        <AccordionBody>
                            <ToggleBasicExample Title='Enable' onTextValue='On' offTextValue="Off" Checking={Data.xAxis.enabled} />
                            <Accordion //Label
                                expanded={false}
                                shadow={true}
                                marginTop="mt-0" >
                                    <AccordionHeader>Label</AccordionHeader>

                                <div style={{ backgroundColor: '#c8cbcf', padding: '50px' }}>
                                    <AccordionBody>
                                        <ToggleBasicExample Title='Enable' onTextValue='On' offTextValue="Off" Checking={Data.xAxis.label.enabled} />
                                        <ColorPickerComponent Title='Color' Color={Data.xAxis.label.fontColor} />
                                        <RangeComponent Title='Font-Size' minValue={10} maxValue={50} stepValue={1} defaultValue={10} />
                                        <DropdownControlledExample Title='Diplay' Values={forDisplay} />
                                        <DropdownControlledExample Title='Density' Values={forDensity} />
                                        <NumberInput Title='Step' defaultValue={2} minValue={1} maxValue={5} stepValue={1} />
                                        <RangeComponent Title='Rotation' minValue={0} maxValue={360} stepValue={1} defaultValue={8} />
                                        <NumberInput Title='Interval' defaultValue={2} minValue={1} maxValue={5} stepValue={1} />
                                        <ToggleBasicExample Title='WordWrap' onTextValue='True' offTextValue="False" />
                                        <RangeComponent Title='Max-Height' minValue={20} maxValue={50} stepValue={1} defaultValue={30} />
                                        <RangeComponent Title='Min-Height' minValue={20} maxValue={50} stepValue={1} defaultValue={25} />
                                        <NumberInput Title='Padding' defaultValue={2} minValue={0} maxValue={20} stepValue={1} />
                                        <NumberInput Title='Offset' defaultValue={2} minValue={0} maxValue={15} stepValue={1} />
                                    </AccordionBody>
                                </div>
                            </Accordion>
                            <Accordion //Title
                                expanded={false}
                                shadow={true}
                                marginTop="mt-0" >
                                    <AccordionHeader>Title</AccordionHeader>

                                <div style={{ backgroundColor: '#c8cbcf' }}>
                                    <AccordionBody>
                                        <ToggleBasicExample Title='Enable' onTextValue='On' offTextValue="Off" />
                                        <ColorPickerComponent Title='Color' />
                                        <RangeComponent Title='Font-Size' minValue={10} maxValue={50} stepValue={1} defaultValue={10} />

                                        <TextInput Title='Text' />
                                    </AccordionBody>
                                </div>
                            </Accordion>
                            <DropdownControlledExample Title='Category Width' Values={forDisplay} />
                            <NumberInput Title='Inner Padding' defaultValue={10} minValue={0} maxValue={30} stepValue={1} />
                            <RangeComponent Title='Max-Height' minValue={20} maxValue={50} stepValue={1} defaultValue={30} />
                            <RangeComponent Title='Min-Height' minValue={20} maxValue={30} stepValue={1} defaultValue={25} />

                            <NumberInput Title='Axis Line Width' defaultValue={1} minValue={0} maxValue={10} stepValue={1} />
                            <NumberInput Title='Max Category Count' defaultValue={2} minValue={0} maxValue={15} stepValue={1} />
                            <NumberInput Title='Offset' defaultValue={2} minValue={0} maxValue={15} stepValue={1} />
                            <ToggleBasicExample Title='is Default Value' onTextValue='True' offTextValue="False" />
                        </AccordionBody>
                    </div>
                </Accordion>
            </AccordionList>
        </Card>
    )
}


