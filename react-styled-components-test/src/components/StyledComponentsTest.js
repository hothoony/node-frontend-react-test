import MyButtonA from "./MyButtonA";
import MyButtonB from "./MyButtonB";

function StyledComponentsTest() {
    return (
        <>
            <h2>StyledComponentsTest</h2>
            <div>
                <h3>MyButtonA</h3>
                <div>
                    <MyButtonA>MyButtonA 1</MyButtonA>
                    <MyButtonA color={'red'}>MyButtonA 2</MyButtonA>
                    <MyButtonA background={'blue'}>MyButtonA 3</MyButtonA>
                    <MyButtonA color={'yellow'} background={'green'}>MyButtonA 4</MyButtonA>
                </div>
            </div>
            <div>
                <h3>MyButtonB</h3>
                <div>
                    <MyButtonB>MyButtonB 1</MyButtonB>
                    <MyButtonB color={'red'}>MyButtonB 2</MyButtonB>
                    <MyButtonB background={'blue'}>MyButtonB 3</MyButtonB>
                    <MyButtonB color={'yellow'} background={'green'}>MyButtonB 4</MyButtonB>
                </div>
                <div>
                    <MyButtonB primary>MyButtonB primary</MyButtonB>
                    <MyButtonB secondary>MyButtonB secondary</MyButtonB>
                </div>
            </div>
        </>
    );
}

export default StyledComponentsTest;
