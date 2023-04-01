/**
 * 使用射线法，判断一个坐标点是否在封闭图形内部
 * 射线法的基本思想是从这个点（假设为P）向任意一个方向（假设为向右）发射一条射线，
 * 然后统计这条射线与图形的交点数量，如果为奇数，说明P在图形内部；如果为偶数，说明P在图形外部。
 * @param point 点坐标，对象结构为{x:0, y:0}
 * @param points 点坐标集，构成一个封闭图形。对象数组，每个元素为{x:0, y:0}对象
 * @param scale 缩放比例
 * @param offsetX 横坐标偏移量
 * @param offsetY 纵坐标偏移量
 * @returns {boolean} 是否在该封闭图形内部
 */
const isPointInPolygon = (point, points, scale, offsetX, offsetY) => {
    let n = points.length;
    let inside = false;
    // point.x = calRealPosition(point.x, scale, offsetX)
    // point.y = calRealPosition(point.y, scale, offsetY)
    for (let i = 0, j = n - 1; i < n; j = i++) {
        let xi = calRealPosition(points[i].x, scale, offsetX),
            yi = calRealPosition(points[i].y, scale, offsetY);
        let xj = calRealPosition(points[j].x, scale, offsetX),
            yj = calRealPosition(points[j].y, scale, offsetY);
        let intersect = ((yi > point.y) !== (yj > point.y))
            && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

const calRealPosition = (value, scale, offset) => {
    return value * scale + offset
}
const getImage = (name) => {
    return require(`../imgs/${name}`)
}

/**
 * 安全地访问对象内的属性，以防出现访问object.a.b.c时，由于object.a未定义，导致访问object.a.b报错
 * @param object 对象
 * @param path 访问路径
 * @returns {any} 如果不能到达，则返回undefined
 */
const accessObjectSafely = (object, path) => {
    let i, n = path.length;
    if (!object) return object
    let data = JSON.parse(JSON.stringify(object));
    for (i = 0; typeof data === 'object' && i < n; ++i) {
        data = data[path[i]];
    }
    return data
}

/**
 * 递归合并两个对象，若object1中某字段不存在或为null或undefined，则用object2中的字段补全
 * @param object1 对象1
 * @param object2 用对象2补全
 * @returns {*} 补全后的对象
 */
const mergeObjects = (object1, object2) => {
    const mergedObject = {...object1};
    for (const key in object2) {
        if (object2.hasOwnProperty(key)) {
            if (isObject(object1[key]) && isObject(object2[key])) {
                mergedObject[key] = mergeObjects(object1[key], object2[key]);
            } else if (mergedObject[key] == null) {
                mergedObject[key] = object2[key];
            }
        }
    }
    return mergedObject;
};
const isObject = (item) => {
    return item && typeof item === 'object' && !Array.isArray(item);
};

export default {
    isPointInPolygon,
    getImage,
    accessObjectSafely,
    mergeObjects
}