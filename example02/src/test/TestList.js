import { useState } from "react";

const TestList = () => {

    const [ list, setList ] = useState([
        {id: 1, title: 'title 1', content: 'content a'},
        {id: 2, title: 'title 2', content: 'content b'},
        {id: 3, title: 'title 3', content: 'content c'}
    ]);

    return (
        <div>
            <h2>TestList</h2>
            {list.map(item => (
                        <div key={ item.id }>
                            <span>{ item.id }</span>
                            <span>{ item.title }</span>
                            <span>{ item.content }</span>
                        </div>
                    ))}
        </div>
    );
}
 
export default TestList;