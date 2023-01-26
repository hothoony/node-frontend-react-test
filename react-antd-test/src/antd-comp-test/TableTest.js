import React, { useEffect, useState } from 'react';
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const TableTest = () => {

    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(0);

    let checkedRows = [];

    const rowSelection = {
        // selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('selectedRowKeys', selectedRowKeys);
            console.log('selectedRows', selectedRows);
            checkedRows = selectedRows;
        },
    };

    const columns = [
        {title: 'rowId' , dataIndex: 'uid' , },
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

    const data = [];
    const loadData = () => {
        console.log('## loadData');

        // const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                uid: `${i}`,
                name: `홍길동 ${i}`,
                age: 32,
                addr: `서울시 마포구 마포대로 ${i}`,
            });
        }
        setDataSource(data);
        setCount(data.length);
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
        console.log('checkedRows', checkedRows);
        for (let record of checkedRows) {
            console.log('record', record);
            setDataSource((pre) => {
                return pre.filter(row => row.uid !== record.uid);
            });
        }
    };

    const handleShowDataSource = (e) => {
        console.log('handleShowDataSource');
        console.log('dataSource', dataSource);
    }

    const handleGetCheckedRows = (e) => {
        console.log('handleGetCheckedRows');
        console.log('checkedRows', checkedRows);
    }

    return (
        <div className="HERE2" style={{
            width: '100%',
        }}>
            <div>
                <Button onClick={handleAdd}>Add row</Button>
                <Button onClick={handleDel}>Delete checked rows</Button>
            </div>
            <div>
                <Button onClick={handleGetCheckedRows}>get checked rows</Button>
                <Button onClick={handleShowDataSource}>show dataSource</Button>
            </div>
            <Table
                rowKey="uid"
                columns={columns}
                dataSource={dataSource}
                rowSelection={rowSelection}
            ></Table>
        </div>
    );
}

export default TableTest;
