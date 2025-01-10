import { Component } from 'react';
interface MapViewProps {
    language?: string;
    [key: string]: any;
    layer?: any;
    zoom?: number;
    zoomRange?: any;
    location?: {
        lon: number;
        lat: number;
    };
    ui?: any;
    lastView?: boolean;
}
export default class MapView extends Component<MapViewProps> {
    #private;
    static defaultProps: {
        language: string;
        layer: string;
        zoom: number;
        zoomRange: number[];
        location: {
            lon: number;
            lat: number;
        };
        ui: {};
        lastView: boolean;
    };
    render(): import("react/jsx-runtime").JSX.Element;
    call(method: string, ...args: any[]): Promise<any>;
    objectCall(object: string, method: string, ...args: any[]): Promise<any>;
    run(script: string): void;
}
export {};
