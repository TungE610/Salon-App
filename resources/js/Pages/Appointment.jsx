import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Table } from 'antd';

export default function Appointment({ auth }) {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Customber Name',
            dataIndex: 'customberName',
        },
        {
            title: 'customber ID',
            dataIndex: 'customberId',
        },
        {
            title: 'Stylist Name',
            dataIndex: 'stylistName',
        },
        {
            title: 'Stylist ID',
            dataIndex: 'stylistId',
        },
        {
            title: 'Time',
            dataIndex: 'time',
        },
        {
            title: 'Place',
            dataIndex: 'place',
        },
        {
            title: 'Created at',
            dataIndex: 'createdAt',
        },
    ];
    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
        >
            <Head title="Appointment" />

            <div className="py-10">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5 px-5">
                        <div>
                            <div
                                style={{
                                    marginBottom: 16,
                                }}
                            >
                                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                                    Reload
                                </Button>
                                <span
                                    style={{
                                        marginLeft: 8,
                                    }}
                                >
                                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                                </span>
                            </div>
                            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
