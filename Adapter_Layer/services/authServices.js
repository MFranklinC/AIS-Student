import * as AuthAdapter from "../adapters/authAdapter.js";

export const registerStudent = async (studentProfile) => {

    if (studentProfile.firstName === "") {
        throw new Error("First Name is required");
    }

    if (studentProfile.lastName === " ") {
        throw new Error("Last Name is required");
    }

    if (studentProfile.dob === "") {
        throw new Error("Birthdate is required");
    }

    if (studentProfile.course === "") {
        throw new Error("Course is required");
    }

    if (studentProfile.major === "") {
        throw new Error("Major is required");
    }

    if (studentProfile.address === "") {
        throw new Error("Address is required");
    }

    if (studentProfile.status === "") {
        throw new Error("Status is required");
    }

    return await AuthAdapter.create(studentProfile);
}

export const getStudents = async () => {
    try {
        const students = await AuthAdapter.getAllStudents();
        return students;
    } catch (error) {
        throw new Error("Failed to fetch students");
    }
};