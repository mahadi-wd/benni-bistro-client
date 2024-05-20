

const SplitFoodCagegory = ({items, itemNum}) => {

    const chunk = []
    for(let i = 0; i < items.length; i += itemNum){
        chunk.push(items.slice(i, i + itemNum))
    }
        
    return chunk;
};

export default SplitFoodCagegory;