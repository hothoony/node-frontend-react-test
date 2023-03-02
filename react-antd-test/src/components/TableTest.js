import React, { useEffect, useState } from 'react';
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const TableTest = () => {

    const [select, setSelect] = useState({
        selectedRowKeys: [],
        loading: false,
    });
    const { selectedRowKeys, loading } = select;

    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(0);

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log('onSelectAll');
            console.log('selected', selected);
            console.log('selectedRows', selectedRows);
            console.log('changeRows', changeRows);
            setSelect({...select, selectedRowKeys});
        },
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('onChange');
            console.log('selectedRowKeys', selectedRowKeys);
            console.log('selectedRows', selectedRows);
            setSelect({...select, selectedRowKeys});
        },
    };

    const columns = [
        {title: 'uid' , dataIndex: 'uid' , },
        {title: 'Name', dataIndex: 'name', render: (text) => <a>{text}</a>},
        {title: 'Age' , dataIndex: 'age' , },
        {title: 'Addr', dataIndex: 'addr', },
        {title: 'Action', dataIndex: '', render: (record) => {
            return (
                <>
                    <EditOutlined onClick={() => onEditRow(record)} />
                    <DeleteOutlined onClick={() => onDeleteRow(record)} />
                </>
            );
        }},
    ];

    const loadData = () => {
        console.log('## loadData');

        let dataSize = 17;
        // let dataSize = 0;

        const data = [];
        for (let i = 0; i < dataSize; i++) {
            data.push({
                uid: `${i}`,
                name: `홍길동 ${i}`,
                age: 32,
                addr: `서울시 마포구 마포대로 ${i}`,
            });
        }

        setDataSource(data);
        setCount(data.length);

        setSelect([]);
    };

    
    const init = () => {
        console.log('## init');
        loadData();
    }

    let isRunInit = false;
    useEffect(() => {
        if (isRunInit) return;
        init();
        isRunInit = true;
        return () => {};
    }, []);


    const deleteRow = (record) => {
        setDataSource((pre) => {
            return pre.filter(row => row.uid !== record.uid);
        });
    };

    const onEditRow = (record) => {
        console.log('onEditRow', record);
    };

    const onDeleteRow = (record) => {
        console.log('onDeleteRow', record);
        deleteRow(record);
    };

    const handleLoadData = () => {
        console.log('handleLoadData');
        loadData();
    }

    const handleAdd = (e) => {
        console.log('handleAdd');

        let i = dataSource.length + 1;
        const newData = {
            uid: `${i}`,
            name: `홍길동 ${i}`,
            age: 32,
            addr: `서울시 마포구 마포대로 ${i}`,
        };

        setDataSource([newData, ...dataSource]);
        setCount(dataSource.length);
    };

    const handleDel = (e) => {
        console.log('handleDel');
        console.log('select', select);
        for (let record of select.selectedRowKeys) {
            console.log('record', record);
            setDataSource((pre) => {
                // return pre.filter(row => row.uid !== record.uid);
                return pre.filter(row => row.uid !== record);
            });
        }
    };

    const handleShowDataSource = (e) => {
        console.log('handleShowDataSource');
        console.log('dataSource', dataSource);
    }

    const handleGetCheckedRows = (e) => {
        console.log('handleGetCheckedRows');
        console.log('select', select);
    }

    const handleClearChecked = () => {
        console.log('handleClearChecked');
        setSelect({selectedRowKeys: []});
        setSelect({selectedRowKeys: [1, 3]});
        // setSelect([]);
    }

    return (
        <div className="HERE2" style={{
            width: '100%',
        }}>
            <div>
                <Button onClick={handleLoadData}>load Data</Button>
                <Button onClick={handleAdd}>Add row</Button>
                <Button onClick={handleDel}>Delete checked rows</Button>
            </div>
            <div>
                <Button onClick={handleGetCheckedRows}>get checked rows</Button>
                <Button onClick={handleShowDataSource}>show dataSource</Button>
                <Button onClick={handleClearChecked}>clear checked</Button>
            </div>
            <div>
                총 {dataSource.length} 건
            </div>
            <Table
                rowKey={'uid'}
                columns={columns}
                dataSource={dataSource}
                rowSelection={rowSelection}
                pagination={{
                    // position: 'bottom center',
                    alignmentBottom: 'center',
                    showQuickJumper: false,
                    // pageSize: 10,
                    showSizeChanger: false,
                    showTotal: (total, range) => {
                        return `총 ${total} 건`;
                        // return total;
                        // return `${range[0]} - ${range[1]} of ${total}`;
                        // return <div>{range[0]} - {range[1]} of {total}</div>;
                    },
                }}
            ></Table>
        </div>
    );
}

export default TableTest;
