import React, { useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useStore } from '../../../store/rootStore';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const OrderList = () => {

    const { rootStore: { orderStore } } = useStore()

    const initTable = async () => {
        try {
            const resData = await orderStore.fetchList()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        initTable()
    }, []);


    return (
        <div style={{ height: 500, width: '100%' }}>
            <Button variant="contained" sx={{ mb: 2 }} component={Link} to="create">Create</Button>
            <DataGrid
                rows={orderStore.rowData}
                columns={orderStore.columns}
                initialState={{
                pagination: { paginationModel: { page: 0, pageSize: 5} },
                }}
                pageSizeOptions={[5, 10, 25]}
            />
    </div>
    );
}


export default observer(OrderList) 