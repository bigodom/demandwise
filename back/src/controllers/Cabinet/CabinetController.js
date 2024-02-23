import prisma from '../../database/client.js'

async function createCabinet(req, res) {
    const { number, size, sector, situation, date, employeeId } = req.body;

    try {
        const newCabinet = await prisma.cabinet.create({
            data: {
                number,
                size,
                sector,
                situation,
                date,
                employeeId
            }
        });

        res.json(newCabinet);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function getCabinet(req, res) {
    const { id } = req.params;

    try {
        const cabinet = await prisma.cabinet.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        res.json(cabinet);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function getCabinets(req, res) {
    try {
        const cabinets = await prisma.cabinet.findMany();

        res.json(cabinets);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function updateCabinet(req, res) {
    const { id } = req.params;
    const { number, size, sector, situation, date, employeeId } = req.body;

    try {
        const cabinet = await prisma.cabinet.update({
            where: {
                id: parseInt(id)
            },
            data: {
                number,
                size,
                sector,
                situation,
                date,
                employeeId
            }
        });

        res.json(cabinet);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

async function deleteCabinet(req, res) {
    const { id } = req.params;

    try {
        const cabinet = await prisma.cabinet.delete({
            where: {
                id: parseInt(id)
            }
        });

        res.json(cabinet);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

export {
    createCabinet,
    getCabinet,
    getCabinets,
    updateCabinet,
    deleteCabinet
}
