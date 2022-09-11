import { AutoComplete, Button, Form, Input, InputNumber, Popconfirm, Space, Table, Typography } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { db, auth } from "../firebase-config";
import { doc, updateDoc, deleteField, getDoc, setDoc } from "firebase/firestore";

let originData;
const getData = async (key) => {
  originData = getDoc(doc(db, "users", auth.user.uid))
};

const deleteService = async (key) => {
  updateDoc(doc(db, "users", auth.user.uid), {key: deleteField()})
};


//const [newService, setNewService] = useState("");
//const [newDate, setNewDate] = useState("");
//const [newPrice, setNewPrice] = useState("");


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Manage = () => {
  getData();
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [dataSource, setDataSource] = useState(originData);
  const [count, setCount] = useState(5);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      service: '',
      date: '',
      price: 0.00,
      ...record,
    });
    setEditingKey(record.key);
  };

  const handleAdd = () => {
    debugger;
    const newData = {
      key: count,
      service: "Subscription Name",
      date: 'MM/DD/YYYY',
      price: 0.00,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Subscription Service',
      dataIndex: 'service',
      editable: true,
    },
    {
      title: 'Last Used',
      dataIndex: 'date',
      editable: true,
      defaultSortOrder: 'descend'
    },
    {
      title: 'Price Per Month',
      editable: true,
      dataIndex:'price',
    },
    {
      title: 'Actions',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
            <div>
              <Space size='large'>
                <EditOutlined key="edit" onClick={() => {
                  edit(record);
                }} />
                <DeleteOutlined key="delete" onClick={() => {
                  deleteService(record.key);
                  handleDelete(record.key);
                }}/>
              </Space>
            </div>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        style={{paddingTop: "5%", width: "60%", margin: "auto", fontSize: "70%"}}
      />
      <Button
        onClick={handleAdd}
        type="primary"
        size="large"
        style={{
          margin: "0 auto",
          display: "block",
          backgroundColor: "#042c60",
          fontSize: "15px"
        }}
      >
        Add a new subscription
      </Button>
    </Form>
  );
};

export default Manage;