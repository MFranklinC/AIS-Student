import * as AuthService from "../services/authServices.js";

export const registerStudent= async (req, res) => {
    const { firstName, lastName, dob, course, major, address, status } = req.body;

    try  {
        const studentProfile = {
            firstName, lastName, dob, course, major, address, status
        }

        const result = await AuthService.registerStudent(studentProfile);
        res.status(201).json({
        success: true,
        message: result
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "An error occurred while registering the student: "
        })
    }
}

export const fetchStudents = async (req, res) => {
    try {
        const response = await fetch("https://ais-simulated-legacy.onrender.com/api/students");
        const data = await response.json();

        res.json(data); // ✅ return SAME JSON
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch from legacy system"
        });
    }
};;

export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await fetch(
            `https://ais-simulated-legacy.onrender.com/api/students/${id}`
        );

        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch student by ID" });
    }
};