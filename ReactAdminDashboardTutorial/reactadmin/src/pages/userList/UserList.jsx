import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 150, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 150 },
        {
            field: 'status',
            headerName: 'Status',
            width: 80,
        },
        {
            field: 'transaction',
            headerName: 'Transaction volumn',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            filed: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button className="userListEdit">Edit</button>
                        <DeleteOutline className="userListDelete" />
                    </>
                );
            }
        }
    ];

    const userRows = [
        {
            id: 1,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 2,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 3,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 4,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 5,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 6,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 7,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 8,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 9,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
        {
            id: 10,
            username: "Jon Snow",
            avatar:
                "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
        },
    ];

    return (
        <div className="userList">

            <DataGrid
                rows={userRows}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
