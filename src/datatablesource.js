export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: params => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="" className="cellImg" alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: params => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Prahladtimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "active",
    email: "prahladtimalsina7@gmail.com",
    age: 29,
  },
  {
    id: 2,
    username: "amrittimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "passive",
    email: "amrit@gmail.com",
    age: 29,
  },
  {
    id: 3,
    username: "bidurtimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "pending",
    email: "bidurtimalsina7@gmail.com",
    age: 29,
  },
  {
    id: 4,
    username: "ramtimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "active",
    email: "ramtimalsina7@gmail.com",
    age: 29,
  },
  {
    id: 5,
    username: "gangatimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "passive",
    email: "gangatimalsina7@gmail.com",
    age: 29,
  },
  {
    id: 6,
    username: "Prahladtimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "active",
    email: "prahladtimalsina7@gmail.com",
    age: 29,
  },
  {
    id: 7,
    username: "amrittimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "passive",
    email: "amrit@gmail.com",
    age: 29,
  },
  {
    id: 8,
    username: "bidurtimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "pending",
    email: "bidurtimalsina7@gmail.com",
    age: 29,
  },
  {
    id: 9,
    username: "ramtimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "active",
    email: "ramtimalsina7@gmail.com",
    age: 29,
  },
  {
    id: 10,
    username: "gangatimalsina",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    status: "passive",
    email: "gangatimalsina7@gmail.com",
    age: 29,
  },
];
