import prisma from '../../database/client.js';

async function createEmployee(req, res) {
    const { id, name, company, role, department, admissionDate, shirt_size, pants_size, shoes_size} = req.body;

    try {
        const newEmployee = await prisma.employee.create({
            data: {
                id,
                name,
                company,
                role,
                department,
                admissionDate,
                shirt_size,
                pants_size,
                shoes_size
            }
        });

        res.json(newEmployee);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function getEmployee(req, res) {
    const { id } = req.params;

    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        res.json(employee);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function getEmployees(req, res) {
    try {
        const employees = await prisma.employee.findMany();

        res.json(employees);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function updateEmployee(req, res) {
    const { id } = req.params;
    const { name, company, role, department, admissionDate, shirt_size, pants_size, shoes_size } = req.body;

    try {
        const employee = await prisma.employee.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                company,
                role,
                department,
                admissionDate,
                shirt_size,
                pants_size,
                shoes_size
            }
        });

        res.json(employee);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function deleteEmployee(req, res) {
    const { id } = req.params;

    try {
        const employee = await prisma.employee.delete({
            where: {
                id: parseInt(id)
            }
        });

        res.json(employee);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

export { 
    createEmployee,
    getEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee
};
