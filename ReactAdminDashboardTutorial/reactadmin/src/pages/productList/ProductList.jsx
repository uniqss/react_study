import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 150, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 150 },
        {
            field: 'status',
            headerName: 'Status',
            width: 80,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            filed: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id} ><button className="userListEdit">Edit</button></Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid
                // rows={userRows}
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
