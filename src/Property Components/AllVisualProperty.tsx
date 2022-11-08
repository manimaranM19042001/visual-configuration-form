//Accordion.tsx
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    AccordionList, Card
} from "@tremor/react";
import { SliderBasicExample } from "../Components/Slider";
export default (props: any) => (
    <Card maxWidth="max-w-3xl">
        <AccordionList //The AccordionList is optional
            shadow={true}
            marginTop="mt-0"
        >
            <Accordion
                expanded={false}
                shadow={true}
                marginTop="mt-0">
                <AccordionHeader> <h4 style={{margin : 0}}>All Visual Property</h4> </AccordionHeader>
                <AccordionBody>
                    <SliderBasicExample />
                </AccordionBody>
            </Accordion>
        </AccordionList>
    </Card>
);