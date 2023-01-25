// action type 을 정의한다
export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_DEL = 'ITEM_DEL';

const itemAction = () => {

    // action 객체를 만들어주는 action creator 함수를 정의한다
    const itemAdd = (newItem) => {
        return {
            type: ITEM_ADD,
            newItem: newItem,
        }
    };

    const itemDel = (itemId) => {
        return {
            type: ITEM_DEL,
            itemId: itemId,
        }
    };

}

export default itemAction;
