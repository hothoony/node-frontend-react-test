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

function ArrayRender02_useComp() {
    return (
        <div>
            <h3>ArrayRender02_useComp</h3>
            <div>
                {
                    dataList.map(item => (
                        <User user={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default ArrayRender02_useComp;
