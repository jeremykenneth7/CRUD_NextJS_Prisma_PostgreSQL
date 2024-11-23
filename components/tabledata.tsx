import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Employee = async () => {
    const employees = await prisma.employee.findMany();

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th className="py-3 px-6">#</th>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Email</th>
                        <th className="py-3 px-6">Phone</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.id}>
                            <td className="py-3 px-6">{index + 1}</td>
                            <td className="py-3 px-6">{employee.name}</td>
                            <td className="py-3 px-6">{employee.email}</td>
                            <td className="py-3 px-6">{employee.phone}</td>
                            <td className="py-3 px-6 text-center">
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>  
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employee;