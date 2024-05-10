/**
 *  * https://github.com/tongyy/react-native-draggable
 *
 */
import React from 'react';
import {GestureResponderEvent, PanResponderGestureState} from 'react-native';

export interface IDraggableProps {
  /**** props that should probably be removed in favor of "children" */
  renderText?: string;
  isCircle?: boolean;
  renderSize?: number;
  imageSource?: number;
  renderColor?: string;
  /**** */
  children?: React.ReactNode;
  shouldReverse?: boolean;
  disabled?: boolean;
  debug?: boolean;
  animatedViewProps?: object;
  touchableOpacityProps?: object;
  onDrag?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => void;
  onShortPressRelease?: (event: GestureResponderEvent) => void;
  onDragRelease?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    bounds: {left: number; top: number; right: number; bottom: number},
  ) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onRelease?: (event: GestureResponderEvent, wasDragging: boolean) => void;
  onReverse?: () => {x: number; y: number};
  x?: number;
  y?: number;
  z?: number;
  minX?: number;
  minY?: number;
  maxX?: number;
  maxY?: number;
}

declare const defaultProps: Pick<
  IDraggableProps,
  | 'renderText'
  | 'renderSize'
  | 'shouldReverse'
  | 'disabled'
  | 'debug'
  | 'onDrag'
  | 'onShortPressRelease'
  | 'onDragRelease'
  | 'onLongPress'
  | 'onPressIn'
  | 'onPressOut'
  | 'onRelease'
  | 'x'
  | 'y'
  | 'z'
>;

declare function Draggable(
  props: IDraggableProps & typeof defaultProps,
): JSX.Element;

export default Draggable;
