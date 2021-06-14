
// eslint-disable-next-line no-unused-vars
import Chart from './Pie';

export interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  id?: string;
  className?: string;
  height?: number;
  width?: number;
  redraw?: boolean;
  type: any;
  data: any;
  options?: [];
  fallbackContent?: React.ReactNode;
  plugins?: any[];
  getDatasetAtEvent?: (
    dataset: Array<{}>,
    event: React.MouseEvent<HTMLCanvasElement>
  ) => void;
  getElementAtEvent?: (
    element: [{}],
    event: React.MouseEvent<HTMLCanvasElement>
  ) => void;
  getElementsAtEvent?: (
    elements: Array<{}>,
    event: React.MouseEvent<HTMLCanvasElement>
  ) => void;
}