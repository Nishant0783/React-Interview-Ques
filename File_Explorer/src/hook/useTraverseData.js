const useTraverseData = () => {
    const insertNode = function(tree, folderId, item, isFolder) {
        // console.log("folder id: ", folderId)
        console.log("tree in hook", tree)
        // console.log("item in hook", item)
        console.log("inserNode")
        if(tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder: isFolder,
                items: []
            });

            return tree;
        }

        let latestNode = [];
        latestNode = tree.items.map((treeItem) => {
            // console.log("item in latestNode is:", treeItem) 
            console.log("latestNode")
            return insertNode(treeItem, folderId, item, isFolder)
        });
        console.log("latest node: ", latestNode)

        return {...tree, items: latestNode}
            
    }

    return { insertNode }
}

export default useTraverseData;

