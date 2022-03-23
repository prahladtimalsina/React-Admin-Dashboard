import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const List = () => {
  const rows = [
    {
      id: 1321354,
      product: "acer",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      customer: "Prahlad Timalsina",
      date: "1 March",
      amount: 789,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 13354,
      product: "acer",
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      customer: "john doe",
      date: "1 March",
      amount: 789,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 13214,
      product: "acer",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      customer: "john smith",
      date: "1 March",
      amount: 789,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 13213,
      product: "acer",
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      customer: "harold ",
      date: "1 March",
      amount: 789,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 1354,
      product: "acer",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      customer: "sinka",
      date: "1 March",
      amount: 789,
      method: "Online Payment",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
