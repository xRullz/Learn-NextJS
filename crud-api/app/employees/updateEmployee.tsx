"use client";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Employee = {
  id: number;
  name: string;
  age: number,
  salary: number,
  department: string
};

export default function UpdateEmployee(employee:  Employee) {

  const [name, setName] = useState(employee.name);
  const [age, setAge] = useState(employee.age);
  const [salary, setSalary] = useState(employee.salary);
  const [department, setDepartment] = useState(employee.department);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);
    await fetch(`http://localhost:5000/employees/${employee.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        salary: salary,
        department: department,
      }),
    });

    setIsMutating(false);
    
    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn" onClick={handleChange}>
       Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {employee.name}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Employee Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Employee Name"
              />
              <label className="label font-bold">Age</label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Age"
              />
              <label className="label font-bold">Salary</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Salary"
              />
              <label className="label font-bold">Departement</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Departement"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-info">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updateing...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
