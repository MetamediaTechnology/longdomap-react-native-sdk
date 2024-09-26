import MapView from './lib/Map';
type StaticType = {
    $static: string;
    name: string;
};
type ObjectType = {
    $object: string;
    $id: number;
    args: any[];
};
type FunctionType = {
    $function: string;
};
declare const Longdo: {
    server: string;
    bundleId: string;
    apiKey: string;
    static: (type: string, name: string) => StaticType;
    object: (type: string, ...args: any[]) => ObjectType;
    function: (detail: string) => FunctionType;
    isSameObject: (a: {
        $id: number;
    }, b: {
        $id: number;
    }) => boolean;
    MapView: typeof MapView;
};
export default Longdo;
