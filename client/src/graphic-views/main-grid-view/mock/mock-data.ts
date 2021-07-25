export function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ): Data {
    return { name, calories, fat, carbs, protein };
}

export interface Data {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

export interface MainGridViewDataRow {
    itemsPurchased: number;
    customerGender: string;
    customerAge: number;
    customerEmail: string;
    customerSatisfaction: string;
    purchaseMethod: string;
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof MainGridViewDataRow;
    label: string;
    numeric: boolean;
}

export const headCells: HeadCell[] = [
    { id: 'itemsPurchased', numeric: false, disablePadding: true, label: 'Items Purchased' },
    { id: 'customerGender', numeric: true, disablePadding: false, label: 'Customer Gender' },
    { id: 'customerAge', numeric: true, disablePadding: false, label: 'Customer Age' },
    { id: 'customerEmail', numeric: true, disablePadding: false, label: 'Customer Email' },
    { id: 'customerSatisfaction', numeric: true, disablePadding: false, label: 'Customer Satisfaction' },
    { id: 'purchaseMethod', numeric: true, disablePadding: false, label: 'Purchase Method' }
];

export const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];