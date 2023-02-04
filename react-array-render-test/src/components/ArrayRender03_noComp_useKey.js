import { dataList } from "../data/dataList";

function ArrayRender03_noComp_useKey() {
    return (
        <div>
            <h3>ArrayRender03_noComp_useKey</h3>
            <div>
                {
                    dataList.map(item => {
                        return (
                            <div key={item.userId}>{/* key 를 사용 */}
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

export default ArrayRender03_noComp_useKey;
