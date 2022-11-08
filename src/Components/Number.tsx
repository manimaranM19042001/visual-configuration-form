import * as React from 'react';
import { SpinButton, ISpinButtonStyles, Position } from '@fluentui/react';
import { Flex } from "@tremor/react";

// By default the field grows to fit available width. Constrain the width instead.
const styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };

export const SpinButtonTopPositionExample: React.FunctionComponent<any> = (props: any) => {
  return (
    <Flex>
      <h3>{props.Title}</h3>
      <SpinButton
        label={props.label}
        labelPosition={Position.top}
        defaultValue={props.defaultValue}
        min={props.minValue}
        max={props.maxValue}
        step={props.stepValue}
        incrementButtonAriaLabel="Increase value by 1"
        decrementButtonAriaLabel="Decrease value by 1"
        styles={styles}
      />
    </Flex>
  );
};