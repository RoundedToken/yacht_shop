export function buildHierarchy(arr) {
    var roots = [],
        children = {};

    // find the top level nodes and hash the children based on parent
    for (var i = 0, len = arr.length; i < len; ++i) {
        var item = arr[i],
            p = item.parentid,
            target = p === null ? roots : children[p] || (children[p] = []);

        target.push({
            id: item.id,
            parentId: item.parentid,
            routes: [{ id: item.id, name: item.name }],
            name: item.name,
            brands: item.brands,
        });
    }

    // function to recursively build the tree
    var findChildren = function (parent) {
        if (children[parent.id]) {
            parent.children = children[parent.id];
            parent.routes.forEach((r) => (r.hasChildren = true)); //Add hasChildren for routes
            children[parent.id].forEach((item) => {
                if (item.brands) parent.brands.push(item.brands);
                item.routes.unshift(...parent.routes); //Create routes
            });
            for (var i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

    // enumerate through to handle the case where there are multiple roots
    for (var i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }

    return roots;
}
