import { dataList } from "../data/dataList";

function User({user}) {
    return (
        <div>
            <span>userId={user.userId}</span>
            <span>, userName={user.userName}</span>
            <span>, age={user.age}</span>
        </div>
    );
}

function ArrayRender04_useComp_useKey() {
    return (
        <div>
            <h3>ArrayRender04_useComp_useKey</h3>
            <div>
                {
                    dataList.map(item => (
                        <User user={item} key={item.userId} /> /* key 를 사용 */
                    ))
                }
            </div>
        </div>
    );
}

export default ArrayRender04_useComp_useKey;
