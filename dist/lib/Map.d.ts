import { Component } from 'react';
interface MapViewProps {
    language?: string;
    [key: string]: string | number | boolean | object | undefined;
    layer?: string;
    zoom?: number;
    zoomRange?: number[];
    location?: {
        lon: number;
        lat: number;
    };
    ui?: object;
    lastView?: boolean;
}
export default class MapView extends Component<MapViewProps> {
    #private;
    static defaultProps: {
        language: string;
    };
    render(): import("react/jsx-runtime").JSX.Element;
    call(method: string, ...args: any[]): Promise<any>;
    objectCall(object: string, method: string, ...args: any[]): Promise<any>;
    run(script: string): void;
}
export {};
