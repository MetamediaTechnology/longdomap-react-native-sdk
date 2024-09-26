import { Const } from './lib/Const';
import MapView from './lib/Map';
const Longdo = {
    set server(value) {
        Const.server = value;
    },
    set bundleId(value) {
        Const.bundleId = value;
    },
    set apiKey(value) {
        Const.apiKey = value;
    },
    static: (type, name) => ({
        $static: type,
        name: name,
    }),
    object: (type, ...args) => ({
        $object: type,
        $id: ++Const.objectcount,
        args: args,
    }),
    function: (detail) => ({
        $function: detail,
    }),
    isSameObject: (a, b) => a.$id === b.$id,
    MapView: MapView,
};
Const.init();
export default Longdo;
