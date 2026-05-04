export const create = async (profile) => {
    const tranformedProfile = {
        name: profile.firstName + " " + profile.lastName,
        birthdate: profile.dob,
        "program": profile.course + " " + profile.major,
        "address": profile.address,
        "studentStatus": profile.status,
    }

    const response = await fetch(
        `https://ais-simulated-legacy.onrender.com/api/students`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tranformedProfile)

        });
        return await response.json();
    }
    
export const getAllStudents = async () => {
    try {
        const response = await fetch(
            `https://ais-simulated-legacy.onrender.com/api/students`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const data = await response.json();


        const transformed = data.map(student => ({
            id: student.id,
            name: student.name,
            birthdate: student.birthdate,
            program: student.program,
            address: student.address,
            status: student.studentStatus
        }));

        return transformed;

    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
};