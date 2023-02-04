import { dataList } from "../data/dataList";

function ArrayRender01_noComp() {

    return (
        <div>
            <h3>ArrayRender01_noComp</h3>
            <div>
                {
                    dataList.map(item => {
                        return (
                            <div>
                                <span>userId={item.userId}</span>
                                <span>, userName={item.userName}</span>
                                <span>, age={item.age}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ArrayRender01_noComp;
