import AddEmployee from "./addEmployee";
import DeleteEmployee from "./deleteEmployee";
import UpdateEmployee from "./updateEmployee";

type Employee = {
  id: number;
  name: string;
  age: number;
  salary: number;
  department: string;
};

async function getEmployees() {
  const res = await fetch("http://localhost:5000/employees", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ProductList() {
  const employees: Employee[] = await getEmployees();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddEmployee />
      </div>
      <table className="table w-full">
        <thead className="bg-gray-200">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Departement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.department}</td>
              <td className="flex m-auto">
                <UpdateEmployee {...employee} />
                <DeleteEmployee {...employee} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
